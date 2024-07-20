import React from 'react'
import Image from 'next/image'
import Button from './Button'

const OurBlogs = ({BlogImages}) => {
  return (
    <div className="text-center bg-black py-5">
      <h1 className="uppercase text-[40px] font-bold py-10"><span className="text-[#D3AD7F]">our</span> Blogs</h1>
      <div className="grid grid-cols-3 grid-rows-1 items-center justify-evenly gap-10 mx-[200px]">
        {BlogImages.map((item, index) => (
          <div
            className="h-[400px] w-[300px] border border-[#D3AD7F] flex justify-center items-center flex-col gap-2"
            id={index}
          >
            <Image src={item.url} height={200} width={200} className="flex justify-center items-center"/>
            <p className="font-bold">Tasty & Refreshing coffee</p>
            <p className="text-[0.9rem]">by Dhruva / 3rd july</p>
            <p className="p-4 text-[0.9rem]">{item.info}</p>
            <Button name={"Get it now"} styleBtn={""}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurBlogs
