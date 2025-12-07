import { PostCardProps } from "../../../entities/post/model/PostCardProps";
import { useEffect, useRef } from "react";
import { PostCard } from "../../../entities/post/ui/PostCard";
import { PostCreateNavButton } from "../../../features/post/create/ui/PostNavIconButton";
import { useHomeInfiniteQueue } from "../../../features/home/hooks/useHomeInfiniteQueue.js";

export function HomePage() {
  const loaderRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useHomeInfiniteQueue();

  //1) 스크롤 위치 저장
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("home_scrollY", window.scrollY);
    };
    window.addEventListener("scroll", saveScroll);
    return () => window.removeEventListener("scroll", saveScroll);
  }, []);

  //2) 새로고침 시 스크롤 + 페이지 복원
  useEffect(() => {
    const savedScrollY = Number(sessionStorage.getItem("home_scrollY")) || 0;
    const savedPage = Number(sessionStorage.getItem("home_page_index")) || 0;

    if (savedScrollY === 0) return; // 저장 기록 없으면 패스

    let pageLoaded = 0;

    // 저장된 페이지까지 fetch 반복
    const restorePages = async () => {
      while (pageLoaded < savedPage && hasNextPage) {
        await fetchNextPage();
        pageLoaded++;
      }

      // 페인트 이후 스크롤 복원
      requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollY);
      });
    };

    restorePages();
  }, [fetchNextPage, hasNextPage]);

  //3) 페이지 로드될 때마다 현재 페이지 index 저장
  useEffect(() => {
    if (!data) return;
    const currentPageIndex = data.pages.length - 1;
    sessionStorage.setItem("home_page_index", currentPageIndex);
  }, [data]);

  // 4) Intersection Observer

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="post-wrapper">
      {data?.pages?.map((page) =>
        page.content.map((post) => {
          const postCard = PostCardProps(post);
          return (
            <PostCard
              key={postCard.postId}
              {...postCard}
              likeColor={"var(--color-meta-gray)"}
            />
          );
        }),
      )}

      <div ref={loaderRef} style={{ height: "50px" }} />

      <PostCreateNavButton />
    </div>
  );
}
