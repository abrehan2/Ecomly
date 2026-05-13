// Imports:
import mongoose from "mongoose";
import { ENV } from "./env.js";

/**
 * Establishes a MongoDB connection using the configured DB URL.
 *
 * Attempts to connect to MongoDB using ENV['DB_URL']; on success logs the connected host.
 * If the connection fails, logs the error message and terminates the process with exit code 1.
 */
export async function connectDB() {
    try {
        const conn = await mongoose.connect(ENV['DB_URL']);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);    
    }
}