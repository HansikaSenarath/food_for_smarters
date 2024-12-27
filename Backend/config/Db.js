import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hansika:UJ7Qen9czzyGhdwR@cluster0.skhxh.mongodb.net/food-del"
    );
    console.log("DB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};
