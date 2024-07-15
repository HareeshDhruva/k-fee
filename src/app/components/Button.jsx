import React from "react";

const CustomButton = ({name,styleBtn}) => {
  return (
   <input type="button" value={name} className={`mt-6 bg-[#D3AD7F] px-4 p-1 ${styleBtn}`} />
  );
};

export default CustomButton;
