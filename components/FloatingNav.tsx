
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { signOut, useSession } from "next-auth/react";
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import Image from "next/image";
// import Hero from "@/src/components/Hero";
// import Grid from "@/src/components/Grid";
// import RecentProjects from "@/src/components/RecentProjects";
// import { navItems } from "@/src/data";
// import Client from "@/src/components/Clinet";
// import Experience from "@/src/components/Experience";
// import Approach from "@/src/components/Approach";
// import Footer from "@/src/components/Footer";
// // import DataHero from "@/components/DataInspection/DataHero";
// // import Casestudy from "@/components/DataInspection/Casestudy";
// import { cn } from "@/src/utils/cn";
// import { Button } from "@/src/components/ui/MovingBorder";


// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       let direction = current - scrollYProgress.getPrevious()!;
//       if (scrollYProgress.get() < 0.05) {
//         setVisible(true);
//       } else {
//         setVisible(direction < 0);
//       }
//     }
//   });
  
//   const pathname = usePathname();
//   const { data: session }: any = useSession();

//   // Don't show the navbar on the login or register pages
//   if (
//     pathname === "/login" ||
//     pathname === "/register" ||
//     pathname === "/forgotpassword" ||
//     pathname === "/loginotp" ||
//     pathname === "/forgototp" ||
//     pathname === "/resetpassword"
//   ) {
//     return null;
//   }

//   return (
//     <div>
//       <img
//         src={"/Webfoxshield.png"}
//         alt="Logo"
//         className="fixed top-0 left-3 h-40 z-[900]"
//       />
//       <AnimatePresence mode="wait">
//         <motion.div
//           initial={{ opacity: 1, y: -100 }}
//           animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
//           transition={{ duration: 0.2 }}
//           className={cn(
//             "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 border-white/[0.2] bg-black-100 text-2xl",
//             className
//           )}
//           style={{
//             backdropFilter: "blur(16px) saturate(180%)",
//             backgroundColor: "rgba(17, 25, 40, 0.75)",
//             borderRadius: "12px",
//             border: "2px solid rgba(255, 255, 255, 0.125)",
//           }}
//         >
//           {navItems.map((navItem, idx) => (
//             <Link
//               key={idx}
//               href={navItem.link}
//               className={cn(
//                 "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-2xl"
//               )}
//             >
//               <span className="block sm:hidden">{navItem.icon}</span>
//               <span className="text-lg !cursor-pointer">{navItem.name}</span>
//             </Link>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//       <div className="fixed top-10 right-10 flex space-x-4 z-[5000]">
//         <Link href="/login">
//           <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
//             Login
//           </Button>
//         </Link>
//         <Link href="/register">
//           <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
//             Register
//           </Button>
//         </Link>
//       </div>
//     </div>

// export default function Home() {
//     return (
//       <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        
//         <div className="max-w-7xl w-full">
//           <Hero />
//           <FloatingNav navItems={navItems} />
//           <Grid />
//           <RecentProjects />
//           <Client />
//           <Experience />
//           <Approach />
//           <Footer />
//           {/* <DataHero />
//           <Casestudy /> */}
//         </div>
//       </main>
//     );
//   };
//   );
// };


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { cn } from "@/src/utils/cn";
// import { Button } from "@/src/components/ui/MovingBorder";

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Hero from "@/src/components/Hero";
import Grid from "@/src/components/Grid";
import RecentProjects from "@/src/components/RecentProjects";
import { navItems } from "@/src/data";
import Client from "@/src/components/Clinet";
import Experience from "@/src/components/Experience";
import Approach from "@/src/components/Approach";
import Footer from "@/src/components/Footer";
// import DataHero from "@/components/DataInspection/DataHero";
// import Casestudy from "@/components/DataInspection/Casestudy";
import { cn } from "@/src/utils/cn";
import { Button } from "@/src/components/ui/MovingBorder";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });
  
  const pathname = usePathname();

  // Don't show the navbar on the login or register pages
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgotpassword" ||
    pathname === "/loginotp" ||
    pathname === "/forgototp" ||
    pathname === "/resetpassword" ||
    pathname === "/datainspection" ||
    pathname === "/phishingwebsite" ||
    pathname ===   "/dataleakage" ||
    pathname === "/malwareanalysis" 
  ) {
    return null;
  }

  return (
    <div>
      <img
        src={"/Webfoxshield.png"}
        alt="Logo"
        className="fixed top-0 left-3 h-40 z-[900]"
      />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 border-white/[0.2] bg-black-100 text-2xl",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "2px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-2xl"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-lg !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="fixed top-10 right-10 flex space-x-4 z-[5000]">
        <Link href="/login">
          <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        <Approach />
        <Footer />
        {/* <DataHero />
        <Casestudy /> */}
      </div>
    </main>
  );
}




//   const pathname = usePathname();
//   const { data: session }: any = useSession();

//   // Don't show the navbar on the login or register pages
//   if (
//     pathname === "/login" ||
//     pathname === "/register" ||
//     pathname === "/forgotpassword" ||
//     pathname === "/loginotp" ||
//     pathname === "/forgototp" ||
//     pathname === "/resetpassword"
//   ) {
//     return null;
//   }

  // return (
  //   <div className="fixed top-0 left-0 w-full z-50">
  //     <ul className="bg-black-100 flex justify-between p-4 items-center">
  //       <div>
  //         <Link href="/">
  //           <li className="cursor-pointer">Home</li>
  //         </Link>
  //       </div>
  //       <div className="flex gap-10">
  //         <Link href="/dashboard">
  //           <li className="cursor-pointer">Dashboard</li>
  //         </Link>
  //         {!session ? (
  //           <>
  //             <Link href="/login">
  //               <li className="cursor-pointer">Login</li>
  //             </Link>
  //             <Link href="/register">
  //               <li className="cursor-pointer">Register</li>
  //             </Link>
  //           </>
  //         ) : (
  //           <>
  //             <li>{session.user?.email}</li>
  //             <li>
  //               <button
  //                 onClick={() => {
  //                   signOut();
  //                 }}
  //                 className="p-2 px-5 bg-blue-800 rounded-full"
  //               >
  //                 Logout
  //               </button>
  //             </li>
  //           </>
  //         )}
  //       </div>
  //     </ul>
  //   </div>
  // );
// };