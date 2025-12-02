import CommentCard from "../../../entities/comment/ui/CommentCard";
import { CommentCreatForm } from "../../../entities/comment/ui/CommentCreatForm";
import { PostCountProps } from "../../../entities/post/model/PostCountProps";
import { PostContent } from "../../../entities/post/ui/PostContent";
import PostCountGroup from "../../../entities/post/ui/PostCountGroup";
import PostHeader from "../../../entities/post/ui/PostHeader";

const dummyPostDetail = {
  id: 5,
  title: "DTO를 왜 사용하나요?",
  author: "새벽형인간",
  createdAt: "2025-11-30T18:54:10.676766",
  content:
    "Lorem ipsum dolor sit amet consectetur. Pulvinar integer mattis aliquam sed. Et diam vitae et id tristique tortor ut ut. Semper nunc natoque duis nunc. Leo ultrices phasellus facilisi tincidunt id. Enim elementum quam molestie amet mi arcu enim. Nisl sit quam at consequat enim elementum sit. At non purus volutpat aliquet a lectus augue integer sit. Molestie sollicitudin rhoncus sagittis magna risus vivamus nec dolor. Ac sodales erat facilisis vestibulum.Lorem ipsum dolor sit amet consectetur. Accumsan egestas dolor ullamcorper facilisis purus pharetra. Ultricies eget eros mi nunc porttitor feugiat morbi neque nec. Pellentesque eget congue commodo in. Auctor ac quis elit tellus neque. Ipsum donec quam netus euismod diam. Sed arcu in augue fames vitae. Consectetur pellentesque proin ultrices gravida odio. Ultrices nisl id tincidunt velit turpis egestas arcu elit. Tristique volutpat dolor tristique turpis. Dis sed ac varius nunc. Tellus elit at odio porttitor. Libero quis faucibus quam morbi varius nibh. Viverra leo et aliquam proin commodo etiam volutpat iaculis. Nec eget tortor egestas tempor neque ut risus a aliquam. In pulvinar ac arcu pharetra. At egestas vitae nunc sed odio in. Elementum neque elit venenatis id tellus gravida interdum non. Ipsum eros cras sem et nisl. Amet morbi vitae proin gravida nulla ullamcorper felis etiam.",
  imgUrl: null,
  comments: [
    {
      commentId: 8,
      content: "props와 어떤 차이가 있을까요?",
      authorId: 0,
      author: "프론트장인",
      created_at: "2025-11-30T18:57:35.657881",
    },
  ],
  liked: false,
  count: {
    likeCount: 1,
    viewCount: 14,
    commentCount: 1,
  },
};

export function PostDetailPage() {
  const postCount = PostCountProps(dummyPostDetail.count);
  return (
    <div>
      <PostHeader {...dummyPostDetail} />
      <PostContent {...dummyPostDetail} />
      <PostCountGroup {...postCount} />
      <hr />
      <CommentCreatForm />
      {/*commentCard리스트 따로 만들어야할듯 */}
      <CommentCard {...dummyPostDetail} />
    </div>
  );
}
