import mongoose, { Schema } from 'mongoose'

export interface ICourse extends Document {
    courseName: string,
    courseDesc: string,
    price: string,
}

const courseSchema: Schema = new Schema(
    {
        courseName: { type: String, required: true },
        courseDesc: { type: String, required: true },
        price: { type: String, required: true }
    }
)

export default mongoose.model<ICourse>("Course", courseSchema);