"use client";

import Header from "../_component/header";
import Hero from "../_component/hero";
import About from "../_component/about";
import Project from "../_component/project";
import Experience from "../_component/experience";
import Skill from "../_component/skill";
import Contact from "../_component/contact";
import Footer from "../_component/footer";
import { Suspense, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { use } from "react";
import Testimonial from "../_component/testimonial";
import { Maploading } from "../_component/maploading";


const WorldMapFree = dynamic(() => import("@/app/_component/freelance"), {ssr: false, loading: () => <Maploading/>});



export default function Home() {
  

  return (
   <div className=" max-xl:w-full flex flex-col justify-center">
      <main className="h-screen">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        </Suspense>
      </main>
      <About /> 
      <Experience />
      <WorldMapFree />
    <Skill />
    {/* <Project /> */}
    <Contact />
    {/* <Testimonial /> */}
    <Footer />
    </div> 
  );
}
