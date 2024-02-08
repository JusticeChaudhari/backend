import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config(
    { path: './env' }
);

connectDB();












 

/* APPROACH 1 jaha humne sab kuchh index.js mein hi sab kuchh likha hai  */
// import dotenv from "dotenv";
// dotenv.config();
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log(`${process.env.MONGODB_URL}`);
//     }
//     catch(error){
//         console.log("Error : ",error);
//         throw error;
//     }
// })()