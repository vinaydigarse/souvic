// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { SlHome } from "react-icons/sl";
import { BsInfoSquare, BsEnvelopeAt, BsCameraVideo } from "react-icons/bs";
import { FaTshirt, FaRedhat } from "react-icons/fa";

// import logo from '@/img/logo.svg'

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  // Define our base class
  const className =
    "bg-blue-500 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl  flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/" className="text-center">
            {/*eslint-disable-next-line*/}
            <h1 className="text-white font-bold text-3xl">Dashboard</h1>
          </Link>
        </div>
        <div className="flex flex-col text-center mt-10 ">
          <h1 className="text-white border-gray-600 font-semibold text-xl m-4 border-b-2 p-5 border-t-2">
            Welcome Souvic
          </h1>
          <h1 className="text-white font-semibold text-sm">
            0.00 Credits left
          </h1>
          <div className=" border-b-2 border-gray-600 pb-5">
            <button className="outline w-24 bg-green-200 rounded-sm m-auto mt-4">
              Buy More
            </button>
          </div>
          <MenuItem name="Video" route="/" icon={<BsCameraVideo />} />
          <MenuItem name="Audio" route="/audio" icon={<BsCameraVideo />} />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
