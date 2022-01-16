import React, { useState } from "react";
import Link from "next/link";
import { IoIosTime, IoMdClose } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import { BsListTask, BsPlusLg, BsPlusCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

import { useAuthenication } from "../utlis/store";

function Index() {

  const [showInvite, setShowInvite] = useState(false);
  const { isAuthenticated, logout } = useAuthenication();

  if (!isAuthenticated) return null;
  return (
    <div className="flex flex-no-wrap fixed h-screen z-100">
      <div className="w-60 text-[#15173F] absolute sm:relative bg-white shadow grid place-items-center h-screen">
        <div className="px-8">
          <ul className="mt-12">
            <Link href="/calendar" passHref>
              <li className="flex w-full hover:text-gray-500 cursor-pointer items-center mb-6">
                <IoCalendar className="text-2xl" />
                <div className="pl-2">Calendar</div>
              </li>
            </Link>
            <Link href="/tasks" passHref>
              <li className="flex w-full hover:text-gray-500 cursor-pointer items-center mb-6">
                <BsListTask className="text-2xl" />
                <div className="pl-2">Tasks</div>
              </li>
            </Link>
            <div onClick={() => setShowInvite(true)}>
              <li className="flex w-full hover:text-gray-500 cursor-pointer items-center mb-6">
                <BsPlusLg className="text-lg" />
                <div className="pl-2">Invite people</div>
              </li>
            </div>

            {showInvite ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >

                  <div className="relative w-auto my-6 mx-auto max-w-3xl">


                    <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  px-36 py-8">

                      <div className="flex items-center justify-center p-5">
                        <h3 className="text-3xl font-poppins font-extrabold">
                          Invite people
                        </h3>
                        <div className="absolute top-6 right-6 cursor-pointer" onClick={() => setShowInvite(false)}>
                          <IoMdClose className="text-red-600 text-2xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <input className="my-2 bg-white rounded-lg placeholder:text-center text-xl p-1 border-2 border-fontColor" placeholder="Enter email" />

                        <input className="my-2 bg-white rounded-lg placeholder:text-center text-xl p-1 border-2 border-fontColor" placeholder="Enter email" />

                        <div className="flex py-2 justify-start flex-row cursor-pointer">
                          <BsPlusCircle className="text-lg" />
                          <p className="text-lg pl-2 -mt-1">Add another email</p>
                        </div>
                      </div>

                      <Link href="/chatroom" passHref>
                        <button className="bg-fontColor my-8 py-2 px-3 text-base text-white rounded-lg cursor-pointer" onClick={() => setShowInvite(false)}>
                          Invite people
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <button onClick={logout}>
              <li className="flex w-full text-red-500 hover:text-red-300 cursor-pointer items-center mb-6">
                <BiLogOut className="text-lg" />
                <div className="pl-2">Logout</div>
              </li>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
