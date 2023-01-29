import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative 
    flex  flex-col 
    text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0 pb-20"
    >
      <h3
        className="absolute 
        top-8
        tracking-[10px] 
        text-gray-500 
        text-2xl
        uppercase"
      >
        Projects
      </h3>

      <div
        className="relative w-full flex
        overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory z-20 pt-20 
        scrollbar
        scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            className="
                        w-screen
                        flex-shrink-0 
                        snap-center 
                        flex 
                        flex-col 
                        space-y-9
                        items-center 
                        justify-center 
                        p-10 md:p-44 
                        h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 10,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              className="h-[800px] w-[500px]"
              src="https://play-lh.googleusercontent.com/wLGeewLp4VgAOHEV-1NYxCB7WJIrjVWGJsNbiYZbX7-7WF8oJe0KyueueOZkxO9MWQ=w526-h296-rw"
              alt=""
            ></motion.img>

            <div
              className="space-y-10 
                        px-0 md:px-10
                        max-w-6xl"
            >
                <h4
                  className="text-2xl 
                        font-semibold text-center "
                >
                  <span
                    className="
                            underline 
                            decoration-[#F7ABBA]/50"
                  >
                    Case Study {i + 1} of {projects.length} : NetFlix Clone.
                  </span>
                </h4>
             
              <p className="text-center text-md md:text-left">
                NetFlix 2.0 app that has a log in and log out authentication
                with google. It has a beautiful Home Screen with all the movies
                looking just like Netflix. There is also a subscription page
                where you can see your active monthly subscription. We also use
                stripe payments for the monthly Netflix subscriptions.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute 
        top-[30%]
        bg-[#F7AB0A]/10
        left-0
        h-[500px]
        -skew-y-12"
      ></div>
      
    </motion.div>
  );
}

export default Projects;
