import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Modal from "../Utils/Modal";
import FeedPost from "./FeedPost";
import { useGlobalContext } from "../../context/GlobalContext";
import { posts } from "../../data/posts";

export default function Feed() {
  const {
    state: { isLoginView, showModal },
  } = useGlobalContext();

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-medium text-[1.75rem] mb-3 text-theme-gray-700">
        Hello Jane
      </h2>
      <p className="text-base text-theme-gray-500 mb-10">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <FeedPost isCreatePost />
      {posts.map((post, idx) => (
        <FeedPost key={idx} post={post} />
      ))}
      <Modal show={showModal}>
        <div>{isLoginView ? <Login /> : <Register />}</div>
      </Modal>
    </div>
  );
}
