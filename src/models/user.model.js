import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'; 
const userSchema  = new mongoose.Schema({
    watchHistory : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
    }],
    username:{
        type : String,
        unique: true,
        required: true,
        lowercase: true,
        index : true, //makes is searchable 
        trim: true,
    },
    email: {
        tpye: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    fullName:{
        type:String,
        required:true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, //cloud URL
        required: true,
    },
    coverImage:{
        type: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    refreshTokens: {
        type : true,
    },
},
    {
        timestamps: true
    });
// in the following line before changes are made I want to encrypt the passwords
// middleware ka next flag ko pass kar process ke end ko batana hota hai   
/* always write the call back here in function (){} format  since arrow function doenot
know the concept of this keyword */  
userSchema.pre("save", async function (){
    //encrypting the password where the 10 represents the number of salting rounds
    if(this.isModified("password")){ // check if the password is modified
        this.password = bcrypt.hash(this.password, 10);
        next();
    }
    next();
})

//making a custom method in the model

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}  
userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
userSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}
export const User = mongoose.model("User",userSchema);