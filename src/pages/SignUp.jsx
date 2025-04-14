import signupImg from "@/assets/signup-img.png";
import googleIcon from "@/assets/google.svg";
import facebookIcon from "@/assets/facebook.svg";
import appleIcon from "@/assets/apple.svg";
import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
      <div>
        <img src={signupImg} alt="signup" className="max-h-screen" />
      </div>

      <div className="md:w-[400px] mx-auto">
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            welcome to the mothers
          </h2>
          <form className="w-full space-y-5">
            <InputFelid
              label="Username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />

            <InputFelid
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />

            <InputFelid
              label="Phone Number"
              type="text"
              name="phone"
              placeholder="Enter your phone number"
            />

            <InputFelid
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <Button
              name="Sign Up"
              className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
            />
          </form>
          <div className="w-full flex items-center justify-center mt-5 space-x-2">
            <span className="bg-secondary h-[1px] w-full"></span>
            <span className="text-nowrap text-sm text-secondary">
              Or Sign Up with
            </span>
            <span className="bg-secondary h-[1px] w-full"></span>
          </div>
          <div className="flex items-center justify-center mt-5 space-x-3">
            <img
              src={googleIcon}
              alt="google"
              className="size-10 p-2 rounded-md border border-secondary"
            />
            <img
              src={appleIcon}
              alt="apple"
              className="size-10 p-2 rounded-md border border-secondary"
            />
            <img
              src={facebookIcon}
              alt="facebook"
              className="size-10 p-2 rounded-md border border-secondary"
            />
          </div>
          <p className="mt-5">
            Already have an account?{" "}
            <Link to="/signin" className="font-bold text-[#6c5b50]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
