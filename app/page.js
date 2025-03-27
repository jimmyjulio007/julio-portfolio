"use client"

import Header from "./_component/header";
import Hero from "./_component/hero";
import About from "./_component/about";
import Project from "./_component/project";
import Experience from "./_component/experience";
import Skill from "./_component/skill";
import Contact from "./_component/contact";
import Footer from "./_component/footer";
import { Suspense, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { use } from "react";
import WorldMapFree from "@/app/_component/freelance";
import Testimonial from "./_component/testimonial";


// const WorldMapFree = dynamic(() => import("@/app/_component/freelance"))



export default function Home() {
  const [show, setShow] =useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 4500); // adjust the interval as needed

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
   <div className=" max-xl:w-full flex flex-col justify-center">
      <main className="h-screen">
        <Header />
        <Hero />
      </main>
      <About /> 
      <Experience />
      {show && <WorldMapFree />}
    <Skill />
    {/* <Project /> */}
    <Contact />
    {/* <Testimonial /> */}
    <Footer />
    </div> 
  );
}
