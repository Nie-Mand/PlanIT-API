import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Login: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Login | PlantIT</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative">

                <div className="z-20 p-4 origin-bottom-right transform bg-white border-4 border-blue-800 lg:mx-56 mt-32 h-full mx-8 rounded-2xl">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <div className="">
                            <Image width="400" height="400" src="/assets/login.svg" alt="img" />
                        </div>

                        <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                            <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-indigo-800 font-carattere md:text-4xl lg:text-7xl">
                                Welcome
                            </h2>

                            <div className="py-2">
                                <h1 className='text-lg text-gray-500'>Your Email</h1>
                                <input type="email" required placeholder="Your email" className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-xl tracking-wider" />
                            </div>

                            <div className="py-2">
                                <h1 className='text-lg text-gray-500'>Your Password</h1>
                                <input type="password" required placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-xl tracking-wider" />
                            </div>

                            <a href="/signup" className="grid place-content-end">
                                <button className="h-12 px-8 text-lg tracking-wider font-fontVollkorn ">New here, <span className="text-blue-800">Sign Up</span></button>
                            </a>

                            <div className="grid">
                                <button className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-2 bg-blue-800 hover:shadow-lg">Sign In</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
