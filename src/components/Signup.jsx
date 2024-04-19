import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { DropMenu } from "../Anim/Animation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    setIsloading(true);
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsloading(false);
      navigate("/login");
      // Additional steps like updating the user profile or redirecting can be performed here
    } catch (error) {
      setError("Email already Used");
      setIsloading(false);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError("Failed to sign in with Google.");
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
          <div className="p-8 bg-white shadow-2xl shadow-gray-500/70 rounded-lg lg:w-[30%]">
            <form onSubmit={handleSignUp} className="space-y-6">
              <h2 className="text-4xl text-green-800 font-bold text-center">
                Sign Up
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
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3  bg-gray-100 rounded-md shadow-sm focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3  bg-gray-100 rounded-md shadow-sm focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3  bg-gray-100 rounded-md shadow-sm focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full p-3  bg-gray-100 rounded-md shadow-sm focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-20 p-3 text-sm font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                {isloading ? "Signing..." : "Sign Up"}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex justify-between">
                <Link to="/login">
                  <button
                    type="button"
                    className="text-sm text-blue-500 hover:underline focus:outline-none"
                  >
                    Already have an account? Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Signup;
