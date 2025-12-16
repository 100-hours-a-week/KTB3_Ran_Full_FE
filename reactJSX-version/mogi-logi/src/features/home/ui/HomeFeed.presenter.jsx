import { Banner } from "@/shared/ui/banner/banner.jsx";
import { PostCard, PostCardProps } from "@/entities/index.js";
import { PostCreateNavButton } from "@/features/index.js";

export function HomeFeedPresenter({ pages, loaderRef }) {
  return (
    <div>
      <Banner />
      <div className="post-wrapper">
        <div
          style={{ display: "flex", gap: "40px", "flex-direction": "column" }}
        >
          {pages?.map((page) =>
            page.content.map((post) => {
              const postCard = PostCardProps(post);
              return (
                <PostCard
                  key={postCard.postId}
                  {...postCard}
                  likeColor={"var(--color-meta-gray)"}
                />
              );
            }),
          )}

          <div ref={loaderRef} style={{ height: "50px" }} />
        </div>

        <PostCreateNavButton />
      </div>
    </div>
  );
}
