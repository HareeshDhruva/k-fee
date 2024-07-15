import User from "@/models/user";
import bcrypt from "bcryptjs/dist/bcrypt";
import connection from "@/database/config";

connection();
export const POST = async(NextRequest) => {
 try{
    const body = await NextRequest.json();
    const {name, username , password} = body;
    
    console.log(body);

    if(!name || !username || !password){
        return new Response("name username and password is required");
    }
    const user = await User.findOne({username});
    if(user){
        return new Response("username already exist",{status:400});
    }
    else{
        const salt = await bcrypt.genSalt(12);
        const hasedPassword = await bcrypt.hash(password,salt)
        const newuser = new User({
            name,
            username,
            password:hasedPassword
        });
        await newuser.save();
        return new Response("user saved sucessfully",{status:200});
    }
 }
 catch(error){
    console.log(error);
    return new Response("something went wrong",{status:500});
 }
}