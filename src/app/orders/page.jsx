"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
  const [myOrders, setMyOrders] = useState();
  useEffect(() => {
    const placeOrder = async () => {
      const Response = await axios.get("api/users/order");
      if (Response.status === 200) {
        setMyOrders(Response.data);
      }
    };
    placeOrder();
  }, []);

  const dateConvert = (isoDate)=>{
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      date: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedDate;
  }

  return (
    <>
    {
      myOrders ? (
        <div className="text-center bg-black text-white h-[100dvh]">
        <h1 className="uppercase text-[40px] font-bold py-10">my orders</h1>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-evenly gap-10 mx-[200px]">
          {myOrders?.map((item, index) => (
            <div
              className="h-[300px] w-[300px] border border-[#D3AD7F] flex justify-center items-center flex-col gap-2"
              id={index}
            >
              <Image
                src={item.url}
                height={50}
                width={50}
                alt=""
                className="flex justify-center items-center"
              />
              <p className="font-bold">{item.itemName}</p>
              <p>Each Price : {item.price}</p>
              <p>Number of items ordered : {item.numberOfItem}</p>
              <p>Given Address : {item.address}</p>
              <p>Date & Time: {dateConvert(item.createdAt)}</p>
              <p>total : {item.totalPrice}</p>
            </div>
          ))}
        </div>
      </div>
      ) : (
        <h1 className="uppercase text-[40px] font-bold py-10 text-white bg-black h-[100dvh] w-full flex justify-center items-center">No orders found</h1>
      )
    }
    </>
  );
};

export default page;
