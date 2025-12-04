import { PostCardProps } from "../../../entities/post/model/PostCardProps";
import { useEffect, useState } from "react";
import { PostCard } from "../../../entities/post/ui/PostCard";
import { useHome } from "../../../features/home/hooks/useHome";
import { PostCreateNavButton } from "../../../features/post/create/ui/PostNavIconButton";

export function HomePage() {
  //hook로 분리하는게 낫나
  const [posts, setPosts] = useState([]);
  const { handleUseHome } = useHome();

  useEffect(() => {
    async function load() {
      try {
        const data = await handleUseHome();
        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    }

    load();
  }, []);

  return (
    <div className="post-wrapper">
      {posts.map((post) => {
        const postCard = PostCardProps(post);
        return <PostCard key={postCard.postId} {...postCard} />;
      })}
      <PostCreateNavButton />
    </div>
  );
}
