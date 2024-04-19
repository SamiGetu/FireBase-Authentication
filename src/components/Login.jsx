import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { auth, googleProvider } from "../config/firebase";
import { DropMenu } from "../Anim/Animation";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Failed to log in. Check your credentials or sign up.");
    }
    setIsLoading(false);
    alert("LogIn successfull");
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError("Failed to sign in with Google.");
    }

    setIsLoading(false);
    alert("LogIn successfull");
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError("Please enter your email address to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError("Reset link sent! Check your email.");
    } catch (err) {
      setError(
        "Failed to send reset email. Please check your email address and try again."
      );
    }
  };

  return (
    <>
      <section>
        <motion.div
          className="flex items-center justify-center h-screen"
          variants={DropMenu}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* background */}

          <div className="custom-shape-divider-top-1713469900">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="p-8 bg-white shadow-2xl shadow-gray-500/70  rounded-lg lg:h-[70vh] h-full lg:w-[30%]">
            <form className="space-y-6" onSubmit={signIn}>
              <h2 className="text-4xl text-green-800 font-bold text-center pb-10">
                Login
              </h2>
              {/* icons */}
              <div className="flex justify-center items-center space-x-6">
                <span className="border-[1px] border-gray-400 rounded-full px-2 py-2 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaGoogle size={"1.5rem"} onClick={signInWithGoogle} />
                </span>
                <span className="border-[1px] border-gray-400 rounded-full px-2 py-2 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaFacebookF size={"1.5rem"} />
                </span>
                <span className="border-[1px] border-gray-400 rounded-full px-2 py-2 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaGithub size={"1.5rem"} />
                </span>
              </div>
              {/* inputs */}
              <div className="flex justify-center">
                <div className="flex flex-col items-start pt-10">
                  <div className="sm:max-w-full max-w-[18rem]">
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full  p-3 mb-10  rounded-md bg-gray-100 focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Email"
                      required
                    />

                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full  p-3 mb-3  rounded-md bg-gray-100 focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Password"
                      required
                    />
                    <div className="flex justify-between mb-2">
                      <Link to={"/signup"}>
                        <button
                          type="button"
                          className="lg:text-sm text-[11px] text-blue-500 hover:underline focus:outline-none"
                        >
                          Dont have an account? Create one
                        </button>
                      </Link>
                      <button
                        type="button"
                        onClick={handlePasswordReset}
                        className="lg:text-sm text-[11px] text-blue-500 hover:underline focus:outline-none"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    className="mt-10 px-10 p-3 text-sm font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
                  >
                    {isLoading ? "Loging...." : "Login"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Login;
