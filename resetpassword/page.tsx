"use client"

import React, { useState, ChangeEvent } from 'react';
import { Spotlight } from '../login/ui/Spotlight';
import MagicButton from '../login/ui/MagicButton';
import { FaLocationArrow, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebook, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface User {
  email: string;
  password: string;
}

const Hero: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });

  const onSignup = async () => {
    try {
      console.log('Signing up with:', user);
      // Your signup logic here
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
          <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl  dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
            <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
            <div className="flex justify-center items-center">
              <a href="forgototp">
                <MagicButton title="ForgotOTP" icon={<FaLocationArrow />} position="left" />
              </a>
            </div>
          </div>

          <div className="w-3/5 p-5 ">
            <div className="text-left font-bold">
              <span className="text-blue-950">WeFoxShield</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-950 mb-2">Set New Password</h2>
              <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
              <h4 className="text-sm font-bold text-blue-950 mb-5">Must be at least 8 characters</h4>
              <div className="relative rounded-lg max-w-lg m-auto">
                
                <div className="bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>
                <div className="bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    value={user.password}
                    onChange={handleChange}
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Link href="/login">
                  <button
                    onClick={onSignup}
                    className="bg-orange-500 text-white font-semibold text-base py-2 px-11 rounded-lg shadow-md mt-4"
                  >
                    Reset Password
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Hero;