import {
  PostComments,
  PostHeader,
  ScrollProgressBar,
} from "@/widgets/index.js";
import { PostContent, PostCountGroup } from "@/entities/index.js";

export function PostDetailPresenter({
  headerProps,
  contentProps,
  countProps,
  liked,
  onLikeToggle,
  onRefresh,
}) {
  return (
    <div className={"post-wrapper"}>
      <ScrollProgressBar />

      <PostHeader {...headerProps} />
      <PostContent {...contentProps} />
      <PostCountGroup
        {...countProps}
        liked={liked}
        onLikeToggle={onLikeToggle}
        likeColor={"var(--color-primary)"}
      />

      <hr />

      {/*props로 가공되지 않았음 */}
      <PostComments post={headerProps} onLoad={onRefresh} />
    </div>
  );
}
