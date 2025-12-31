// Imports:
import mongoose from "mongoose";
import { ENV } from "./env.js";

export async function connectDB() {
    try {
        const conn = await mongoose.connect(ENV['DB_URL']);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);    
    }
}