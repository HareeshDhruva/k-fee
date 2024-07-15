import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    url:{
        type:String,
        require:true
    },
    itemName:{
        type:String,
        require:true
    },
    numberOfItem:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    totalPrice:{
        type:Number,
        require:true
    }
},{timestamps:true});

const Order = mongoose.models.finalOrder || mongoose.model("finalOrder",orderSchema);
export default Order;