import Link from "next/link";
import React from "react";
import { PiMessengerLogoBold } from "react-icons/pi";
import { RiNotification2Line } from "react-icons/ri";
function NavBar() {
  return (
    <div className="fixed top-0 w-full z-20 p-4 flex justify-between items-center bg-zinc-800">
      <Link href="/">
        <h2 className="relative font-bold text-[22px]">
          MetaBo
          <span className="text-primary text-[36px] absolute bottom-[-6px]">
            x
          </span>
        </h2>
      </Link>
      <button className="relative flex items-center gap-4 ">
        <Link href="/notifications">
          <RiNotification2Line className="text-white " size={23} />
        </Link>
        <Link href="/messages">
          <PiMessengerLogoBold className="text-white " size={25} />
        </Link>
      </button>
    </div>
  );
}

export default NavBar;
