"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import axios from "axios";

const Navbar = ({ navData }) => {
  const onLogout = async () => {
    const response = await axios.get('api/users/logout');
    if(response.status === 200){
      window.location.href = "/";
    }
  }
  
  return (
    <div className=" text-white">
      <div className="w-[80%] m-auto flex items-center justify-evenly gap-20 py-4">
        <div>
          <Image src="/coffeelogo.png" width={100} height={100} />
        </div>
        <div>
          <ul className="flex gap-10">
            {navData.map((item, index) => (
              <Link href={`/${item}`} id={index} className="text-[15px] first-letter:uppercase">
                {item}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 text-[25px] justify-center items-center">
          <LuSearch />
          <FaCartArrowDown />
          <div className="text-[16px]"> 
          <button className=" bg-[#D3AD7F] font-semibold p-1 px-4 " onClick={()=>onLogout()}>
          <p>Logout</p>
          </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;