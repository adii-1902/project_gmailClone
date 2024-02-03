import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
    const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.oqdai1b.mongodb.net/Gmail_Clone`;
    try {
        mongoose.connect(DB_URI);
        mongoose.set('strictQuery', false);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database :', error.message);
    }
}

export default connection;