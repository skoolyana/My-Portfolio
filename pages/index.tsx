import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] 
    text-white 
    h-screen snap-y 
    overflow-y-scroll 
    overflow-x-hiden 
    snap-mandatory 
    overflow-scroll 
    z-0
    scrollbar
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80
    
    '>
      <Head>
        <title>Portfolio-Sunil</title>
      </Head>

      {/* Header */}
      <Header></Header>

      {/* Hero */}
      <section id='hero' className='snap-start'>

        <Hero>

        </Hero>

      </section>

      {/* About */}

      <section id='about' className='snap-center'>

        <About>

        </About>
      </section>


      {/* Work Experiences */}

      <section id='experience' className='snap-center'>

        <WorkExperience></WorkExperience>
    
      </section>

   {/* Skill */}

    <section id='skills' className='snap-start'>

  <Skills>
    
    </Skills>    

    </section>

     
      {/* Projects */}

    <section id='projects' className='snap-start'>

    <Projects></Projects>

    </section>

{/* Contact me */}

    <section id='contact' className='snap-start'>
    <ContactMe></ContactMe>

    </section>

      
    </div>
  )
}
