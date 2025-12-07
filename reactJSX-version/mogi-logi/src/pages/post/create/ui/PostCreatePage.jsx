import { useInput } from "../../../../shared/hooks/useInput.jsx";
import { useLocation } from "react-router-dom";
import {
  PostCreateButton,
  PostCreateContentInput,
  PostCreateTitleInput,
  usePostCreat,
  usePostUpdate,
  validatePostContent,
  validatePostTitle,
} from "@/features/post";

export function PostCreatePage() {
  const location = useLocation();
  const editData = location.state; //state 받기기
  const postId = editData?.postId;
  const isEditMode = editData?.mode === "update";

  const { postUpdate, isLoading: isUpdating } = usePostUpdate(postId);
  const { postCreat, isLoading: isCreating } = usePostCreat();

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
    <>
      <div>
        <PostCreateTitleInput
          placeholder={"제목"}
          helper={title.error}
          {...title.bind}
        />
        <PostCreateContentInput helper={content.error} {...content.bind} />
      </div>
      <PostCreateButton
        disabled={!canSubmit}
        onClick={onSubmit}
        children={isEditMode ? "수정" : "등록"}
      />
    </>
  );
}
