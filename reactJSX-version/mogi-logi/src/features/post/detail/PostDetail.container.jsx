import { PostDetailPresenter } from "@/pages/post";
import { useParams } from "react-router-dom";

import { PostCountProps } from "@/entities/post";
import { PostHeaderProps } from "@/entities/post";
import { PostContentProps } from "@/entities/post";
import { usePostDetail } from "@/features/post";
import { useLikeCreat, useLikeDelete } from "@/features/like";

export function PostDetailContainer() {
  const { id } = useParams();
  const postId = id;

  const { likeCreat, isLoading: isCreating } = useLikeCreat(postId);
  const { likeDelete, isLoading: isDeleting } = useLikeDelete(postId);

  const { data, isLoading, error, refetch } = usePostDetail(postId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  const headerProps = PostHeaderProps(data);
  const contentProps = PostContentProps(data);
  const countProps = PostCountProps(data.count);
  console.log(headerProps, contentProps, countProps);

  if (isLoading) return <div>로딩중...</div>;

  const onLikeToggle = async () => {
    if (!data.liked) {
      await likeCreat();
    } else {
      await likeDelete();
    }
  };

  return (
    <PostDetailPresenter
      headerProps={headerProps}
      contentProps={contentProps}
      countProps={countProps}
      liked={data.liked}
      onRefresh={refetch}
      onLikeToggle={onLikeToggle}
    />
  );
}
