import React from "react";
import Image from "next/image";
import Button from "./Button";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="text-center bg-black">
      <h1 className="uppercase text-[40px] font-bold py-4">contact <span className="text-[#D3AD7F]">us</span></h1>
      <div className="flex mx-[200px] mt-[30px] bg-[#13131A]">
        <div className="w-1/2">
          <Image src="/map.png" alt="" width={500} height={500} />
        </div>
        <div className="w-1/2 text-center flex flex-col gap-5 justify-center p-4">
          <h1 className="font-bold text-[30px] uppercase"> get in <span className="text-[#D3AD7F]">touch</span></h1>
          <div className="flex items-center gap-4 ring-1 ring-white">
            <FaUserLarge className="ml-4" />
            <input
              type="text"
              name=""
              id=""
              placeholder="name"
              className="p-2 bg-[#13131A] w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4 ring-1  ring-white">
            <MdEmail className="ml-4" />
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              className="p-2 bg-[#13131A] w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4 ring-1  ring-white">
            <FaPhoneFlip className="ml-4" />
            <input
              type="number"
              name=""
              id=""
              placeholder="phone"
              className="p-2 bg-[#13131A] w-full focus:outline-none"
            />
          </div>
          <div>
            <Button name={"Contect Now"} styleBtn={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
