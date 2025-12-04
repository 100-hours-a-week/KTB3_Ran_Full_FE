import { useEffect, useState } from "react";
import CommentCard from "../../../entities/comment/ui/CommentCard";
import { CommentCreatForm } from "../../../entities/comment/ui/CommentCreatForm";
import { PostCountProps } from "../../../entities/post/model/PostCountProps";
import { PostHeaderProps } from "../../../entities/post/model/PostHeaderProps";
import { PostContent } from "../../../entities/post/ui/PostContent";
import PostCountGroup from "../../../entities/post/ui/PostCountGroup";
import PostHeader from "../../../entities/post/ui/PostHeader";
import ScrollProgressBar from "../../../widgets/ScrollProgressBar/ui/ScrollProgressBar";
import { usePostDetail } from "../../../features/post/detail/hooks/usePostDetail";
import { PostCardProps } from "../../../entities/post/model/PostCardProps";
import { useParams } from "react-router-dom";
import { PostContentProps } from "../../../entities/post/model/PostContentProps";
import { CommentCardProps } from "../../../entities/comment/model/CommentCardProps";

export function PostDetailPage() {
  const { id } = useParams();
  console.log(id);
  //1. 전체 관할 dto
  const [post, setPost] = useState(null);

  const { handlePostDetail } = usePostDetail();

  useEffect(() => {
    async function load() {
      try {
        const data = await handlePostDetail(id);
        console.log(post);
        if (!data) {
          console.error("API에서 게시글 데이터를 받지 못했습니다.");
          return;
        }
        setPost(data);
      } catch (e) {
        console.error(e);
      }
    }

    load();
  }, [id]);
  if (!post) return <div>Loading...</div>;

  const headerProps = PostHeaderProps(post);

  const contentProps = PostContentProps(post);
  const countProps = PostCountProps(post.count);

  return (
    <div>
      <ScrollProgressBar />

      <PostHeader {...headerProps} />
      <PostContent {...contentProps} />
      <PostCountGroup {...countProps} />

      <hr />

      {/* 댓글 생성 */}
      <CommentCreatForm postId={post.id} />

      {/* 댓글 목록 */}
      {post.comments?.map((c) => {
        const commentProps = CommentCardProps(c);
        return <CommentCard key={commentProps.commentId} {...commentProps} />;
      })}
    </div>
  );
}
