/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiChatCircleDots } from "react-icons/pi";
import { FaRegShareSquare } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
function Post() {
  return (
    <div className="bg-zinc-800 p-4 pl-1 rounded-lg mb-4 max-w-[500px] m-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center  gap-4">
          <div className="  overflow-hidden rounded-full">
            <Image
              src="https://picsum.photos/200"
              alt="Post image"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h3 className="text-gray-100 ">Ali Jamal</h3>
            <div className="text-gray-500 text-[10px]">{8} mins age</div>
          </div>
        </div>

        <HiOutlineDotsVertical size={20} className="white" />
      </div>
      <div className="flex mt-1 justify-between">
        <div className=" w-[42px] flex justify-center">
          <div className="w-[2px] bg-gray-600  mb-1"></div>
        </div>
        <div className="w-[85%]">
          <p className="text-[13px] text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            commodi
          </p>
          <div className="mt-3 overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/200"
              alt="Post image"
              className="w-full"
            />
          </div>
          <div className=" mt-4 flex items-center justify-between w-full ">
            <div className="text-[12px] flex justify-center items-center gap-2">
              <GrFavorite size={17} className="text-gray-300" />
              {426}
            </div>
            <div className="text-[12px] flex justify-center items-center gap-2">
              <PiChatCircleDots size={17} className="text-gray-300" /> {32}
            </div>
            {/* <PiShareNetwork size={18} className="text-gray-300" /> */}
            <div className="text-[12px] flex justify-center items-center gap-2">
              <IoStatsChartSharp size={17} className="text-gray-300" />
              {1.3}k
            </div>
            <FaRegShareSquare size={17} className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
