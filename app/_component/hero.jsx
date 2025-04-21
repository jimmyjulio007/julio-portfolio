"use client";

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

import React, { Suspense } from 'react'
import { MoveRight } from 'lucide-react';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const AuroraBackground = dynamic(() => import('@/components/ui/aurora-background'))

export default function Hero() {

    const t = useTranslations()

    const words = t('dynamic-web-solutions-for-your');
    const flip = [
        t('vision'), t('brand'), t('startup'), t('success'), t('growth'),
        t('innovation'), t('ideas'), t('business'), t('projects'), t('future'),
        t('goals'), t('strategy'), t('audience'), t('users'), t('dreams'),
        t('creativity'), t('ambition'), t('journey'), t('mission'), t('impact')
      ];

  return (
    <AuroraBackground className={"flex-1 flex-col justify-center max-md:px-2 items-center w-full relative"} showRadialGradient={true}>
      <p className='text-transparent bg-gradient-to-r from-[#f12711] to-[#f5af19] bg-clip-text z-10 max-md:max-w-2xl font-light md:font-medium text-[16px] md:text-[19px] text-center mb-10 font-rubik text-md'>{t('next-js-web-development-mastery')}</p>
        <div className='max-md:max-w-5xl max-w-[1000px] max-sm:text-wrap block max-lg:flex-col items-center'>
          <Suspense fallback={<div>Loading...</div>}>
          <TextGenerateEffect className={"whitespace-break-spaces font-syne"} words={words} />
          </Suspense>
        </div> 
        <Suspense fallback={<div>Loading...</div>}>
        <ContainerTextFlip className={'inline-block max-sm:mt-4'} words={flip} />
        </Suspense>
       <p className='z-10 text-transparent bg-gradient-to-l from-[#e7eaf3] to-[#D7DDE8] bg-clip-text max-w-[950px] break-words max-md:max-w-2xl font-light md:font-medium text-2xl text-center mt-10 md:mt-16 font-rubik text-md'>
        {t('from-idea')}</p>
        <button id='project' type='button' className="btn-hero mt-16">
          <span className="text-neutral-300">{t('explore-works')}</span>
          <MoveRight className="text-[#F4F7FA]" />
        </button>
    </AuroraBackground>
  )
}
