import Course from "../models/course.model";

interface courseBody {
    courseName: string,
    courseDesc: string,
    price: string
}

export const getAllCourse = async () => {
    const course = await Course.find();
    if (!course) throw new Error("error finding course");

    return course;
}

export const getCourseById = async (courseId: string) => {
    const course = await Course.findById(courseId);
    if (!course) throw new Error("course not found");

    return course
}

export const createCourses = async (course: courseBody) => {
    const { courseName, courseDesc, price } = course;
    const courses = await Course.create({ courseName, courseDesc, price });
    return courses;
}

export const updateSelectedCourse = async (courseId: string, updateRequestBody: any) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { $set: updateRequestBody },
        { new: true }
    );

    if (!course) {
        throw new Error("Course not found");
    }
    return course;
}