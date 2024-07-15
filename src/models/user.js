import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:8
    }
});

const User = mongoose.models.user || mongoose.model("user",userSchema);
export default User;
