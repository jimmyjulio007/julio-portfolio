import { Download} from 'lucide-react'
import Image from 'next/image'
import React, { Suspense } from 'react'
import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl';


export default function About() {

  const t = useTranslations()


  return (
    <div id='about' className="py-20 flex max-md:flex-col px-10 justify-center items-center gap-10 md:gap-40">
        <div className="flex flex-initial flex-col max-lg:px-2 gap-4 items-start">
            <p className="font-syne font-black text-2xl md:text-4xl relative lg:text-[56px]">
            {t('lets-get-know')} <br />{t('about-me-closer')}
            <Image src="/blur.svg" alt="blur" className="overflow-hidden animate-pulse absolute -top-24 -left-36" width={517} height={273}/>
            </p>
            <p className="font-rubik font-normal whitespace-pre-line break-words max-w-4xl text-[#A8A8A8] text-lg text-wrap lg:text-[18px]">
            {t('information')} </p>
            <a aria-label='download cv' download={true} href={'/CV JIMMY.pdf'} className="btn-hero mt-10">{t('download-my-cv')} <Download /></a>
        </div>
        <div className="relative max-md:px-4 max-sm:pb-4">
          <Suspense fallback={<div>Loading...</div>}>
          <motion.div
          initial={{opacity:0, x: 200, scale:0.2}}
          whileInView={{opacity:1 ,x: 0,scale:1}}
          exit={{opacity: 0, scale:0.5}}
          transition={{
              duration: 0.6,
              delay: 0.4,
              ease: 'easeInOut',
          }}
          >
          <Image loading='lazy' src="/jimmy.jpg" alt="jimmy" width={454} className="max-md:w-full rounded-[30px] object-contain" height={500}/>
          </motion.div>
          </Suspense>
        <div className="absolute  -top-4 right-4 md:-top-3 md:-right-4 w-28 h-[34px] border-2 border-orange-500 opacity-50 rounded-[30px]"></div>
        <div className="absolute  bottom-16 left-0.5 md:-left-5 w-9 md:w-12 h-[178px] border-2 border-orange-500 opacity-50 rounded-[30px]"></div>
        </div>
    </div>
  )
}
