import { useNavigate } from "react-router-dom";
import { PostHeaderBase } from "@/entities/post";
import { ActionGroupContainer } from "@/features/actionGroup";
import { usePostDelete } from "@/features/post/delete";
import { ContentType } from "@/shared";

export function PostHeader({ title, author, date, postId, content }) {
  const navigate = useNavigate();
  const { postDelete } = usePostDelete(postId);

  const onEdit = () => {
    navigate(`/post/create`, {
      state: { mode: "update", postId, title, content },
    });
  };

  return (
    <PostHeaderBase title={title} author={author} date={date}>
      <ActionGroupContainer
        domainType={ContentType.post}
        postId={postId}
        onEdit={onEdit}
        onDelete={postDelete}
      />
    </PostHeaderBase>
  );
}
