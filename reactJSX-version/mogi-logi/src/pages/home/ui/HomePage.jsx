import { PostCardProps } from "../../../entities/post/model/PostCardProps";
import { useEffect, useRef, useState } from "react";
import { PostCard } from "../../../entities/post/ui/PostCard";
import { useHome } from "../../../features/home/hooks/useHome";
import { PostCreateNavButton } from "../../../features/post/create/ui/PostNavIconButton";

export function HomePage() {
  const [posts, setPosts] = useState([]); // 누적된 전체 게시글 목록
  const [page, setPage] = useState(0); // 현재 페이지 번호
  const [hasNext, setHasNext] = useState(true); // 마지막 페이지 여부
  const [loading, setLoading] = useState(false); // 중복 요청 방지

  const { handleUseHome } = useHome();
  const loaderRef = useRef(null);

  // 페이지 로드 함수
  const loadPage = async () => {
    if (loading || !hasNext) return;

    setLoading(true);

    const postPage = await handleUseHome(page);
    console.log("응답:", postPage);

    setPosts((prev) => [...prev, ...postPage.content]);
    setHasNext(!postPage.last);
    setPage((prev) => prev + 1);

    setLoading(false);
  };

  // 최초 1번 실행
  useEffect(() => {
    loadPage();
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          loadPage();
        }
      },
      { threshold: 1 },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect(); //클린업
  }, [loaderRef.current, hasNext, loading]);

  return (
    <div className="post-wrapper">
      {posts.map((post) => {
        const postCard = PostCardProps(post);
        return (
          <PostCard
            key={postCard.postId}
            {...postCard}
            likeColor={"var(--color-meta-gray)"}
          />
        );
      })}

      {/*이 div가 화면에 보일 때 loadPage 실행됨 */}
      <div ref={loaderRef} style={{ height: "50px" }} />

      <PostCreateNavButton />
    </div>
  );
}
