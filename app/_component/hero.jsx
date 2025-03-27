"use client";

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

import React, { Suspense } from 'react'
import { MoveRight } from 'lucide-react';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import dynamic from 'next/dynamic';

const AuroraBackground = dynamic(() => import('@/components/ui/aurora-background'))

export default function Hero() {

    const words = "Dynamic Web Solutions for Your ";
    const flip = [
        "Vision", "Brand", "Startup", "Success", "Growth",
        "Innovation", "Ideas", "Business", "Projects", "Future",
        "Goals", "Strategy", "Audience", "Users", "Dreams",
        "Creativity", "Ambition", "Journey", "Mission", "Impact"
      ];

  return (
    <AuroraBackground className={"flex-1 flex-col justify-center max-md:px-2 items-center w-full relative"} showRadialGradient={true}>
      <p className='text-transparent bg-gradient-to-r from-[#f12711] to-[#f5af19] bg-clip-text z-10 max-md:max-w-2xl font-light md:font-medium text-[16px] md:text-[19px] text-center mb-10 font-rubik text-md'>Next.js: Web Development Mastery</p>
        <div className='max-md:max-w-5xl max-w-[1000px] max-sm:text-wrap block max-lg:flex-col items-center'>
          <Suspense fallback={<div>Loading...</div>}>
          <TextGenerateEffect className={"whitespace-break-spaces font-syne"} words={words} />
          </Suspense>
        </div> 
        <Suspense fallback={<div>Loading...</div>}>
        <ContainerTextFlip className={'inline-block max-sm:mt-4'} words={flip} />
        </Suspense>
       <p className='z-10 text-transparent bg-gradient-to-l from-[#e7eaf3] to-[#D7DDE8] bg-clip-text max-w-[950px] break-words max-md:max-w-2xl font-light md:font-medium text-2xl text-center mt-10 md:mt-16 font-rubik text-md'>
        From idea to deployment — I build high-performance websites and web apps tailored to your goals,
        using the latest JavaScript technologies.</p>
        <button id='project' type='button' className="btn-hero mt-16">
          <span className="text-neutral-300">Explore works</span>
          <MoveRight className="text-[#F4F7FA]" />
        </button>
    </AuroraBackground>
  )
}
