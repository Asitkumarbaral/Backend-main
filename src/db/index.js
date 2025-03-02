import {  mongoose} from "mongoose";
import { Db_name } from "../constants.js";
const connectDB=async () => {
    try {
        const connectionResponse=  await mongoose.connect(`${process.env.
            MONGODB_URI}/${Db_name}`)//return an response
            console.log(`mongodb connected...${connectionResponse.connection.host}`);
            
    } catch (error) {
         console.error("MOngodb connection error",error)
         process.exit(1)
    }
}
export default connectDB