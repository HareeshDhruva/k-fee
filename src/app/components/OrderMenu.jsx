"use client";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import React from "react";
const OrderMenu = () => {
  const MakeOrder = () => {};
  return (
    <div className="p-4 m-4 flex gap-10 flex-col text-black">
    <Input type="number" placeholder = "number of coffees"/>
      <div className="w-full flex gap-10 justify-between items-center">
        <DialogClose>
        <Button variant="outline">Cancle</Button>
        </DialogClose>
        <Button variant="outline" onClick={() => MakeOrder}>Buy</Button>
      </div>
    </div>
  );
};

export default OrderMenu;
