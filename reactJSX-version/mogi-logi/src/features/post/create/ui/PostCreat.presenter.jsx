import {
  PostCreateButton,
  PostCreateContentInput,
  PostCreateTitleInput,
} from "@/features/index.js";

export function PostCreatPresenter({
  title,
  content,
  canSubmit,
  onSubmit,
  isEditMode,
}) {
  return (
    <>
      <div className={"post-wrapper"}>
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
