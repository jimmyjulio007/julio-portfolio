import TimelineUI from '@/components/timeline.ui'
import React from 'react'
import { training } from "@/constant/constant";
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations()

  const training = [
    {
      id: 1,
      date: "2018-2019",
      title: t('first-year-in-general-computer-science'),
      description:
        t('completed-the-first-year-in-general-computer-science-at-the-national-school-of-computer-science-of-fianaratsoa'),
    },
    {
      id: 2,
      date: "2019-2020",
      title: t('second-year-in-general-computer-science'),
      description:
        t('completed-the-second-year-in-general-computer-science-at-the-national-school-of-computer-science-of-fianaratsoa'),
    },
    {
      id: 3,
      date: "2020-2021",
      title: t('professional-bachelors-degree-in-general-computer-science'),
      description:
        t('obtained-a-professional-bachelors-degree-licence-pro-in-general-computer-science-of-fianaratsoa'),
    },
    {
      id: 4,
      date: "2021-2022",
      title: t('masters-degree-i-in-general-computer-science'),
      description:
        t('pursued-masters-degree-i-at-the-national-school-of-computer-science-of-fianaratsoa'),
    },
    {
      id: 5,
      date: "2022-2023",
      title: t('masters-degree-ii-in-general-computer-science'),
      description:
        t('completed-masters-degree-ii-in-general-computer-science-at-the-national-school-of-computer-science-of-fianaratsoa'),
    },
  ];

  
  return (
    <div className=' flex flex-col flex-wrap max-md:px-10 items-center gap-10 pb-20'>
      <div className='flex flex-col flex-wrap gap-5 items-center'>
      <h2 className='font-syne font-bold text-5xl'>{t('training-and-experience')}</h2>
      <p className='font-rubik font-semibold text-2xl text-[#A8A8A8]'>
      {t('discover-the-key-milestones-that-have-shaped-my-journey-and-fueled-my-passion-for-technology')} </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='flex flex-col gap-10 items-center'>
        <h5 className='font-syne font-black text-3xl'>{t('education')} </h5>
        <TimelineUI items={training} />
      </div>
      <div className='flex flex-col gap-10 items-center'>
        <h5 className='font-syne font-black text-3xl'>{t('experience')} </h5>
        <TimelineUI items={training} />
      </div>
      </div>
    </div>
  )
}
