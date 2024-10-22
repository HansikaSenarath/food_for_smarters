import express from "express";
import { addFood } from "../controllers/FoodController.js"; // Include the .js extension
import multer from "multer"; // Image storage system

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
   destination: "uploads",
   filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Correct template literal usage
   },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
