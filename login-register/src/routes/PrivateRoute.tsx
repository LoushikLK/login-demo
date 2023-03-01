import { Route, Routes } from "react-router-dom";
import Panel from "../pages/Panel";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
    </Routes>
  );
};

export default PrivateRoute;
