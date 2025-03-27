"use client";

import SelectUI from '@/components/select.ui'
import { Facebook, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Footer() {
  
  const [year, setYear] = useState('')

  useEffect (() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <div className='flex flex-col bg-[#131313] pt-16 gap-5 items-center px-4 md:px-40'>
      <div className='flex flex-col justify-center items-center gap-5 pb-10 md:pb-20 w-full'>
        <span className='text-sm md:text-[24px] text-orange-500 font-syne font-bold'>Get in Touch With Me</span>
        <span className='text-white md:underline-offset-4 font-syne font-bold underline text-2xl md:text-4xl text-wrap lg:text-[64px]'>jimmyjulio100@gmail.com</span>
      </div>
      <div className='flex w-full max-sm:flex-col justify-between max-md:px-4 px-[150px] items-center'>
        <Image loading='lazy' src="/logo.svg" alt="jimmy" width={125} height={125}/>
        <div className='flex gap-10'>
        <div className='flex flex-initial flex-col gap-2'>
            <p className='uppercase font-bold font-syne'>Social</p>
            <div className='flex gap-4'>
              <Link aria-label='linkedin' href={"https://www.linkedin.com/in/andriamandresy-mitondrasoa-jimmy-julio-890a19210"} >
              <Linkedin />
              </Link>
              <Link aria-label='facebook' href={"https://www.facebook.com/profile.php?id=100088728050911"} >
              <Facebook />
              </Link> 
              <Link aria-label='github' href={"https://github.com/julio09"} >
              <Github />
              </Link>
            </div>
        </div>
        <div className=' flex flex-initial flex-col gap-2'>
            <p className='uppercase font-bold font-syne'>language</p>
            <SelectUI />
        </div>
        </div>
        
      </div>
      <p className='w-full border-t border-[#949494] max-md:px-4 font-bold font-syne text-center pt-6 pb-10 px-[150px] items-center'>
      © {year}. Jimmy. All rights reserved. 
      </p>
    </div>
  )
}
