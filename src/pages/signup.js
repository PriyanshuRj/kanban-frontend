import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import validateSignup from "../validation/signup";
export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [otpState, setOTPState] = useState("email");
  let navigate = useNavigate();

  const signup = async () => {
    try {
      // setLoading(true);
      const emailOTPState = otpState === "email" ? true : false;
      const res = await validateSignup(email,  password, fullName, mobileno,  !emailOTPState, emailOTPState);
      if(res) navigate('/otp', {state : {email:email}})

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
              <div className="hidden lg:flex flex-col justify-between bg-[#00b4d8] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-8 h-8 bg-black rounded-full"></span>
                  <Link to="/" className="text-xl font-medium">
                    Kanban
                  </Link>
                </div>
                <div className="space-y-5">
                  <h1 className="font-extrabold lg:text-3xl xl:text-5xl xl:leading-snug">
                    Enter your account and discover new experiences
                  </h1>
                  <p className="text-lg">Already have a account ?</p>
                  <Link
                    to="/login"
                    className="flex-none inline-block px-4 py-3 font-medium text-white bg-black border-2 border-black rounded-lg"
                  >
                    Login to existing account
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
                      Create a new Account
                    </h2>
                    <p className="text-md md:text-xl">
                      Sign up to a workplace where you can organize your daily tasks to bigger task
                    </p>
                  </div>
                  <div className="flex flex-col max-w-md space-y-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      value={mobileno}
                      onChange={(e) => setMobileNo(e.target.value)}
                      className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                    />
                    <input
                      type="password"
                      placeholder="********"
                      value={password}
                      className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-start mb-6 justify-between">
                      <div className="flex items-center mb-4">
                        <input onChange={(e) => {
                          setOTPState(e.target.value)
                        }
                        } id="default-radio-1" type="radio" checked={otpState === 'email'} value="email" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send OTP on Email</label>
                      </div>
                      <div className="flex items-center">
                        <input id="default-radio-2" onChange={(e) => {
                          setOTPState(e.target.value)
                        }
                        } type="radio" value="mobile" checked={otpState === 'mobile'} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send OTP on Mobile</label>
                      </div>
                    </div>
                    <button
                      onClick={() => signup()}
                      className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3"
                    >
                      Sign up
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