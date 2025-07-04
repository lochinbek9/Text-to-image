
import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on("conntected", () =>{
        console.log("Data basa Connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB;