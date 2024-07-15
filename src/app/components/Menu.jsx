"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";

const Menu = ({ menuItems }) => {
  const [orderData, setOrderData] = useState({
    itemName: "",
    numberOfItem: "",
    address: "",
    price: "",
    url: "",
  });
  const [open, setOpen] = useState(false);

  const HandelOnChane = (e) => {
    e.preventDefault();
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (data) => {
    setOrderData({
      itemName: data.itemName,
      price: data.price,
      url: data.src,
    });
    setOpen(true);
  };

  const placeOrder = async () => {
    if (orderData.numberOfItem == 0) {
      return toast("1 or More items can be place");
    }
    const Response = await axios.post("api/users/order", orderData);
    if (Response.status === 200) {
      setOpen(false);
      toast(Response.data.message);
    }
  };

  return (
    <div className="text-center bg-black">
      <h1 className="uppercase text-[40px] font-bold py-10">
        our <span className="text-[#D3AD7F]">menu</span>
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 items-center justify-evenly gap-10 mx-[200px]">
        {menuItems.map((item, index) => (
          <div
            className="h-[300px] w-[300px] border border-[#D3AD7F] flex justify-center items-center flex-col gap-2"
            id={index}
          >
            <Image
              src={item.src}
              height={50}
              width={50}
              alt=""
              key={index}
              className="flex justify-center items-center"
            />
            <p className="font-bold">{item.itemName}</p>
            <p>
              {item.price}{" "}
              <span className="line-through">{item.originalPrice}</span>
            </p>
            <input
              type="button"
              value="Order Now"
              className="text-white mt-6 bg-[#D3AD7F] p-1 px-4"
              onClick={() => handleListItemClick(item)}
            />
          </div>
        ))}
      </div>
      <div className={`${open ? "visivle" : "hidden"}`}>
        <div className="fixed top-1/2 left-1/2 w-[400px] h-[400px] max-md:w-[300px] max-md:h-[400px] bg-black text-white transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg ring-1 ring-[#D3AD7F]">
          <div className="fixed right-1 md:-right-10 w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
            <RxCross2
              onClick={handleClose}
              className="max-sm:text-black text-[#D3AD7F]"
            />
          </div>
          <div className="flex flex-col gap-5 items-center justify-center h-full">
            <input
              type="text"
              name="numberOfItem"
              placeholder="Number of Coffee"
              value={orderData.name}
              onChange={HandelOnChane}
              className="text-center py-2 px-4 bg-[#12141d] text-white placeholder:text-gray-500 max-md:w-[250px] focus:outline-none focus:outline-[#D3AD7F]"
              autoComplete="name"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={orderData.password}
              onChange={HandelOnChane}
              className="text-center py-2 px-4 bg-[#12141d] text-white placeholder:text-gray-500 max-md:w-[250px] focus:outline-none focus:outline-[#D3AD7F]"
              autoComplete={"address"}
            />
            <button
              type="submit"
              onClick={placeOrder}
              className="py-2 px-5 bg-[#D3AD7F] text-white"
            >
              Place Order
            </button>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-10"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Menu;
