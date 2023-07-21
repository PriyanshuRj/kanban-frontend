import React, { useState } from "react";
import { Link } from "react-router-dom";
import validateOTP from "../validation/OTP";
import {  useLocation } from "react-router-dom";

export default function VerifyOTP() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state ? location.state.emai : '');
  // const email = location.state.email;
  const [otp, setOTP] = useState("");


  const submitOTP = async () => {
    try {
      validateOTP(email, otp);


    } catch (e) {
      console.warn("error ", e);
    } finally {
    }
  };
  return (
    <>

      <div className="bg-white">
        <div className="flex min-h-screen">
          <div className="flex flex-row w-full">


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
                    to="/register"
                    className="underline font-medium text-[#070eff]"
                  >
                    Sign up now
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl font-bold md:text-4xl">
                    Verify Your OTP
                  </h2>
                  <p className="text-md md:text-xl">
                    Sign up to a workplace where you can organize your daily tasks to bigger task
                  </p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    disabled={location.state}
                    onChange={(e) => setEmail(e.target.value)}

                    className="flex px-3 py-2 text-gray-500 font-medium border-2 border-gray-500 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                  />
                  <input
                    type="number"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                  />

                  <button
                    onClick={() => submitOTP()}
                    className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-between items-end bg-[#00b4d8] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
              <div className="flex items-center justify-start space-x-3">
                <span className="w-8 h-8 bg-black rounded-full"></span>
                <Link to="/" className="text-xl font-medium">
                  Kanban
                </Link>
              </div>
              <div className="space-y-5">
                <h1 className="font-extrabold lg:text-3xl xl:text-5xl xl:leading-snug text-right">
                  Enter your account and discover new experiences
                </h1>

              </div>
              <p className="font-medium">© 2023 Company</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}