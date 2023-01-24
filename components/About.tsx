import React from 'react'
import {motion} from "framer-motion"

type Props = {};

export default function About({}:Props) {
  return (
    <motion.div 
    initial={{
        x:-200,
        opacity:0,
    }}

    whileInView={{
        x:0,
        opacity:1

    }}
    viewport={{once:true}}


    transition={{

        duration:1.2,
    }}
     
    
    className='flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center'>
 
    <h3 className='absolute top-24 uppercase tracking-[20px] 
    text-gray-500 text-2xl'> About </h3>
 
    <motion.img  
    initial={{
        x:-200,
        opacity:0
    }}
    whileInView={{
        x:0, 
        opacity:1
    }}
    viewport={{
        once:true
    }}

    transition={{

        duration: 1.2
    }}
     
    alt=''  
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXgSES7_zDfde6kWh7lwUs6HA4VuMbsyENQ&usqp=CAU'
    
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
    object-cover md:rounded-lg md:w-64,h-95 xl:w-[500px],h-[600px]'
    >

    </motion.img>

    <div className='space-y-10 px-0 md:px-10 pt-10'>

    <h4 className='text-4xl font-semibold'> Here is a  <span className='underline decoration-[#F7AB0A]/50'>Little</span> Background</h4>

    <p className='text-base'>
        I am Sunil. I am a Full Stack Developer having 10 years 
        of experience. I have worked in Spring Boot as well. I have been working with 
        Iberia for last 6 years.

    </p>
    </div>

    </motion.div>
  )
}

