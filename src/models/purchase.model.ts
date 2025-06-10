import mongoose, { Document, Schema } from "mongoose";
import { ICourse } from "./course.model";
import { IUser } from "./user.model";

export interface IPurchase extends Document {
  course: ICourse;
  user: IUser;
  paymentStatus: string;
  amountPaid: number;
}

const purchaseSchema: Schema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  amountPaid: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IPurchase>("Purchase", purchaseSchema);
