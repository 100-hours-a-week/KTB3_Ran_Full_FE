import { usePostCreat } from "../../../features/post/create/hooks/usePostCreat";
import { PostCreateButton } from "../../../features/post/create/ui/PostCreateButton";
import PostCreateContentInput from "../../../features/post/create/ui/PostCreateContentInput";
import { PostCreateTitleInput } from "../../../features/post/create/ui/PostCreateTitleInput";
import { useInput } from "../../../shared/hooks/useInput";
import {
  validatePostContent,
  validatePostTitle,
} from "../../../features/post/create/lib/validater";

export function PostCreatePage() {
  const title = useInput("", validatePostTitle);
  const content = useInput("", validatePostContent);

  const canSubmit = !title.error && !content.error;
  const { handlePostCreat } = usePostCreat();

  const onSubmit = () => {
    console.log("선택됨", title, content);
    if (!canSubmit) return;
    handlePostCreat({ title: title.value, content: content.value });
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
