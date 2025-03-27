import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"


export default function Skill() {
  return (
    <div className='flex flex-col md:py-20 gap-8 py-10 justify-center items-center'>
        <p className='font-syne text-4xl font-bold relative'>
        My Tech Stack
        </p>
        <h4 className='font-rubik font-semibold text-center text-2xl text-[#A7A7A7]'>Technologies I’ve been working with recently</h4>
        <div className='grid md:grid-cols-2 gap-10 md:gap-12'>
            <div className='flex flex-col justify-start items-center gap-4'>
                <h2 className='font-syne font-bold text-2xl'>Front-End</h2>
                <motion.div 
                initial={{opacity:0,x:-200, scale:0.2}}
                whileInView={{opacity:1,x:0,scale:1}}
                transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                    type: 'tween'
                }}
                className='grid grid-cols-4 lg:grid-cols-5 flex-wrap items-center gap-3 md:gap-4'>
                    <Image src={'/icon/html.svg'} alt='HTML' width={75} height={45} />
                    <Image src={'/icon/css.svg'} alt='CSS' width={75} height={45} />
                    <Image src={'/icon/tailwind.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/bootstrap4.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/js.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/typescript.svg'} alt='TS' width={75} height={45} />
                    <Image src={'/icon/vitejs.svg'} alt='REACT' width={75} height={45} />
                    <Image src={'/icon/logos_react.svg'} alt='REACT' width={75} height={45} />
                    <Image src={'/icon/nextjs.svg'} alt='NEXT' width={75} height={45} />
                    <Image src={'/icon/shadcnui.svg'} alt='Shadcn ui' width={75} height={45} />
                    <Image src={'/icon/chakraui.svg'} alt='Chakra' width={75} height={45} />
                    <Image src={'/icon/hook from.svg'} alt='react hook form' width={75} height={45} />
                    <Image src={'/icon/redux.svg'} alt='redux' width={75} height={45} />
                    <Image src={'/icon/zustand.svg'} alt='zustand' width={75} height={45} />
                    <Image src={'/icon/reactquery.svg'} alt='react query' width={75} height={45} />
                    <Image src={'/icon/zod.svg'} alt='zod' width={75} height={45} />
                    <Image src={'/icon/resend.svg'} alt='resend' width={75} height={45} />
                </motion.div>
            </div>
            <div className='flex flex-col justify-start items-start gap-4'>
                <h2 className='font-syne font-bold text-2xl'>Back-End & Database</h2>
                <motion.div
                initial={{opacity:0,x:200, scale:0.2}}
                whileInView={{opacity:1,x:0,scale:1}}
                transition={{
                    duration: 1.2,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                    type: 'tween'
                }}
                 className='grid grid-cols-4 lg:grid-cols-5 flex-wrap items-center gap-3 md:gap-4'>
                    <Image src={'/icon/nodejs.svg'} alt='HTML' width={75} height={45} />
                    <Image src={'/icon/nestjs.svg'} alt='CSS' width={75} height={45} />
                    <Image src={'/icon/firebase.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/supabase.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/graphql.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/postgresql.svg'} alt='TS' width={75} height={45} />
                    <Image src={'/icon/mysql.svg'} alt='REACT' width={75} height={45} />
                    <Image src={'/icon/auth0.svg'} alt='NEXT' width={75} height={45} />
                    <Image src={'/icon/mongodb.svg'} alt='REACT' width={35} height={20} />
                </motion.div>
            </div>
            <div className='flex flex-col justify-start items-center gap-4'>
            <h2 className='font-syne font-bold text-2xl'>Tools</h2>
            <motion.div
            initial={{opacity:0,x:-200, scale:0.2}}
            whileInView={{opacity:1,x:0,scale:1}}
            transition={{
                duration: 1.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
                type: 'tween'
            }}
             className='grid grid-cols-4 lg:grid-cols-5 flex-wrap items-center gap-3 md:gap-4'>
                    <Image src={'/icon/vscode.svg'} alt='HTML' width={75} height={45} />
                    <Image src={'/icon/figma.svg'} alt='REACT' width={75} height={45} />
                    <Image src={'/icon/postman.svg'} alt='CSS' width={75} height={45} />
                    <Image src={'/icon/openai.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/git.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/github.svg'} alt='JS' width={75} height={50} />
                    <Image src={'/icon/bitbucket.svg'} alt='TS' width={75} height={45} />
            </motion.div>
            </div>
            <div className='flex flex-col justify-start items-center gap-4 md:gap-4'>
            <h2 className='font-syne font-bold text-2xl'>Test & Quality</h2>
            <motion.div
            initial={{opacity:0,x:200, scale:0.2}}
            whileInView={{opacity:1,x:0,scale:1}}
            transition={{
                duration: 1.9,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
                type: 'tween'
            }}
            className='flex flex-wrap items-center gap-3'>
                    <Image src={'/icon/jest.svg'} alt='HTML' width={75} height={45} />
                    <Image src={'/icon/prettier.svg'} alt='REACT' width={75} height={45} />
                    <Image src={'/icon/eslint.svg'} alt='CSS' width={75} height={45} />
            </motion.div>
            </div>
        </div>
    </div>
  )
}
