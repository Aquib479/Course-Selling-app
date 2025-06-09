import mongoose from 'mongoose'

export interface ICourse extends Document {
    courseName:string,
    courseDesc:string,
    price:string,
}