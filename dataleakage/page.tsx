import Image from "next/image";
import DataHero from "@/src/components/Hero"
import {DataFloatingNav}  from "@/src/app/datainspection/DataFloatingNav";
import { FaHome } from "react-icons/fa";
// import Grid from "../components/Grid";

import {navItems} from "@/src/app/datainspection/data/index";
import Client from "@/src/components/Clinet";
import Experience from "@/src/components/Experience";
import Approach from "@/src/components/Approach";
import Footer from "@/src/components/Footer";
// import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <DataHero />
        <DataFloatingNav navItems = {navItems}/>
        <Client/>
        {/* <RecentProjects/> */}
        <Experience/>
        <Approach/>
        <Footer/>
       
        
      </div>
    </main>
  );
}
