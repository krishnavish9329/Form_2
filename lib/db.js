import mongoose from 'mongoose';
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/formDB';

let isConnected = false;

async function dbConnection() {

    console.log("MONGODB_URL",  process.env.MONGODB_URL);

    if (isConnected) {
        console.log("Already connected to MongoDB"); 
        return;
    }
    try {
        const db = await mongoose.connect(MONGODB_URL);
        isConnected = db.connection.readyState === 1;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        throw error;
    }
}

export default dbConnection;