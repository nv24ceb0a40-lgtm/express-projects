import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db is connected");
    } catch (err) {
        console.log("db connection failed", err.message);
    }
}

export default connection;