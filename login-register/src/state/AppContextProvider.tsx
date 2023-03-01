import { Dispatch, ReactNode, createContext, useEffect, useState } from "react";

type APP_CONTEXT = {
  user: any;
  setUser: Dispatch<React.SetStateAction<any>>;
};

export const AppContext = createContext<APP_CONTEXT | any>({});

export const API_URL = "http://localhost:8000/api";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("ACCESS_TOKEN");

        const response = await fetch(API_URL + "/account", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (response?.status !== 200) {
          throw new Error("Getting data failed");
        }

        const data = await response.json();

        setUser(data?.data?.data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    })();
  }, []);

  console.log(user);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
