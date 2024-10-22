import foodModel from "../models/FoodModels.js"; // Include the .js extension
import fs from "fs";

// Add food items
const addFood = async (req, res) => {
   let image_filename = `${req.file.filename}`; // Correct template literal usage

   const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
   });

   try {
      await food.save();
      res.json({ success: true, message: "Food Added" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error adding food" });
   }
};

export { addFood };
