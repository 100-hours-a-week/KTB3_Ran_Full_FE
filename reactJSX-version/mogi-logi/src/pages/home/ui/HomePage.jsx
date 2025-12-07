import { PostCardProps } from "@/entities/post";
import { useEffect, useRef } from "react";
import { PostCard } from "@/entities/post";
import { PostCreateNavButton } from "@/features/post";
import { useHomeInfiniteQueue } from "@/features/home";
import { useScrollStore } from "@/shared";

export function HomePage() {
  const loaderRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useHomeInfiniteQueue();

  const { saveScroll, savePageIndex, getSavedState } = useScrollStore();

  //1. 스크롤 위치 저장
  useEffect(() => {
    const save = () => saveScroll();
    window.addEventListener("scroll", save);
    return () => window.removeEventListener("scroll", save);
  }, []);

  //2) 새로고침 시 스크롤 + 페이지 복원
  useEffect(() => {
    const { scrollY, pageIndex } = getSavedState();
    if (scrollY === 0 && pageIndex === 0) return; // 저장 기록 없으면 패스

    let pageLoaded = 0;

    // 저장된 페이지까지 fetch 반복
    const restore = async () => {
      while (pageLoaded < pageIndex && hasNextPage) {
        await fetchNextPage();
        pageLoaded++;
      }

      // 페인트 이후 스크롤 복원
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    };

    restore();
  }, [fetchNextPage, hasNextPage]);

  //3) 페이지 로드될 때마다 현재 페이지 index 저장
  useEffect(() => {
    if (!data) return;
    savePageIndex(data.pages.length - 1);
  }, [data]);

  // 4) 옵저버

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
