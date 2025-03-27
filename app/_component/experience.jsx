import TimelineUI from '@/components/timeline.ui'
import React from 'react'
import { training } from "@/constant/constant";

export default function Experience() {
  return (
    <div className=' flex flex-col flex-wrap max-md:px-10 items-center gap-10 pb-20'>
      <div className='flex flex-col flex-wrap gap-5 items-center'>
      <h2 className='font-syne font-bold text-5xl'>Training & Experience</h2>
      <p className='font-rubik font-semibold text-2xl text-[#A8A8A8]'>
      Discover the key milestones that have shaped my journey and fueled my passion for technology.
      </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='flex flex-col gap-10 items-center'>
        <h5 className='font-syne font-black text-3xl'>Education </h5>
        <TimelineUI items={training} />
      </div>
      <div className='flex flex-col gap-10 items-center'>
        <h5 className='font-syne font-black text-3xl'>Experience </h5>
        <TimelineUI items={training} />
      </div>
      </div>
    </div>
  )
}
