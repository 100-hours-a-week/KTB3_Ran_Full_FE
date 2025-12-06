import { useMemo } from "react";
import { PostCountProps } from "../../../../entities/post/model/PostCountProps.jsx";
import { PostHeaderProps } from "../../../../entities/post/model/PostHeaderProps.jsx";
import { PostContent } from "../../../../entities/post/ui/PostContent.jsx";
import PostCountGroup from "../../../../entities/post/ui/PostCountGroup.jsx";
import PostHeader from "../../../../entities/post/ui/PostHeader.jsx";
import ScrollProgressBar from "../../../../widgets/ScrollProgressBar/ui/ScrollProgressBar.jsx";
import { usePostDetail } from "../../../../features/post/detail/hooks/usePostDetail.js";
import { PostContentProps } from "../../../../entities/post/model/PostContentProps.jsx";
import { PostComments } from "../../../../widgets/post-comments/ui/PostComments.jsx";
import { useParams } from "react-router-dom";
import { useLikeCreat } from "../../../../features/like/creat/hooks/useLikeCreat.js";
import { useLikeDelete } from "../../../../features/like/delete/hooks/useLikeDelete.js";

export function PostDetailPage() {
  const { id } = useParams();
  const postId = id;

  const { handleLikeCreat } = useLikeCreat();
  const { handleLikeDelete } = useLikeDelete();

  const { data, isLoading, error, refetch } = usePostDetail(postId);

  const headerProps = useMemo(
    () => (data ? PostHeaderProps(data) : null),
    [data],
  );
  const contentProps = useMemo(
    () => (data ? PostContentProps(data) : null),
    [data],
  );
  const countProps = useMemo(
    () => (data ? PostCountProps(data.count) : null),
    [data],
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  console.log(data);

  const onLikeToggle = async () => {
    if (!data) return;
    if (!data.liked) {
      await handleLikeCreat({ postId: postId });
    } else {
      await handleLikeDelete({ postId: postId });
    }

    refetch();
  };
  return (
    <div>
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
