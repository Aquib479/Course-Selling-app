import { Request, Response } from "express";
import { createCourses, getAllCourse, getCourseById, updateSelectedCourse } from "../services/course.service"

export const getCourse = async (req: Request, res: Response) => {
    try {
        const allCourse = await getAllCourse();
        res.status(200).json({ success: true, data: allCourse });

    } catch (error) {
        res.status(404).json({ message: "No course found" });
    }
}

export const getSingleCourse = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const singleCourse = await getCourseById(courseId);

        res.status(200).json({ success: true, data: singleCourse })
    } catch (error) {
        res.status(404).json({ message: "No such course" })
    }
}

export const createCourse = async (req: Request, res: Response) => {
    try {
        const courses = await createCourses(req.body)

        res.status(201).json({ success: true, message: "New course created successfully", data: courses });
    } catch (error) {
        res.status(500).json({ message: "Error while creating course" })
    }
}


export const updateCourse = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;

        const updatedCourse = await updateSelectedCourse(courseId, req.body);

        res.status(200).json({
            message: "Course updated successfully",
            data: updatedCourse,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Error while updating the course",
        });
    }
};
