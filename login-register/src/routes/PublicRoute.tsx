import { Route, Routes } from "react-router-dom";
import { Login, Register } from "../pages";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoute;
