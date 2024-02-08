import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () =>{
    try{
        const mongoDBInstance=await mongoose.connect(`mongodb+srv://sarthakchaudhari401:sarthak1234@cluster0.ooquxt8.mongodb.net/${DB_NAME}`);
        console.log(`\n MONGODB INSTANCE : ${mongoDBInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB connection Error : ",error);
        process.exit(1);
    }
}
export default connectDB;
