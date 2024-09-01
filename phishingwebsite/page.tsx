
import Comparision from "@/src/app/phishingwebsite/Comparision";
import Clinet from "@/src/components/Clinet";
import Footer from "@/src/components/Footer"
import {PhishingFloatingNav} from "@/src/app/phishingwebsite/PhishingFloatingNav";
import {navItems} from "@/src/data/index";
import Experience from "@/src/components/Experience";
import HeroPhising from "./HeroPhishing";
export default function Home() {
    return (
     <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <HeroPhising/>
      <PhishingFloatingNav navItems = {navItems}/>
      <Clinet/>
      <Comparision/>
      <Experience/>
     <Footer/>
      </div>
     </main>
    );
  }
  