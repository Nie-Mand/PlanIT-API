import React, { useState, useEffect } from 'react'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, [])

    return (
        <div className='z-100'>
            <nav className="flex items-center bg-lightBg dark:bg-darkBg py-2 flex-wrap bg-gray-800 text-white px-8">
                <h1 className="p-2 mr-4 inline-flex items-center tracking-wider text-2xl md:text-4xl cursor-pointer font-base font-carattere">
                    AppName
                </h1>
                <button className="lg:hidden right-0 absolute font-bold md:px-8 text-6xl px-6 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                    <HiOutlineMenuAlt3 className="h-7 w-7 focus:outline-none" aria-hidden="false" />
                </button>
                {showNavbar ? (
                    <>
                        <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden"
                        >
                            <div className="relative my-6 mx-auto w-screen">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                        <Link href="/" passHref>
                                            <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                AppName
                                            </div>
                                        </Link>

                                        <button className="text-6xl font-semibold absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                            <HiX className="h-7 w-7 focus:outline-none" aria-hidden="false" />
                                        </button>

                                    </div>

                                    <div className="grid justify-center">
                                        <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                    </div>

                                    <div className="grid place-items-center text-xl py-2 w-full font-sourceSerif mb-4" >
                                        <Link href="/" passHref>
                                            <h2 className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</h2>
                                        </Link>

                                        <Link href="/" passHref>
                                            <h2 className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</h2>
                                        </Link>

                                        <Link href="/" passHref>
                                            <h2 className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</h2>
                                        </Link>

                                        <Link href="/" passHref>
                                            <h2 className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</h2>
                                        </Link>

                                        <div className='cursor-pointer'>
                                            <Image src="/assets/logout.png" height="38" width="38" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                    </>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto font-sourceSerif" >

                        <Link href="" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</span>
                        </Link>

                        <Link href="" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</span>
                        </Link>

                        <Link href="" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-200 cursor-pointer">Home</span>
                        </Link>

                        <div className='cursor-pointer mt-4'>
                            <Image src="/assets/logout.png" height="38" width="38" alt="" />
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
