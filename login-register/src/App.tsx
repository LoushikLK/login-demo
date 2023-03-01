import "./App.css";
import "./index.css";
import useAppState from "./state/useAppState";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  const { user } = useAppState();

  return (
    <main className="w-full bg-gray-900 min-h-screen text-white ">
      {user?._id ? <PrivateRoute /> : <PublicRoute />}
    </main>
  );
}

export default App;
