import { useGlobalContext } from "../../context/GlobalContext";

export default function CreatePost() {
  const { updateState } = useGlobalContext();
  return (
    <div
      className="py-6 px-5 bg-theme-gradient border-2 border-theme-black-500 rounded-lg mb-4 cursor-pointer"
      onClick={() => updateState({ showModal: true })}
    >
      <h6 className="font-medium text-lg text-theme-gray-700 mb-4">
        Create post
      </h6>
      <div className="bg-theme-black-800 rounded-lg p-4 mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-theme-black-600 mr-4">
            <p className="text-lg">💬</p>
          </div>
          <p className="text-base text-theme-gray-500">
            How are you feeling today?
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="bg-theme-blue p-3 text-white font-medium text-base rounded w-28"
        >
          Post
        </button>
      </div>
    </div>
  );
}
