import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config(
    { path: './env' }
);

connectDB()
.then(function(){
    app.listen(process.env.PORT|| 3000,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo DB connection failed  : ",err);
})












 

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