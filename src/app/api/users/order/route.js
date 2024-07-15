import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import User from "@/models/user";
import Order from "@/models/order";

export const POST = async(req,res)=>{
    try{
        const body = await req.json();
        console.log(body);
        const token = req.cookies.get('token')?.value || '';
        const {id} = jwt.verify(token,"hareeshdhruvaihateyouforever");
        const user = await User.findById(id);
        const totalprice = body.price * body.numberOfItem;
        const newOrder = new Order({
            user: user._id,
            url:body.url,
            itemName: body.itemName,
            address: body.address,
            numberOfItem: body.numberOfItem,
            totalPrice:totalprice,
            price:body.price
          });
          await newOrder.save();
          const response = {
            newOrder,
            message: `${user.name} Please pay ₹${totalprice} in total`
          };
        return NextResponse.json(response,{status:200});
    }
    catch(error){
        return NextResponse.json("failed",{status:500});
    }
}

export const GET = async(req)=>{
  try{
      const token = req.cookies.get('token')?.value || '';
      const {id} = jwt.verify(token,"hareeshdhruvaihateyouforever");
      const orders = await Order.find({user:id}).sort({ createdAt: -1 });
      return NextResponse.json(orders,{status:200});
  }
  catch(error){
      return NextResponse.json("failed",{status:500});
  }
}