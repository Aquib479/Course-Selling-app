import mongoose from "mongoose";

export const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/course-selling-app");
  } catch (error) {
    // handleError(error);
    console.log(error);
  }
};
