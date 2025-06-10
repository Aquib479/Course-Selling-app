import mongoose, { Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  content: IContent[];
}

export interface IContent {
  id: string;
  title: string;
  videoUrl: string;
  duration: string;
  isFree: boolean;
}

const courseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    content: [
      {
        title: { type: String, required: true },
        videoUrl: { type: String, required: true },
        duration: { type: String, required: true },
        isFree: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ICourse>("Course", courseSchema);
