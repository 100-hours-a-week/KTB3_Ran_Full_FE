import { useEffect, useRef } from "react";
import { useHomeInfiniteQueue } from "@/features/index.js";
import { useScrollStore } from "@/shared/index.js";
import { HomeFeedPresenter } from "@/features/home/ui/HomeFeed.presenter.jsx";

export function HomeFeedContainer() {
  // //기본 브라우저의 복원 기능 끄기
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  //옵저버가 관찰할 대상(DOM)이 필요함-> 트리거를 관찰함 .
  //없으면 : 옵저버가 관찰할 대상이 없어서 무한스크롤이 동작하지 않음.
  const loaderRef = useRef(null);

  const lastSavedYRef = useRef(0);

  const restorePhaseRef = useRef("idle"); // 'idle' | 'restoring' | 'done'

  const restoreTargetRef = useRef(null); // 목표 pageIndex

  const isFetchingRestoreRef = useRef(false);

  //[====훅 생성====]

  //[데이터 페이지 네이션 훅]
  //data: 지금까지 로드된 페이지
  //fetchNextPage: 다음페이지 로드 함수
  //hasNextPage : 다음 페이지 여부
  //isLoading : 첫 로딩 상태
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useHomeInfiniteQueue();

  //[스크롤 상태 저장소 훅]
  //saveScroll : set : 스크롤Y위치 저장
  //savePageIndex : set : 스크롤이 어디 Page까지 스크롤됬는지 저장
  //getSavedState : get : 저장된 pageIndex, scrollY 반환
  const { saveScroll, savePageIndex, getSavedState } = useScrollStore();

  //[ Effect 1. 스크롤 위치 저장 ]
  //컴포넌트가 마운트 될때마다 스크롤 이벤트 등록, 언마운트 시 해제
  const ignoreNextScrollRef = useRef(false);

  useEffect(() => {
    const save = () => {
      if (restorePhaseRef.current !== "done") return;

      if (ignoreNextScrollRef.current) {
        ignoreNextScrollRef.current = false;
        return;
      }

      requestAnimationFrame(() => {
        const y = window.scrollY;

        // ✅ 오염 방지: 의미 없는 0 덮어쓰기 차단
        // (이미 충분히 내려간 기록이 있는데 갑자기 0이면 저장하지 않음)
        if (y === 0 && lastSavedYRef.current > 300) return;

        lastSavedYRef.current = y;
        saveScroll(y); // 가능하면 saveScroll에 y를 넘기고, 아니면 saveScroll 내부에서 window.scrollY 읽게
      });
    };

    window.addEventListener("scroll", save);
    console.log("[restore-scrollTo]", restoreTargetRef.current);

    return () => window.removeEventListener("scroll", save);
  }, [saveScroll]);

  //[ Effect 2. pageIndex 저장 ]
  useEffect(() => {
    if (!data) return;

    // 복구 끝나기 전엔 저장 금지
    if (restorePhaseRef.current !== "done") return;

    requestAnimationFrame(() => {
      savePageIndex(data.pages.length - 1);
    });
  }, [data, savePageIndex]);

  //[ Effect 3. 새로고침 시  ]
  //스크롤 + 페이지네이션 복구
  useEffect(() => {
    if (restorePhaseRef.current !== "idle") return;
    if (!data) return;

    const { scrollY, pageIndex } = getSavedState();

    if (scrollY === 0 && pageIndex === 0) {
      restorePhaseRef.current = "done";
      ignoreNextScrollRef.current = true;
      console.log(
        "[restore-step]",
        "phase",
        restorePhaseRef.current,
        "currentPage",
        data?.pages?.length - 1,
        "target",
        restoreTargetRef.current?.pageIndex,
        "hasNextPage",
        hasNextPage,
        "inFlight",
        isFetchingRestoreRef.current,
      );

      return;
    }

    restorePhaseRef.current = "restoring";
    restoreTargetRef.current = { scrollY, pageIndex };
  }, [data, getSavedState]);

  useEffect(() => {
    if (!restoreTargetRef.current) return;
    if (restorePhaseRef.current !== "restoring") return;
    if (!data) return;

    console.log(
      "[restore-start]",
      getSavedState(),
      "dataPages",
      data?.pages?.length,
    );

    const { pageIndex, scrollY } = restoreTargetRef.current;
    const currentPage = data.pages.length - 1;

    if (
      currentPage < pageIndex &&
      hasNextPage &&
      !isFetchingRestoreRef.current
    ) {
      isFetchingRestoreRef.current = true;

      fetchNextPage().finally(() => {
        isFetchingRestoreRef.current = false;
      });

      return;
    }

    if (currentPage >= pageIndex) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
        requestAnimationFrame(() => {
          restoreTargetRef.current = null;
          restorePhaseRef.current = "done";
        });
      });
    }
  }, [data, hasNextPage, fetchNextPage]);

  // [ Effect 4. 옵저버 ]
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          hasNextPage &&
          restorePhaseRef.current === "done"
        ) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;

  return <HomeFeedPresenter pages={data?.pages} loaderRef={loaderRef} />;
}
