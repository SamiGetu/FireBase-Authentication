import { Routes, Route } from "react-router";
import Login from "../components/Login";
import Signup from "./../components/Signup";
import { AnimatePresence } from "framer-motion";
import { Api } from "../components/Api";

const Router = () => {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Api />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
