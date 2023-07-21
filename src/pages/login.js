import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import validateLogin from "../validation/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const login = async () => {
    try {
      // setLoading(true);
      const res = await validateLogin(email,  password);
      if(res) navigate('/dashboard')
    } catch (e) {
      console.warn("error ", e);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <>
  
        <div className="bg-white">
          <div className="flex min-h-screen">
            <div className="flex flex-row w-full">
              <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-8 h-8 bg-black rounded-full"></span>
                  <Link href="/" className="text-xl font-medium">
                    Kanban
                  </Link>
                </div>
                <div className="space-y-5">
                  <h1 className="font-extrabold lg:text-3xl xl:text-5xl xl:leading-snug">
                    Enter your account and discover new experiences
                  </h1>
                  <p className="text-lg">You do not have an account?</p>
                  <Link
                    to="/signup"
                    className="flex-none inline-block px-4 py-3 font-medium text-white bg-black border-2 border-black rounded-lg"
                  >
                    Create account here
                  </Link>
                </div>
                <p className="font-medium">© 2023 Company</p>
              </div>

              <div className="relative flex flex-col items-center justify-center flex-1 px-4 sm:px-10">
                <div className="flex items-center justify-between w-full py-4 lg:hidden">
                  <div className="flex items-center justify-start space-x-3">
                    <span className="w-6 h-6 bg-black rounded-full"></span>
                    <Link to="/" className="text-lg font-medium">
                      Kanban
                    </Link>
                  </div>
                  <div className="flex flex-col items-end space-x-2 sm:items-center sm:flex-row">
                    <span>Not a member? </span>
                    <Link
                      to="/signup"
                      className="underline font-medium text-[#070eff]"
                    >
                      Sign up now
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
                  <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">
                      Sign in to account
                    </h2>
                    <p className="text-md md:text-xl">
                      Sign up or log in to place the order,no password require!
                    </p>
                  </div>
                  <div className="flex flex-col max-w-md space-y-5">
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                    />
                    <input
                      type="password"
                      placeholder="********"
                      value={password}
                      className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      onClick={() => login()}
                      className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}