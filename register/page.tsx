// // "use client";
// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { useSession } from "next-auth/react";
// // import { useRouter } from "next/navigation";
// // import { Spotlight } from "../login/ui/Spotlight";
// // import MagicButton from "../login/ui/MagicButton";
// // import { FaLocationArrow, FaRegEnvelope } from "react-icons/fa6";
// // import { FaFacebook, FaLinkedinIn, FaGoogle } from "react-icons/fa";
// // import { MdLockOutline } from "react-icons/md";
// // import { SignupFloatingNav } from "./ui/SignupFloatingNav";
// // import { Button } from "../login/ui/MovingBorder";



// // const Register = () => {
// //   const [error, setError] = useState("");
// //   const router = useRouter();
// //   const { data: session, status: sessionStatus } = useSession();

// //   useEffect(() => {
// //     if (sessionStatus === "authenticated") {
// //       router.replace("/dashboard");
// //     }
// //   }, [sessionStatus, router]);

// //   const isValidEmail = (email: string) => {
// //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// //     return emailRegex.test(email);
// //   };
// //   const handleSubmit = async (e: any) => {
// //     e.preventDefault();
// //     const email = e.target[0].value;
// //     const password = e.target[1].value;

// //     if (!isValidEmail(email)) {
// //       setError("Email is invalid");
// //       return;
// //     }

// //     if (!password || password.length < 8) {
// //       setError("Password is invalid");
// //       return;
// //     }

// //     try {
// //       const res = await fetch("/api/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           email,
// //           password,
// //         }),
// //       });
// //       if (res.status === 400) {
// //         setError("This email is already registered");
// //       }
// //       if (res.status === 200) {
// //         setError("");
// //         router.push("/login");
// //       }
// //     } catch (error) {
// //       setError("Error, try again");
// //       console.log(error);
// //     }
// //   };

// //   if (sessionStatus === "loading") {
// //     return <h1>Loading...</h1>;
// //   }

// //   return (
// //     sessionStatus !== "authenticated" && (
// //       <div className="pb-40 pt-40 w-screen h-screen">
// //       <div>
// //         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
// //         <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
// //         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
// //       </div>

// //       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
// //         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

// //         <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
// //           <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
// //             <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
// //             <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
// //             <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
// //             <div className="flex justify-center items-center">
// //               <a href="#">
// //                 <MagicButton title="Sign Up" icon={<FaLocationArrow />} position="left" />
// //               </a>
// //             </div>
// //           </div>

// //           <div className="w-3/5 p-5">
// //             <div className="text-left font-bold">
// //               <span className="text-3xl text-blue-950">WebFoxShield</span>
// //             </div>
// //             <div className="py-10">
// //               <h2 className="text-xl font-bold text-blue-950 mb-2">Signup to Account</h2>
// //               <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
// //               <div className="flex justify-center my-2">
// //                 <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
// //                   <FaFacebook className="text-2xl text-black-100" />
// //                 </a>
// //                 <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
// //                   <FaLinkedinIn className="text-2xl text-black-100" />
// //                 </a>
// //                 <a href="#" className="border-2 border-black-200 rounded-xl p-3 mx-1">
// //                   <FaGoogle className="text-2xl text-black-100" />
// //                 </a>
// //               </div>
// //               <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
// //               <div className="relative rounded-lg max-w-lg m-auto">
// //                 <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
// //                   <FaRegEnvelope className="text-gray-100 mr-2" />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     id="email"
// //                     value={user.email}
// //                     onChange={handleChange}
// //                     placeholder="Enter Your Email"
// //                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
// //                   />
// //                 </div>
// //                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

// //                 <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-3">
// //                   <MdLockOutline className="text-gray-100 mr-2" />
// //                   <input
// //                     type={showPassword ? 'text' : 'password'}
// //                     name="password"
// //                     id="password"
// //                     value={user.password}
// //                     onChange={handleChange}
// //                     placeholder="Enter Your Password"
// //                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={togglePasswordVisibility}
// //                     className="absolute right-2"
// //                   >
// //                     {showPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
// //                   </button>
// //                 </div>
// //                 {errors.password && <p className="text-red-500 text-base">{errors.password}</p>}
// //                 <p className={`text-base mb-3 ${getStrengthColor()}`}>Password Strength: {passwordStrength}</p>

// //                 <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
// //                   <MdLockOutline className="text-gray-100 mr-2" />
// //                   <input
// //                     type={showConfirmPassword ? 'text' : 'password'}
// //                     name="confirmPassword"
// //                     placeholder="Confirm Password"
// //                     value={user.confirmPassword}
// //                     onChange={handleChange}
// //                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={toggleConfirmPasswordVisibility}
// //                     className="absolute right-2"
// //                   >
// //                     {showConfirmPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
// //                   </button>
// //                 </div>
// //                 {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
// //                 <Link href="/LoginHero">
// //                   <button
// //                     onClick={onSignup}
// //                     className="border-2 justify-center border-gray-950 rounded-xl p-3 w-64 text-lg text-white bg-gray-900 mx-auto block hover:bg-orange-500 transition-all duration-300"
// //                   >
// //                     Sign Up
// //                   </button>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     )
// //   );
// // };

// // export default Register;

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { Spotlight } from "../login/ui/Spotlight";
// import MagicButton from "../login/ui/MagicButton";
// import { FaLocationArrow, FaRegEnvelope } from "react-icons/fa6";
// import { FaFacebook, FaLinkedinIn, FaGoogle } from "react-icons/fa";
// import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
// import { SignupFloatingNav } from "./ui/SignupFloatingNav";
// import { Button } from "../login/ui/MovingBorder";

// const Register = () => {
//   const [user, setUser] = useState({ email: "", password: "", confirmPassword: "" });
//   const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const { data: session, status: sessionStatus } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (sessionStatus === "authenticated") {
//       router.replace("/dashboard");
//     }
//   }, [sessionStatus, router]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   };

//   const onSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!isValidEmail(user.email)) {
//       setErrors((prev) => ({ ...prev, email: "Email is invalid" }));
//       return;
//     }

//     if (!user.password || user.password.length < 8) {
//       setErrors((prev) => ({ ...prev, password: "Password is invalid" }));
//       return;
//     }

//     if (user.password !== user.confirmPassword) {
//       setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
//       return;
//     }

//     try {
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: user.email, password: user.password }),
//       });

//       if (res.status === 400) {
//         setErrors((prev) => ({ ...prev, email: "This email is already registered" }));
//       } else if (res.status === 200) {
//         setErrors({ email: "", password: "", confirmPassword: "" });
//         router.push("/login");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//       setErrors((prev) => ({ ...prev, email: "Error, try again" }));
//     }
//   };

//   const getStrengthColor = () => {
//     // Logic to determine password strength and return appropriate color class
//     return "text-green-500";  // Example return value
//   };

//   if (sessionStatus === "loading") {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     sessionStatus !== "authenticated" && (
//       <div className="pb-40 pt-40 w-screen h-screen">
//         <div>
//           <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//           <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
//           <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//         </div>

//         <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

//           <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
//             <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
//               <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
//               <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
//               <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
//               <div className="flex justify-center items-center">
//                 <MagicButton title="Sign Up" icon={<FaLocationArrow />} position="left" />
//               </div>
//             </div>

//             <div className="w-3/5 p-5">
//               <div className="text-left font-bold">
//                 <span className="text-3xl text-blue-950">WebFoxShield</span>
//               </div>
//               <div className="py-10">
//                 <h2 className="text-xl font-bold text-blue-950 mb-2">Signup to Account</h2>
//                 <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
//                 <div className="flex justify-center my-2">
//                   <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
//                     <FaFacebook className="text-2xl text-black-100" />
//                   </a>
//                   <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
//                     <FaLinkedinIn className="text-2xl text-black-100" />
//                   </a>
//                   <a href="#" className="border-2 border-black-200 rounded-xl p-3 mx-1">
//                     <FaGoogle className="text-2xl text-black-100" />
//                   </a>
//                 </div>
//                 <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
//                 <form onSubmit={onSignup} className="relative rounded-lg max-w-lg m-auto">
//                   <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
//                     <FaRegEnvelope className="text-gray-100 mr-2" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={user.email}
//                       onChange={handleChange}
//                       placeholder="Enter Your Email"
//                       className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                     />
//                   </div>
//                   {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                   <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-3">
//                     <MdLockOutline className="text-gray-100 mr-2" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       value={user.password}
//                       onChange={handleChange}
//                       placeholder="Enter Your Password"
//                       className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                     />
//                     <button
//                       type="button"
//                       onClick={togglePasswordVisibility}
//                       className="absolute right-2"
//                     >
//                       {showPassword ? (
//                         <MdVisibilityOff className="text-gray-100" />
//                       ) : (
//                         <MdVisibility className="text-gray-100" />
//                       )}
//                     </button>
//                   </div>
//                   {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                   <p className={`text-base mb-3 ${getStrengthColor()}`}>Password Strength: {passwordStrength}</p>
    
//                   <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
//                     <MdLockOutline className="text-gray-100 mr-2" />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       name="confirmPassword"
//                       value={user.confirmPassword}
//                       onChange={handleChange}
//                       placeholder="Confirm Password"
//                       className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                     />
//                     <button
//                       type="button"
//                       onClick={toggleConfirmPasswordVisibility}
//                       className="absolute right-2"
//                     >
//                       {showConfirmPassword ? (
//                         <MdVisibilityOff className="text-gray-100" />
//                       ) : (
//                         <MdVisibility className="text-gray-100" />
//                       )}
//                     </button>
//                   </div>
//                   {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                  
//                   <button
//                     type="submit"
//                     className="border-2 justify-center border-gray-950 rounded-xl p-3 w-64 text-lg text-white bg-gray-900 mx-auto block hover:bg-orange-500 transition-all duration-300"
//                   >
//                     Sign Up
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

"use client";

import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter
import { Spotlight } from '../login/ui/Spotlight';
import MagicButton from '../login/ui/MagicButton';
import { FaLocationArrow, FaRegEnvelope,FaUser } from 'react-icons/fa6';
import { FaFacebook, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Link from "next/link";
import { Button } from "../login/ui/MovingBorder";

interface User {
  name:string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Hero: React.FC = () => {
  const router = useRouter();  // Initialize useRouter
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ name:string; email: string; password: string; confirmPassword: string }>({
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSignup = async () => {
    // Clear errors
    setErrors({ name:'',email: '', password: '', confirmPassword: '' });

    // Basic validation
    if (!user.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Please enter your name.' }));
      return;
    }
    
    if (!user.email.includes('@')) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      return;
    }

    if (user.password.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters long.' }));
      return;
    }

    if (user.password !== user.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
      return;
    }

    try {
      console.log('Signing up with:', user);
      // Your signup logic here

      // If signup is successful, navigate to the sign-in page
    
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Check password strength
    if (name === 'password') {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  const getPasswordStrength = (password: string): string => {
    let strength = '';
    if (password.length >= 8) {
      if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = 'Strong';
      } else if (/[A-Z]/.test(password) || /[0-9]/.test(password)) {
        strength = 'Medium';
      } else {
        strength = 'Weak';
      }
    } else {
      strength = 'Too Short';
    }
    return strength;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log('Password visibility toggled:', showPassword);  // Debugging
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    console.log('Confirm password visibility toggled:', showConfirmPassword);  // Debugging
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'Strong': return 'text-green-900';
      case 'Medium': return 'text-blue-800';
      case 'Weak': return 'text-red-800';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className=" w-screen h-screen overflow-hidden relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* -----------------logo */}
        <div>
            {/* Logo */}
            <img src="/Webfoxshield.png" alt="Logo" className="fixed top-0 left-3 h-40 z-[900]" />

            {/* Register Button */}
            {/* <div className="fixed top-10 right-10 flex space-x-4 z-[5000]">
              <Link href="/login">
                <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
                  Signin
                </Button>
              </Link>
            </div> */}
          </div>

        {/* --------- */}
        <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
          <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
            <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
            <div className="flex justify-center items-center">
              <a href="/login">
                <MagicButton title="Sign In" icon={<FaLocationArrow />} position="left" />
              </a>
            </div>
          </div>

          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-3xl text-blue-950">WebFoxShield</span>
            </div>
            <div className="py-10">
              <h2 className="text-xl font-bold text-blue-950 mb-2">Signup to Account</h2>
              <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
                  <FaFacebook className="text-2xl text-black-100" />
                </a>
                <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
                  <FaLinkedinIn className="text-2xl text-black-100" />
                </a>
                <a href="#" className="border-2 border-black-200 rounded-xl p-3 mx-1">
                  <FaGoogle className="text-2xl text-black-100" />
                </a>
              </div>
              <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
              <div className="relative rounded-lg max-w-lg m-auto">
                
              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
                  <FaUser className="text-gray-100 mr-2" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>

                <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
                  <FaRegEnvelope className="text-gray-100 mr-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-3">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2"
                  >
                    {showPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-base">{errors.password}</p>}
                <p className={`text-base mb-3 ${getStrengthColor()}`}>Password Strength: {passwordStrength}</p>

                <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-2"
                  >
                    {showConfirmPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                <Link href="/login">
                  <button
                    onClick={onSignup}
                    className="border-2 justify-center border-gray-950 rounded-xl p-3 w-64 text-lg text-white bg-gray-900 mx-auto block hover:bg-orange-500 transition-all duration-300"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

