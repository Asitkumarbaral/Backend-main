import {v2 as cloudnary} from "cloudinary";
import fs from "fs";
//unlink is used to delete the file from the system
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name:  process.env.cloudnary_cloud_name,
    api_key: process.env.cloudnary_api_key,
    api_secret:process.env.cloudnary_api_secrete
});
const uploadimage=async (localfilepath)=>{
    try{
        if(!localfilepath){
            return null
        }
        //upload the file on cloudnary
       const response=await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto",
        })
        //file has been uploaded successfully
        console.log("file uploaded sucessfully");
        console.log("from the url",response.url);

        return response

        
    }catch(error){
       fs.unlinkSync(laclfile)//remove the localiy save temporary file as 
       //opeartion opearation got faield
    }
}

export {uploadimage} 

