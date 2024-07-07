'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border=[#7042f88b] opacity-[0.9]'
          >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='Welcome-text text-[13px]'> Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto'
        >
          <span>
            Making web a better place, 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> one commit </span>
            at a time.
          </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-2-[600px]'
        >
          Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Adwait</span>, 
          a dedicated full-stack developer with a passion for creating seamless web experiences. 
          I specialize in Next.js, React, and Node.js, and I am always eager to learn and take on new challenges in the world of web development.
        </motion.p>
        <motion.a
        href="https://drive.google.com/drive/folders/1cIt2N9FYDrjQUUFDNqV_FFM7J9NDYtYs?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center'
      >
        <Image
          src= '/mainIconsdark.svg'
          alt= 'work Icons'
          height= {650}
          width= {650}
        /> 
      </motion.div>
    </motion.div>
  )
}

export default HeroContent