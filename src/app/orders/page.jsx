"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [myOrders, setMyOrders] = useState(null); 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("api/users/order");
        if (response.status === 200) {
          setMyOrders(response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // Function to convert ISO date to formatted date string
  const dateConvert = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedDate;
  };

  return (
    <>
      {myOrders ? (
        <div className="text-center bg-black text-white h-[100dvh]">
          <h1 className="uppercase text-[40px] font-bold py-10">my orders</h1>
          <div className="grid grid-cols-3 grid-rows-2 items-center justify-evenly gap-10 mx-[200px]">
            {myOrders?.map((item, index) => (
              <div
                className="h-[300px] w-[300px] border border-[#D3AD7F] flex justify-center items-center flex-col gap-2"
                key={index}
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
        <h1 className="uppercase text-[40px] font-bold py-10 text-white bg-black h-[100dvh] w-full flex justify-center items-center">
          No orders found
        </h1>
      )}
    </>
  );
};

export default Page;
