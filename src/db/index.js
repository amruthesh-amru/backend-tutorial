import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MngoDB Connected !! DB Host ${connectionResponse.connection.host}`);

    } catch (error) {
        console.log("DB error", error);
        process.exit(1)
    }
}
export default connectDB