import { SignUpContextProvider } from "../../../context/Unlogged/SignUpContext";
import AnimatedTransition from "../../AnimatedTransition";
import SignUp from "../../../components/Unlogged/Auth/SignUp";
import AlreadyLoggedIn from "../AlreadyLoggedIn";
import { Helmet } from "react-helmet";

function SignUpView() {
  return (
    <AnimatedTransition>
      <AlreadyLoggedIn />
      <SignUpContextProvider>
        <Helmet>
          <title>Blocksidian | Sign Up</title>
        </Helmet>
        <SignUp />
      </SignUpContextProvider>
    </AnimatedTransition>
  );
}

export default SignUpView;
