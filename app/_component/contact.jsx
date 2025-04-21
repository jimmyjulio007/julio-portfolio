import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
  const t = useTranslations()
  return (
    <div id='contact' className='flex flex-col pt-10 gap-10 md:gap-20 justify-center px-4 lg:px-10 xl:px-40 pb-16 md:pb-36 items-start'>
      <div className='flex flex-col w-full border-b border-[#A8A8A8] pb-10 md:pb-20 relative'>
        <p className='text-2xl md:text-[72px] font-syne font-bold'>{t('contact-me')}</p>
        <Image src="/blur.svg" alt="blur" className="overflow-hidden animate-pulse absolute -top-36 -left-40" width={517} height={273}/>
        <span className='font-rubik text-sm md:text-[18px] text-[#A8A8A8] font-semibold'>{t('for-any-project-knock-me')}</span>
      </div>
      <div className='flex max-sm:flex-col gap-5 justify-between w-full'>
        <p className='text-2xl md:text-[64px] max-w-[200px] md:max-w-[450px] font-syne font-bold uppercase'>{t('get-in-touch-with-me')}</p>
        <div className='flex flex-col gap-10 md:w-2/6'>
          <form className='flex flex-col gap-6'>
            <div className="relative">
              <input id="email" name="email" type="text" className="peer font-rubik text-sm font-bold h-10 w-full border-b-2 border-[#949494] text-slate-300 placeholder-transparent focus:outline-none focus:border-orange-500" placeholder="john@doe.com" required />
              <label htmlFor="email" className=" absolute left-0 -top-5 uppercase font-bold font-syne text-white text-[24px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm">{t('email-address')}</label>
            </div>
            <div className="relative">
              <input id="subject" name="subject" type="text" className="peer font-rubik text-sm h-10 w-full border-b-2 border-[#949494] text-slate-300 placeholder-transparent focus:outline-none focus:border-orange-500" placeholder="john@doe.com" required />
              <label htmlFor="subject" className="absolute left-0 -top-5 uppercase font-bold font-syne text-white text-[24px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm">{t('subject')}</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" type="text" className="peer font-rubik text-sm overflow-hidden h-20 w-full border-b-2 border-[#949494] text-slate-300 placeholder-transparent focus:outline-none focus:border-orange-500" placeholder="john@doe.com" required />
              <label htmlFor="message" className="absolute left-0 -top-5 uppercase font-bold font-syne text-white text-[24px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm">Message</label>
            </div>
            <button id='send' type='submit' className='btn-send flex-initial w-fit'>{t('send')} <Mail /></button>
          </form>
        </div>
      </div>
      <Image loading='lazy' src={'/macbook.png'} className='flex-1 md:pt-10 w-full object-cover rounded-[30px]' width={1148} height={636} alt='laptop' />
    </div>
  )
}
