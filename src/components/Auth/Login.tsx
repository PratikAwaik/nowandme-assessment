import AuthWrapper from "./AuthWrapper";
import Fieldset from "../Utils/Fieldset";

export default function Login() {
  return (
    <AuthWrapper
      heading="welcome back"
      subHeading="log into your account"
      submitBtnText="Login now"
      footerText="Not registered yet?"
      footerLinkText="Register"
    >
      <Fieldset
        inputType="text"
        label="Email or Username"
        placeholder="Enter your email or username"
      />
      <Fieldset
        inputType="password"
        isPasswordField
        label="Password"
        placeholder="Enter your password"
      />
    </AuthWrapper>
  );
}
