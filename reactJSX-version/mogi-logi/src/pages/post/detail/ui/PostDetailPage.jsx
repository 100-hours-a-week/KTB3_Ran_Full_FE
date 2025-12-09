import { PostCountProps } from "@/entities/post";
import { PostHeaderProps } from "@/entities/post";
import { PostContent } from "@/entities/post";
import { PostCountGroup } from "@/entities/post";
import { ScrollProgressBar, PostComments, PostHeader } from "@/widgets";
import { PostContentProps } from "@/entities/post";
import { useParams } from "react-router-dom";
import { usePostDetail } from "@/features/post";
import { useLikeCreat, useLikeDelete } from "@/features/like";

export function PostDetailPage() {
  const { id } = useParams();
  const postId = id;

  const { likeCreat, isLoading: isCreating } = useLikeCreat(postId);
  const { likeDelete, isLoading: isDeleting } = useLikeDelete(postId);

  const { data, isLoading, error, refetch } = usePostDetail(postId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  const headerProps = PostHeaderProps(data);
  console.log(headerProps);
  const contentProps = PostContentProps(data);
  const countProps = PostCountProps(data.count);

  if (isLoading) return <div>로딩중...</div>;

  const onLikeToggle = async () => {
    if (!data.liked) {
      await likeCreat();
    } else {
      await likeDelete();
    }
  };
  return (
    <div className={"post-wrapper"}>
      <ScrollProgressBar />

      <PostHeader {...headerProps} />
      <PostContent {...contentProps} />
      <PostCountGroup
        {...countProps}
        liked={data.liked}
        onLikeToggle={onLikeToggle}
        likeColor={"var(--color-primary)"}
      />

      <hr />

      {/*props로 가공되지 않았음 */}
      <PostComments post={data} onLoad={refetch} />
    </div>
  );
}
