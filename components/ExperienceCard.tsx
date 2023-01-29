
import React from 'react'
import { motion } from "framer-motion";

function ExperienceCard() {
    return (
        <article className='flex flex-col rounded-lg
        
        items-center
        space-y-7
        flex-shrink-0
        w-[400px]
        md:w-[500px]
        xl:w-[700px]

        h-[400px]
        snap-center
        bg-[#292929]
        
        opacity-40
        cursor-pointer
        translate-opacity
        duration-200
        overflow-hidden
        hover:opacity-100
        
        '>

            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                whileInView={{
                    y: 10,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}

                transition={{

                    duration: 1.2
                }}


                className="
                w-10 
                h-10 
                rounded-full  
                xl:w-16 
                xl:h-16 
                object-cover 
                object-center
                
                "

                src='data:image/png;base64,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'>

            </motion.img>

            <div className='px-0 md:px-10'>

            <h4 className='text-xl font-light'> Technical Lead</h4>
            <p className='font-bold  mt-1'>IBM</p>
            <div className='flex space-x-2 my-2'>

           <img className='h-10 w-10 rounded-full' src='data:image/png;base64,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'></img>    
           <img className='h-10 w-10 rounded-full' src='data:image/png;base64,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'></img>    
           <img className='h-10 w-10 rounded-full' src='data:image/png;base64,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'></img>    


            </div>

            <p className='uppercase py-3 text-sm 
            text-gray-300'>Started 2009 - till Date</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>SummarySummarySummarySummarySummarySummarySummarySummary</li>
                <li>SummarySummarySummarySummarySummarySummarySummarySummary</li>
                <li>SummarySummarySummarySummarySummarySummarySummarySummary</li>
                <li>SummarySummarySummarySummarySummarySummarySummarySummary</li>
                <li>SummarySummarySummarySummarySummarySummarySummarySummary</li>
   
            </ul>

            </div>

        </article>
    )
}

export default ExperienceCard