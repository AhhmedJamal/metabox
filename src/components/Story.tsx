"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
function Story() {
  const x = [
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
  ];
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const startDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseDown(true);
    setStartX(e.pageX - (e.currentTarget.offsetLeft || 0));
    setScrollLeft(e.currentTarget.scrollLeft || 0);
  };

  const stopDragging = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!mouseDown) return;
    const x = e.pageX - (e.currentTarget.offsetLeft || 0);
    const scroll = x - startX;
    if (e.currentTarget) {
      e.currentTarget.scrollLeft = scrollLeft - scroll;
    }
  };

  return (
    <div
      className="p-2 w-full  cursor-pointer overflow-auto  bg-zinc-800 my-3"
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseMove={handleMouseMove}
      onMouseLeave={stopDragging}
    >
      <div className="flex gap-2 w-[100%] ">
        <div className="relative">
          <div className=" w-[50px] h-[50px] rounded-full overflow-hidden  border-[3px] border-[#1c1c1c] ">
            <Image
              src="https://picsum.photos/200"
              alt="Story"
              width={50}
              height={50}
            />
          </div>
          <FaPlus
            className="absolute z-10 bottom-[9px] right-[2px] bg-primary text-white rounded-full p-[2px]"
            size={15}
          />
        </div>
        {x.map((_, i) => {
          return (
            <div
              key={i}
              className=" w-[55px] h-[54px] rounded-full bg-gradient-to-r from-primary to-amber-600  flex justify-center items-center"
            >
              <div className=" w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center   border-[3px] border-[#1c1c1c] m-[2px]">
                <Image
                  src="https://picsum.photos/200"
                  alt="Story"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Story;
