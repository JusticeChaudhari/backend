import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema  = new mongoose.Schema(
    {
        videoFile:{
            type: String,
            required: true,
        },
        thumbnail:{
            type: String,
            required: true,
        },
        owner:{
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title:{
            type: String,
            required : true
        },
        description:{
            type: String,
            required : true
        },
        duration:{
            type: Number,
            required: true
        },
        views:{
            type: Number,
            required: true
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        
    },{
        timestamps : true
    });

//to apply the aggregate functions to the schemanpm
videoSchema.plugin(mongooseAggregatePaginate)    
export  const Video = mongoose.model("Video",videoSchema);


//mongodb mein schema will be stored as "videos"  --> first letter small and plural form
