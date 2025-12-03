import { PostCreateButton } from "../../../features/post/create/ui/PostCreateButton";
import PostCreateContentInput from "../../../features/post/create/ui/PostCreateContentInput";
import { PostCreateTitleInput } from "../../../features/post/create/ui/PostCreateTitleInput";

export function PostCreatePage() {
  return (
    <>
      <div>
        <PostCreateTitleInput placeholder={"제목"} />
        <PostCreateContentInput />
      </div>
      <PostCreateButton />
    </>
  );
}
