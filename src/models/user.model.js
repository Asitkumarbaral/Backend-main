import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userScema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true//for better searching

    },
    email:{
      
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            
    },
  fullname:{
        type:String,
        required:true,
        trim:true,
        
        index:true
  },
  Avtar:{
    type:String,//cloudnary url
    required:true
  },
  coverImage:{
    type:String
  }
  ,
  watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"video"
    }
  ],
  password:{
       type:String,
       required:[true,"password is required"]



    },
    refreshtoken:{
        type:String
    }

  
},{timestamps:true})
userScema.pre("save",async function(next){
  if(!this.isModified("password"))return next()
  this.password=bcrypt.hashSync(this.password,10)
  next()
})
userScema.methods.comparePassword=async function(password){
  return await bcrypt.compare(password.this.password)
}
userScema.methods.generateAcessToken=function(){
  return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      userName:this.userName,
      fullname:this.fullname,
    },
    process.env.ACCES_TOKEN_SECRETE,
    {
      expiresIn:process.env.ACESS_TOKEN_EXPIRE
    }
  )
}
userScema.methods.generateRefreshToken=function(){
  return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      userName:this.userName,
      fullname:this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRETE,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRE
    }
  )
}

export const User=mongoose.model("User",userScema)
//bcrypt
//jwt token
//cloudnary
//mongooseaggregatepaginate
