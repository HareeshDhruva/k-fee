import React from "react";
import Image from "next/image";
import Button from "./Button";
const About = () => {
  return (
    <div className="text-center bg-black">
      <h1 className="uppercase text-[40px] font-bold py-4">
        <span className="text-[#D3AD7F]">about</span> us
      </h1>
      <div className="flex mx-[200px] mt-[30px] bg-[#13131A]">
        <div className="w-1/2">
          <Image src="/aboutcoffee.png" width={500} height={500} />
        </div>
        <div className="w-1/2 text-left flex flex-col gap-5 justify-center p-2">
          <h1 className="font-bold text-[30px]">
            what makes you coffee special
          </h1>
          <p className="first-line:ml-4">
            my coffee is more than a beverage; it's an experience crafted with
            passion and expertise. It embodies a blend of traditions and
            innovation, where I experiment with different roasting techniques
            and blend profiles to create unique flavor profiles. Beyond its
            taste, my coffee carries a story—of exploration, experimentation,
            and a commitment to delivering an exceptional cup that awakens the
            senses and fosters moments of connection and reflection.
          </p>
          <p>
          </p>
          <div>
            <Button name={"learn more"} styleBtn={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
