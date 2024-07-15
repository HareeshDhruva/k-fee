import React from "react";
import Image from "next/image";
import Button from "./Button";
const About = () => {
  return (
    <div className="text-center bg-black">
      <h1 className="uppercase text-[40px] font-bold py-4"><span className="text-[#D3AD7F]">about</span> us</h1>
      <div className="flex mx-[200px] mt-[30px] bg-[#13131A]">
        <div className="w-1/2">
          <Image src="/aboutcoffee.png" width={500} height={500} />
        </div>
        <div className="w-1/2 text-left flex flex-col gap-5 justify-center p-2">
          <h1 className="font-bold text-[30px]">what makes you coffee special</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            dolorum excepturi! Repudiandae delectus quae reprehenderit voluptate
            ullam explicabo at debitis consequatur similique totam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            fugit, exercitationem fugiat autem vel quaerat temporibus quibusdam
            ut deleniti tempore.
          </p>
          <div>
          <Button name={"learn more"} styleBtn={""}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
