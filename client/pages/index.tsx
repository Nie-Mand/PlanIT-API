import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlantIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-homeBg text-white font-bold pl-64 px-4 h-screen">Hello World</h1>
    </div>
  )
}

export default Home
