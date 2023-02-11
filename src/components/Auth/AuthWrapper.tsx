import { useGlobalContext } from "../../context/GlobalContext";

interface AuthWrapperProps {
  heading: string;
  subHeading: string;
  children: React.ReactNode;
  submitBtnText: string;
  footerText: string;
  footerLinkText: string;
}

export default function AuthWrapper({
  heading,
  subHeading,
  children,
  submitBtnText,
  footerText,
  footerLinkText,
}: AuthWrapperProps) {
  const { state, updateState } = useGlobalContext();

  const handleSubmit = () => {
    if (state.showModal) {
      updateState({ showModal: false });
    } else {
      updateState({
        isInitialRender: false,
      });
    }
  };

  return (
    <div className="bg-theme-gradient-border rounded-lg p-0.5 w-fit relative">
      <div className="bg-theme-gradient py-10 px-6 w-fit rounded-lg">
        <form>
          <p className="font-medium text-sm text-theme-gray-600 mb-2 uppercase text-center">
            {heading}
          </p>
          <h6 className="font-semibold text-lg leading-[1.375rem] uppercase text-white text-center mb-11">
            {subHeading}
          </h6>
          {children}
          <button
            className="w-full p-3 flex items-center justify-center bg-theme-blue rounded font-medium text-white mb-3"
            type="button"
            onClick={handleSubmit}
          >
            {submitBtnText}
          </button>
          <p className="font-medium text-sm text-theme-gray-500">
            {footerText}
            <strong
              className="text-theme-gray-700 cursor-pointer ml-1"
              onClick={() => updateState({ isLoginView: !state.isLoginView })}
            >
              {footerLinkText} &#8594;
            </strong>
          </p>
        </form>
      </div>
      {state.showModal && (
        <button
          type="button"
          className="bg-theme-black-700 w-8 h-8 rounded-full flex items-center justify-center absolute top-4 right-4"
          onClick={() => updateState({ showModal: false })}
        >
          <span className="text-white text-sm">&#x2715;</span>
        </button>
      )}
    </div>
  );
}
