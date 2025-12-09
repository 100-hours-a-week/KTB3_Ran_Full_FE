import { useLocation } from "react-router-dom";
import {
  PostCreatPresenter,
  usePostCreat,
  usePostUpdate,
  validatePostContent,
  validatePostTitle,
} from "@/features/index.js";
import { useInput } from "@/shared/index.js";

export function PostCreatContainer() {
  const location = useLocation();
  const editData = location.state; //state 받기기
  const postId = editData?.postId;
  const isEditMode = editData?.mode === "update";

  const { mutate: postUpdate, isLoading: isUpdating } = usePostUpdate(postId);
  const { mutate: postCreat, isLoading: isCreating } = usePostCreat();

  const title = useInput(editData?.title || "", validatePostTitle);
  const content = useInput(editData?.content || "", validatePostContent);

  const canSubmit =
    title.value.length > 0 &&
    content.value.length > 0 &&
    !title.error &&
    !content.error;

  const onSubmit = async () => {
    if (!canSubmit) return;

    const payload = {
      title: title.value,
      content: content.value,
    };

    if (isEditMode) {
      console.log(payload);
      await postUpdate(payload);
    } else {
      await postCreat(payload);
    }
  };

  return (
    <PostCreatPresenter
      title={title}
      content={content}
      canSubmit={canSubmit}
      onSubmit={onSubmit}
      isEditMode={isEditMode}
    />
  );
}
