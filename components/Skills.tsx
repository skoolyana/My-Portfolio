import React from 'react'
import {motion} from "framer-motion"
import Skill from './Skill'


function Skills() {
  return (
    <motion.div
    
    initial={{
      
        opacity:0,
    }}

    whileInView={{
        opacity:1

    }}
    

    transition={{

        duration:1.5,
    }}
   
    
    className='h-screen flex relative text-center 
    flex-col md:text-left xl:flex-row max-w-[2500px] 
    xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>

    <h3 className='absolute top-12 uppercase tracking-[10px]  text-gray-500'>
        Skills
    </h3>    

    <h3 className='absolute top-16 capitalize text-sm pt-6 text-gray-500 tracking-[3px]'>Hover Over a Skill for Current Proficieny</h3>        

    <div className='grid grid-cols-4 gap-5 pt-40'>

    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>


    </div>


    </motion.div>



  )
}

export default Skills