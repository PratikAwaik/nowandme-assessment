import AuthWrapper from "./AuthWrapper";
import Fieldset from "../Utils/Fieldset";

export default function Register() {
  return (
    <AuthWrapper
      heading="sign up"
      subHeading="create an account to continue"
      submitBtnText="Continue"
      footerText="Already have an account?"
      footerLinkText="Login"
    >
      <Fieldset
        inputType="email"
        label="Email"
        placeholder="Enter your email"
      />
      <Fieldset
        inputType="text"
        label="Username"
        placeholder="Choose a preferred username"
      />
      <Fieldset
        inputType="password"
        isPasswordField
        label="Password"
        placeholder="Choose a strong password"
      />
    </AuthWrapper>
  );
}
