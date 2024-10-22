import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hansikasenarath:HGsdatabaSe@cluster0.x5rl9.mongodb.net/foof-del');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed", error);
        process.exit(1); // Exit the process with failure code
    }
};
