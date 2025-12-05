import { useEffect, useState } from "react";
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
  //1. 전체 관할 dto

  const [post, setPost] = useState(null);
  const { handlePostDetail } = usePostDetail();
  const { id } = useParams();
  const postId = id;

  const { handleLikeCreat } = useLikeCreat();
  const { handleLikeDelete } = useLikeDelete();

  const reload = async () => {
    try {
      const data = await handlePostDetail(postId);
      console.log(data);
      if (!data) {
        console.error("API에서 게시글 데이터를 받지 못했습니다.");
        return;
      }
      setPost(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    reload();
  }, [id]);

  if (!post) return <div>Loading...</div>;
  console.log(post);

  const onLikeToggle = async () => {
    if (!post) return;
    if (!post.liked) {
      await handleLikeCreat({ postId: postId });
    } else {
      await handleLikeDelete({ postId: postId });
    }
    reload();
  };

  const headerProps = PostHeaderProps(post);
  console.log(headerProps);

  const contentProps = PostContentProps(post);
  const countProps = PostCountProps(post.count);

  return (
    <div>
      <ScrollProgressBar />

      <PostHeader {...headerProps} />
      <PostContent {...contentProps} />
      <PostCountGroup
        {...countProps}
        liked={post.liked}
        onLikeToggle={onLikeToggle}
      />

      <hr />

      {/*props로 가공되지 않았음 */}
      <PostComments post={post} onLoad={reload} />
    </div>
  );
}
