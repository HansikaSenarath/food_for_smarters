import foodModel from "../models/food_model.js";
import fs from 'fs'

// add food item 
const addFood = async(req,res)=>{

    let image_filename = '${req.file.filename}' ;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        catogory:req.body.category,
        image:image_filename
    })
    try{
        await food.save()
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
    }


 export {addFood}