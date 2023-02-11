import eyeIcon from "../../assets/icons/eye.svg";
import { useGlobalContext } from "../../context/GlobalContext";

export default function Login() {
  const { toggleInitialRender } = useGlobalContext();

  return (
    <div className="bg-theme-gradient-border rounded-lg p-0.5">
      <div className="bg-theme-gradient py-10 px-6 w-fit rounded-lg">
        <form>
          <p className="font-medium text-sm text-theme-gray-600 mb-2 uppercase text-center">
            Welcome back
          </p>
          <h6 className="font-semibold text-lg leading-[1.375rem] uppercase text-white text-center mb-11">
            Log into your account
          </h6>
          <fieldset className="mb-4">
            <label className="block font-medium text-sm text-theme-gray-700 mb-2.5">
              Email or Username
            </label>
            <input
              className="block p-3 w-[26rem] placeholder:text-theme-gray-500 text-base h-11 border-[1.5px] border-theme-black-500 rounded bg-transparent outline-none"
              type="text"
              placeholder="Enter your email or username"
            />
          </fieldset>
          <fieldset className="mb-5">
            <label className="font-medium text-sm text-theme-gray-700 mb-2.5 flex items-center justify-between">
              <span>Password</span>
              <span>Forgot password?</span>
            </label>
            <div className="relative w-[26rem]">
              <input
                className="block p-3 w-full placeholder:text-theme-gray-500 text-base h-11 border-[1.5px] border-theme-black-500 rounded bg-transparent outline-none"
                type="password"
                placeholder="Enter your password"
              />
              <img
                src={eyeIcon}
                alt="Eye icon"
                className="absolute right-4 top-4"
              />
            </div>
          </fieldset>
          <button
            className="w-full p-3 flex items-center justify-center bg-theme-blue rounded font-medium text-white mb-3"
            type="button"
            onClick={toggleInitialRender}
          >
            Login now
          </button>
          <p className="font-medium text-sm text-theme-gray-500">
            Not registered yet?{" "}
            <strong className="text-theme-gray-700">Register &#8594;</strong>
          </p>
        </form>
      </div>
    </div>
  );
}
