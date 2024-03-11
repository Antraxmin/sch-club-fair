import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI!, {});
      console.log("MongoDB 연결 성공");
    }
  } catch (error) {
    console.error("MongoDB 연결 오류:", error);
    throw new Error("MongoDB 연결 실패");
  }
};

export default connectDB;
