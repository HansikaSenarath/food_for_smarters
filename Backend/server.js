import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

// appp config 
const app = express()
const port = 4000 

// middleware 
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("API Working")
})
// DB connection 
connectDB();


// run express server 
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

