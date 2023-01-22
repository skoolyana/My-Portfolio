import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio-Sunil</title>
      </Head>

      <h1> Lets build Portfolio.</h1>
     
    </div>
  )
}
