import React from "react";
import Link from "next/link";
import { IoIosTime } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import { BsListTask, BsPlusLg } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

import { useAuthenication } from "../utlis/store";
function Index() {
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
            <Link href="/" passHref>
              <li className="flex w-full hover:text-gray-500 cursor-pointer items-center mb-6">
                <BsPlusLg className="text-lg" />
                <div className="pl-2">Invite people</div>
              </li>
            </Link>

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
