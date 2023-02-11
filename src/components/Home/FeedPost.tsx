import commentsIcon from "../../assets/icons/comments.svg";
import { useGlobalContext } from "../../context/GlobalContext";
import { IPost } from "../../models/post";

interface FeedPostProps {
  post: IPost;
}

export default function FeedPost({ post }: FeedPostProps) {
  const { updateState } = useGlobalContext();
  return (
    <div
      className="py-6 px-5 border-2 border-theme-black-500 rounded-lg bg-theme-black-600 mb-4 cursor-pointer"
      onClick={() => updateState({ showModal: true })}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <div className="w-11 h-11 rounded-full mr-4">
              <img
                src={post.author.profilePic}
                alt={post.author.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-base text-theme-gray-700 mb-1">
                {post.author.name}
              </h3>
              <div className="font-medium text-sm text-theme-gray-500 flex items-center">
                <span>{post.createdAt}</span>
                {post.updatedAt && (
                  <>
                    <div className="w-1 h-1 rounded-full mx-1 bg-theme-gray-500"></div>
                    <span>Edited</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-1 bg-theme-gray-700 rounded-full mr-0.5"></div>
            <div className="w-1 h-1 bg-theme-gray-700 rounded-full mr-0.5"></div>
            <div className="w-1 h-1 bg-theme-gray-700 rounded-full mr-0.5"></div>
          </div>
        </div>
        <div className="bg-theme-black-800 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-theme-black-600 flex-shrink-0 mr-4">
              <p className="text-lg">{post.emotion}</p>
            </div>
            <p className="text-base text-theme-gray-500">{post.content}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={commentsIcon} alt="comments icon" className="w-5 h-5" />
          <div className="ml-2 text-theme-gray-500 text-sm">
            <span>{post.commentsCount}</span>
            <span className="ml-1">comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
