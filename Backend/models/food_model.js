import mongoose from "mongoose";

const foodScema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String, required:true},
    price : {type:Number, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food" ,foodScema) // use and function

export default foodModel;