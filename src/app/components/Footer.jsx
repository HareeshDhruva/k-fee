import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from 'next/link';

const Footer = ({navData}) => {
  return (
    <div className='bg-[#13131A] p-[50px]'>
        <div className='text-[40px] flex justify-center items-center gap-5'>
        <div className='rounded-full ring-1 ring-[#D3AD7F] p-1'><TiSocialFacebook/></div>
        <div className='rounded-full ring-1 ring-[#D3AD7F] p-1'><BiLogoInstagramAlt/></div>
        <div className='rounded-full ring-1 ring-[#D3AD7F] p-1'><AiFillTwitterCircle/></div>
        <div className='rounded-full ring-1 ring-[#D3AD7F] p-1'><TiSocialLinkedin/></div>
        <div className='rounded-full ring-1 ring-[#D3AD7F] p-1'><FaGithub/></div>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <ul className="flex gap-2">
            {navData.map((item, index) => (
              <Link href="/home" key={index} className="text-[15px] ring-1 py-1 px-5 ring-[#D3AD7F] first-letter:uppercase">
                {item}
              </Link>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Footer;
