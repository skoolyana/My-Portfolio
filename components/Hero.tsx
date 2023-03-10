import Link from 'next/link';
import React from 'react';

import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackGroundCircles from './BackGroundCircles';

type Props = {};

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: ['Hi', 'The Name is Sunil.', 'Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore/>'],
        loop: true,
        delaySpeed: 2000
    })


    return (
        <div className='h-screen flex flex-col 
    items-center space-y-8 justify-center text-center overflow-hidden'>

            <BackGroundCircles></BackGroundCircles>
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXgSES7_zDfde6kWh7lwUs6HA4VuMbsyENQ&usqp=CAU'></img>

            <div className='z-20'>
                <h2 className='text-sm uppercase
            text-gray-500 pb-2 tracking-[15px]
            
            '> Full Stack Developer </h2>

                <h1 className='text-3xl lg:text-4xl font-semibold
                px-10
                '>

                    <span className='mr-3'>{text}</span>

                    <Cursor cursorColor='#F7AB0A'></Cursor>
                </h1>


                <div className='pt-5'>
                    <Link href="#about">
                    <button className='heroButton'>About</button>
                    
                    </Link>
                   
                    <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                    
                    </Link>

                    <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                    
                    </Link>

                    <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                    </Link>


                </div>

            </div>



        </div>
    )
}

export default Hero