import User from "@/models/user";
import bcrypt from "bcryptjs/dist/bcrypt";
import connection from "@/database/config";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

connection();
export const POST = async(NextRequest) => {
 try{
    const body = await NextRequest.json();
    const {username , password} = body;
    if(!username || !password){
        return new Response("username and password is required",{status:401});
    }

    const user = await User.findOne({username});
    if(!user){
       return new Response("Invalid UserName",{status:400})
    }
    const validPass = await bcrypt.compare(password,user.password)
    if(!validPass){
        return new Response("Incorrect Password",{status:400})
    }
    const tokenData = {
        username:user.username,
        name:user.name,
        id:user._id
    }
    const token = jwt.sign(tokenData,"hareeshdhruvaihateyouforever",{expiresIn:"15D"});
    const response = NextResponse.json({message:"login sucessfully"});
    response.cookies.set('token',token,{httpOnly:true,maxAge:60*60*24})
    return response;
 }
 catch(error){
    console.log(error);
    new Response("something went wrong",{status:500});
 }
}