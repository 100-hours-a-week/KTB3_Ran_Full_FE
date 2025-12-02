import { PostCardProps } from "../../../entities/post/model/PostCardProps";
import { PostCard } from "../../../entities/post/ui/PostCard";
import { PostCreateNavButton } from "../../../features/post/create/ui/PostNavIconButton";

const dummyPost = {
  id: 5,
  title: "타입 스크립트의 타입 정의 상속에 대하여",
  author: "새벽형인간",
  imgUrl: null,
  content:
    "Lorem ipsum dolor sit amet consectetur. Ut non cursus orci amet maecenas dictum purus consectetur. Gravida sed cursus sapien pellentesque egestas. Turpis pellentesque egestas",
  commentCount: 10,
  likeCount: 10,
  viewCount: 13,
  createdAt: "2025-11-30T18:54:10.676766",
};

export function HomePage() {
  const postCardDummy = PostCardProps(dummyPost);
  return (
    <div className="post-wrapper">
      <PostCard {...postCardDummy} />
      <PostCard {...postCardDummy} />
      <PostCard {...postCardDummy} />
      <PostCard {...postCardDummy} />
      <PostCard {...postCardDummy} />
      <PostCard {...postCardDummy} />
      <PostCard {...postCardDummy} />
      <PostCreateNavButton />
    </div>
  );
}
