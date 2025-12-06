import { PostCardProps } from "../../../entities/post/model/PostCardProps";
import { useEffect, useRef, useState } from "react";
import { PostCard } from "../../../entities/post/ui/PostCard";
import { PostCreateNavButton } from "../../../features/post/create/ui/PostNavIconButton";
import { useHomeInfiniteQueue } from "../../../features/home/hooks/useHomeInfiniteQueue.js";

export function HomePage() {
  const loaderRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useHomeInfiniteQueue();
  // Intersection Observer
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
    return () => observer.disconnect(); //클린업
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

      {/*이 div가 화면에 보일 때 loadPage 실행됨 */}
      <div ref={loaderRef} style={{ height: "50px" }} />

      <PostCreateNavButton />
    </div>
  );
}
