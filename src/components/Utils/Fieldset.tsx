import eyeIcon from "../../assets/icons/eye.svg";

interface FieldsetProps {
  label: string;
  inputType: string;
  isPasswordField?: boolean;
  placeholder: string;
}

export default function Fieldset({
  label,
  inputType,
  isPasswordField = false,
  placeholder,
}: FieldsetProps) {
  return (
    <fieldset className="mb-5">
      <label className="font-medium text-sm text-theme-gray-700 mb-2.5 flex items-center justify-between">
        <span>{label}</span>
        {isPasswordField && <span>Forgot password?</span>}
      </label>
      <div className="relative w-[26rem]">
        <input
          className="block p-3 w-full placeholder:text-theme-gray-500 text-base h-11 border-[1.5px] border-theme-black-500 rounded bg-transparent outline-none"
          type={inputType}
          placeholder={placeholder}
        />
        {isPasswordField && (
          <img
            src={eyeIcon}
            alt="Eye icon"
            className="absolute right-4 top-4"
          />
        )}
      </div>
    </fieldset>
  );
}
