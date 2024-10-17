import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPssword from "./ForgotPassword";

const AuthIndex = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPssword />} />
      <Route path="*" element={<Navigate to={"./login"} />} />
    </Routes>
  );
};

export default AuthIndex;
