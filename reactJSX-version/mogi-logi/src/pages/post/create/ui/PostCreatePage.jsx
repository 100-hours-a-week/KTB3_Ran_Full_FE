import { usePostCreat } from "../../../../features/post/create/hooks/usePostCreat.js";
import { PostCreateButton } from "../../../../features/post/create/ui/PostCreateButton.jsx";
import PostCreateContentInput from "../../../../features/post/create/ui/PostCreateContentInput.jsx";
import { PostCreateTitleInput } from "../../../../features/post/create/ui/PostCreateTitleInput.jsx";
import { useInput } from "../../../../shared/hooks/useInput.jsx";
import {
  validatePostContent,
  validatePostTitle,
} from "../../../../features/post/create/lib/validater.js";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostUpdate } from "../../../../features/post/update/hooks/usePostUpdate.js";

export function PostCreatePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state; //state 받기기
  const isEditMode = editData?.mode === "update";
  const { handlePostUpdate } = usePostUpdate();
  const { postCreat } = usePostCreat();

  const title = useInput(editData?.title || "", validatePostTitle);
  const content = useInput(editData?.content || "", validatePostContent);

  const canSubmit =
    title.value.length > 0 &&
    content.value.length > 0 &&
    !title.error &&
    !content.error;

  const onSubmit = async () => {
    console.log(canSubmit);
    if (!canSubmit) return;

    if (isEditMode) {
      await handlePostUpdate(
        {
          title: title.value,
          content: content.value,
        },
        editData.postId,
      );
      console.log("완료");
      navigate(`/post/get/${editData.postId}`);
    } else {
      postCreat({ title: title.value, content: content.value });
      navigate("/home");
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
