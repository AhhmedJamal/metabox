"use client";
import { FiSearch } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { TbTriangleFilled } from "react-icons/tb";
import { TfiVideoClapper } from "react-icons/tfi";
import { SlHome } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";
function BottomBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 h-[55px] w-full flex justify-around items-center bg-zinc-800 border-t border-gray-600">
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        <SlHome size={24} />
      </Link>
      <Link href="/search" className={pathname === "/search" ? "active" : ""}>
        <FiSearch size={25} />
      </Link>
      <Link href="/reels" className={pathname === "/reels" ? "active" : ""}>
        <div className="relative">
          <TfiVideoClapper size={24} />
          <TbTriangleFilled
            size={6}
            className="absolute top-[13px] left-[9px] rotate-90"
          />
        </div>
      </Link>
      <Link
        href="/account"
        className={pathname === "/account" ? "active" : ""}
      >
        <IoMdPerson size={25} />
      </Link>
    </div>
  );
}

export default BottomBar;
