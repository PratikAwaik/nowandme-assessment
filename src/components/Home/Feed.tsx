import { posts } from "../../data/posts";
import CreatePost from "./CreatePost";
import FeedPost from "./FeedPost";

export default function Feed() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-medium text-[1.75rem] mb-3 text-theme-gray-700">
        Hello Jane
      </h2>
      <p className="text-base text-theme-gray-500 mb-10">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <CreatePost />
      {posts.map((post, idx) => (
        <FeedPost key={idx} post={post} />
      ))}
    </div>
  );
}
