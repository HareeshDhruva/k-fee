import React from "react";
import Button from "./Button";
const HeroSection = ({ headin, para }) => {
  return (
    <div>
      <div
        style={{
            height: "70vh",
            backgroundImage: "url('/hero.png')",
            backgroundRepeat: "no-repeat",
            zIndex:0,
            backgroundPositionX:-70,
            backgroundSize:"fit",
        }}
        className="pt-32 border-gray-800 border-t-2"
      >
        <div className="w-1/2 z-10 text-white">
          <h1 className="text-[50px] uppercase font-bold ml-[200px]">{headin}</h1>
          <p className="ml-[200px]">{para}</p>
          <Button name={"Get it now"} styleBtn = {"ml-[200px]"}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
