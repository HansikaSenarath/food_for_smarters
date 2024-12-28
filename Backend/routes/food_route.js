import express from "express"
import { addFood } from "../controllers/food_controller.js"
import multer from "multer" // image store sytem

const foodRouter = express.Router();

// images will be save the update folder (image storage engine)
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        returncb(null,'${date.now()} ${file.originalname}')

    }
})

const upload = multer ({storage:storage})



foodRouter.post("/add",upload.single("image"), addFood)








export default foodRouter;
