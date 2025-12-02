import { PostCreateButton } from "../../../features/post/create/ui/PostCreateButton";
import { PostCreateTitleInput } from "../../../features/post/create/ui/PostCreateTitleInput";

export function PostCreatePage() {
  return (
    <div>
      <PostCreateTitleInput placeholder={"제목"} />
      <PostCreateButton />
    </div>
  );
}
