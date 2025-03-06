import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoScema=new Schema({
   videofile:{
    type:String,
    required:true,
   },
   thumbnail:{
    type:String,
    required:true,
   },
   title:{
    type:String,
    required:true,
   },
   description:{
    type:String,
    required:true,
   },
   duration:{
type:Number,
required:true
   },
   views:{
    type:Number,
    default:0
   },
   isPublish:{
    type:Boolean,
    default:true
   },
   owner:{
       type:Schema.Types.ObjectId,
       ref:"User"
   }
},{timestamps:true})
videoScema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("video",videoScema)