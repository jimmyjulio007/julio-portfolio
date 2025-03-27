import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Project() {
  return (
    <div id='projects' className='flex flex-col justify-center items-center gap-9'>
        <p className='font-syne text-[64px] font-bold relative '>
            My Projects Highlight
            <Image src="/blur.svg" alt="blur" className="overflow-hidden absolute animate-pulse -top-16 right-0" width={340} height={180}/>
        </p>
        <button id='project' type='button' className='btn-project'>Explore More <MoveRight /></button>
    </div>
  )
}
