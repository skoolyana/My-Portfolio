import React from 'react';

import {motion} from "framer-motion"


function BackGroundCircles() {
  return (
    <motion.div initial={{
      opacity:0
    }} 

    animate = {{
       
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"]    
    }}

    transition={{
    
      duration: 2.5
      
    }}
    
    
    className='relative flex justify-center items-center'>

        <div className='absolute   border 
        border-[#333333] rounded-full   
        h-[75px] w-[75px] mt-52 animate-ping'></div>
        <div className='rounded-full border 
        border-[#333333]       
        h-[200px] w-[200px] absolute mt-52'></div>
          <div className='absolute   border 
        border-[#333333]  rounded-full 
        h-[350px] w-[350px] mt-52 '></div>
     
        <div className='absolute   border 
        border-[#F7AB0A] opacity-20  rounded-full 
        h-[450px] w-[450px] mt-52 animate-pulse '></div>
     
     <div className='absolute   border 
        border-[#333333]  rounded-full 
        h-[550px] w-[550px] mt-52 '></div>
     
    </motion.div>
  )
}

export default BackGroundCircles