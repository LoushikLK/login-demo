import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

const useAppState = () => {
  const { user, setUser } = useContext(AppContext);

  return {
    user,
    setUser,
  };
};

export default useAppState;
