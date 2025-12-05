import { usePostCreat } from "../../../../features/post/create/hooks/usePostCreat.js";
import { PostCreateButton } from "../../../../features/post/create/ui/PostCreateButton.jsx";
import PostCreateContentInput from "../../../../features/post/create/ui/PostCreateContentInput.jsx";
import { PostCreateTitleInput } from "../../../../features/post/create/ui/PostCreateTitleInput.jsx";
import { useInput } from "../../../../shared/hooks/useInput.jsx";
import {
  validatePostContent,
  validatePostTitle,
} from "../../../../features/post/create/lib/validater.js";
import {useNavigate} from "react-router-dom";

export function PostCreatePage() {
  const title = useInput("", validatePostTitle);
  const content = useInput("", validatePostContent);
    const navigate = useNavigate();

  const canSubmit = !title.error && !content.error;
  const { handlePostCreat } = usePostCreat();

  const onSubmit = async () => {

    console.log("선택됨", title, content);
    if (!canSubmit) return;
    await handlePostCreat({ title: title.value, content: content.value });
      navigate("/home"); //home화면에 setState가 반영되어야됨.
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
      <PostCreateButton onClick={onSubmit} />
    </>
  );
}
