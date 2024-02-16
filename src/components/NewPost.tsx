/* eslint-disable @next/next/no-img-element */
import { HiUserGroup } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BiSolidVideo } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
function NewPost() {
  return (
    <div className="flex flex-col items-centers mx-4 p-3 mt-3 bg-zinc-800 rounded-lg">
      <div className="flex w-[70%] items-center mb-3">
        <PiNotePencilBold size={15} className="text-slate-400 mr-2" />
        <input
          type="text"
          className="bg-transparent text-[13px] outline-none"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className=" flex justify-evenly items-center bg-red-600 rounded-lg w-[70px] py-1 text-[12px]">
          <BiSolidVideo size={20} />
          Live
        </div>

        <div className=" flex justify-evenly items-center bg-green-600 rounded-lg w-[75px] py-1 text-[12px]">
          <IoMdPhotos size={20} />
          Photo
        </div>
        <div className=" flex justify-evenly items-center bg-yellow-500 rounded-lg w-[75px] py-1 text-[12px]">
          <HiUserGroup size={20} />
          Room
        </div>
      </div>
    </div>
  );
}

export default NewPost;
