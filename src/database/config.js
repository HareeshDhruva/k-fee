import mongoose from "mongoose";

const Url = "mongodb+srv://hareesh_dhruva:jfnr9keoc3@hareeshdhruva.c2rlzjk.mongodb.net/NEXT";
const connection = async () =>{
    try{
        await mongoose.connect(Url);
        console.log("Database connected Sucessfully")
    }
    catch(error){
        console.log("Error while connecting with the database",error.message);
    }
}

export default connection;