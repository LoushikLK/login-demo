import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Address, Email, EyeClose, EyeOpen, Globe, User } from "../assets";
import PublicLayout from "../layout/PublicLayout";
import { API_URL } from "../state/AppContextProvider";

const Register = () => {
  const [password, showPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigation = useNavigate();

  const handleRegister = async () => {
    try {
      if (!email.trim() || !passwordInput.trim())
        throw new Error("Enter all the field");

      const response = await fetch(API_URL + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: passwordInput,
          country: country,
          username: name,
          address: address,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response?.status !== 200) throw new Error(data?.message);

      navigation("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <PublicLayout>
      <div className="w-full py-8 min-h-[90vh] flex items-start justify-center flex-col ">
        <div className="w-full flex flex-col gap-4">
          <h3 className="font-medium tracking-wide text-gray-500">
            WELCOME BACK
          </h3>
          <h3 className="font-bold tracking-wide text-5xl text-white">
            Create a new account
          </h3>
          <span className="flex items-center gap-2">
            <h3 className="font-medium tracking-wide text-gray-500">
              New to Panel?
            </h3>
            <Link to={"/"} className="text-blue-500 font-medium text-lg">
              Login
            </Link>
          </span>
        </div>
        <div className="grid grid-cols-2 max-w-3xl mt-8 gap-4 w-full ">
          <div className="col-span-2 w-full flex gap-4">
            <div className="w-full flex flex-col  gap-2  border rounded-xl bg-gray-50/10 p-4 border-gray-300/20 ">
              <small className="text-gray-300/50">Name</small>

              <div className="flex items-center w-full justify-between">
                <input
                  type="text"
                  className="bg-transparent border-none w-full focus-visible:border-transparent focus-visible:outline-none font-medium "
                  placeholder="Enter your name "
                  value={name}
                  onChange={(e) => setName(e?.target?.value)}
                />

                <span>
                  <User className="font-4xl" />
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col  gap-2  border rounded-xl bg-gray-50/10 p-4 border-gray-300/20 ">
              <small className="text-gray-300/50">Country</small>

              <div className="flex items-center w-full justify-between">
                <input
                  type="text"
                  className="bg-transparent border-none w-full focus-visible:border-transparent focus-visible:outline-none font-medium "
                  placeholder="Enter your country "
                  value={country}
                  onChange={(e) => setCountry(e?.target?.value)}
                />

                <span>
                  <Globe className="font-4xl" />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col  gap-2 col-span-2 border rounded-xl bg-gray-50/10 p-4 border-gray-300/20 ">
            <small className="text-gray-300/50">Email</small>

            <div className="flex items-center w-full justify-between">
              <input
                type="email"
                className="bg-transparent border-none w-full focus-visible:border-transparent focus-visible:outline-none font-medium "
                placeholder="Enter your email "
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
              />

              <span>
                <Email className="font-4xl" />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col  gap-2 col-span-2 border rounded-xl bg-gray-50/10 p-4 border-gray-300/20 ">
            <small className="text-gray-300/50">Password</small>

            <div className="flex items-center w-full justify-between">
              <input
                type={password ? "text" : "password"}
                className="bg-transparent border-none w-full focus-visible:border-transparent focus-visible:outline-none font-medium "
                placeholder="Enter your password "
                value={passwordInput}
                onChange={(e) => setPasswordInput(e?.target?.value)}
              />

              <span onClick={() => showPassword(!password)}>
                {!password ? (
                  <EyeClose className="font-4xl" />
                ) : (
                  <EyeOpen className="font-4xl" />
                )}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col  gap-2 col-span-2 border rounded-xl bg-gray-50/10 p-4 border-gray-300/20 ">
            <small className="text-gray-300/50">Address</small>

            <div className="flex items-center w-full justify-between">
              <textarea
                cols={20}
                className="bg-transparent border-none w-full focus-visible:border-transparent focus-visible:outline-none font-medium "
                placeholder="Enter your address "
                value={address}
                onChange={(e) => setAddress(e?.target?.value)}
              ></textarea>

              <span>
                <Address className="font-4xl" />
              </span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center col-span-2   ">
            <button
              className="font-medium tracking-wide text-xl p-4 rounded-xl min-w-[12rem] bg-blue-500"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Register;
