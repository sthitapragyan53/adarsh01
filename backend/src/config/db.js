import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected 😎😎😎😎😎  sthita yeeeeeee");
  } catch (error) {
    console.error(" 😔 MongoDB connection  nahi hua sthitaaa 😭😭😭😭😭:", error);
    process.exit(1);
  }
};

export default connectDB;
