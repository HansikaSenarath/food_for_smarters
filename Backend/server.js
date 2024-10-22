import express from "express";
import cors from "cors";
import { connectDB } from "./config/Db.js";
import foodRouter from "./routes/FoodRoutes.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection 
connectDB();


// Api endpoint 
app.use ("/api/food" , foodRouter)



app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


