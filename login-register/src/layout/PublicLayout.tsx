import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full custom-container">
      <header className="flex items-center gap-4 py-4 ">
        <h3 className="font-semibold tracking-wide text-2xl text-blue-500">
          Admin
        </h3>
        <nav className="flex items-center ml-24 gap-8">
          <NavLink
            to={"/register"}
            className={"text-white font-semibold tracking-wide text-xl "}
          >
            Register
          </NavLink>
        </nav>
      </header>

      {children}
    </section>
  );
};

export default PublicLayout;
