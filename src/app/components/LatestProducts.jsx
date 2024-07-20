import React from 'react'
import Image from 'next/image';
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { PiNumberCircleZeroFill } from "react-icons/pi";

const LatestProducts = ({latestProducts}) => {
  return (
    <div className="text-center bg-black">
    <h1 className="uppercase text-[40px] font-bold py-10"><span className="text-[#D3AD7F]">latest</span> products</h1>
    <div className="grid grid-cols-3 grid-rows-1 items-center justify-evenly gap-10 mx-[200px]">
      {latestProducts.map((item, index) => (
        <div
          className="h-[400px] w-[300px] border border-[#D3AD7F] flex justify-center items-center flex-col gap-2"
          key={index}
        >
        <div className='flex gap-5 p-4 text-[20px]'>
            <div className='ring-1 p-2 ring-white'>
            <FaHeart/>
            </div>
            <div className='ring-1 p-2 ring-white'>
            <FaCartArrowDown/>
            </div>
            <div className='ring-1 p-2 ring-white'>
            <PiNumberCircleZeroFill/>
            </div>
        </div>
          <Image src={item} height={100} width={100} alt="" className="flex justify-center items-center"/>
          <p className="font-bold">Fresh coffee</p>
          <Image src="/stars-group.png" height={50} alt="" width={50}/>
          <p>₹ 100.00 <span className="line-through">₹ 120.00</span></p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default LatestProducts;
