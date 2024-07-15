import { NextResponse } from "next/server";

export const GET = async(NextRequest) => {
 try{
    const response = NextResponse.json({message:"logout sucessfully"});
    response.cookies.set('token',"",{httpOnly:true,expires: new Date(0)})
    return response;
 }
 catch(error){
    console.log(error);
    new Response("something went wrong",{status:500});
 }
}