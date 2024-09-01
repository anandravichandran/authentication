import React from 'react'
import {Spotlight} from '../login/ui/Spotlight';
import MagicButton from "../login/ui/MagicButton";
import { FaLocationArrow, FaRegEnvelope,} from "react-icons/fa6";
import { Button } from "../login/ui/MovingBorder";
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
    <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
      <Spotlight className="top-20 left-full h-[70vh] w-[100vw]" fill="purple"/>
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
    </div>

    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       */}

{/* ----------------------------------- */}
{/* ---------------------- */}
<div>
            {/* Logo */}
            <img src="/Webfoxshield.png" alt="Logo" className="fixed top-0 left-3 h-40 z-[900]" />

            {/* Register Button */}
            <div className="fixed top-10 right-10 flex space-x-4 z-[5000]">
              <Link href="/login">
                <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
                  Signin
                </Button>
              </Link>
            </div>
          </div>
{/* ================= */}
<div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl sm:ml-6 md:ml-6 lg:ml-10">
          {/* Sign Section */}
          <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-950">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">Forgot Password</h2>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2">
          </div>
          {/* Social Login  */}
          <div className="flex justify-center my-2">
          
          {/* LinkdeIn */}
         
          {/* google */}
        
          </div>
          {/* text */}
        <p className="text-gray-950 text-xl text-center mb-5">Enter your Email get your OTP</p>
        <div className="relative rounded-lg max-w-lg m-auto">
           {/*  user input */}
          <div className="bg-black-100 w-100 p-2 flex items-center mb-3 rounded-lg">
  <FaRegEnvelope className="text-gray-100 mr-2" />
  <input
    type="email"
    name="email"
    placeholder="Enter Your Email"
    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
  />
</div>
          {/* ---------- */}

     {/* remember and Forgot PAssword */}

      {/* signin  button */}
       
       {/* Sign-in Button */}

       <div className="flex justify-center items-center">
      <Link href="forgototp">
      <button className="bg-orange-500 text-white font-semibold text-xl py-2 px-11 rounded-lg shadow-md mt-4 ">
                  Get OTP
                </button>
      </Link>
       
                
       </div>
       
         

        </div>
          </div>
          </div>

          {/* ================================= */}
          {/* SignUp Section */}
          <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white   rounded-tr-2xl  rounded-br-2xl py-36 px-12">
          <h1 className="text-center text-3xl font-bold mb-2"> Hello, Friend!</h1>
          <div className="border-2 w-10 border-pink-900 inline-block mb-2">
          </div>
          <p className="mb-5 text-center">Fill up Personal information and start jounrney with us</p>
          {/* button */}
          <div className="flex justify-center items-center">
  <a href="login">
    <MagicButton
      title="Sign In"
      icon={<FaLocationArrow />}
      position="left"
    />
  </a>
</div>
          </div>
          </div>


    </div>

    <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]flex flex-col items-center justify-center'>
           
       
       
        </div>
        
         

     
    </div>

    </div>
  )
}

export default Hero