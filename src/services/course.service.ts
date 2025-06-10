import Course, { IContent } from "../models/course.model";

interface courseBody {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  content: IContent[];
}

export const getAllCourse = async () => {
  const course = await Course.find();
  if (!course) throw new Error("error finding course");

  return course;
};

export const getCourseById = async (courseId: string) => {
  const course = await Course.findById(courseId);
  if (!course) throw new Error("course not found");

  return course;
};

export const createCourses = async (course: courseBody) => {
  const { title, description, price, category, content } = course;
  const courses = await Course.create({
    title,
    description,
    price,
    category,
    content,
  });
  return courses;
};

export const updateSelectedCourse = async (
  courseId: string,
  updateRequestBody: any
) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  // update top level fields
  if (updateRequestBody.title) course.title = updateRequestBody.title;
  if (updateRequestBody.description)
    course.description = updateRequestBody.description;
  if (updateRequestBody.price) course.price = updateRequestBody.price;
  if (updateRequestBody.category) course.category = updateRequestBody.category;

  // update nested fields
  if (updateRequestBody.content && Array.isArray(updateRequestBody.content)) {
    for (const updatedItem of updateRequestBody.content) {
      const itemIndex = course.content.findIndex(
        (item) => item.id === updatedItem._id
      );

      if (itemIndex !== -1) {
        if (updatedItem.title !== undefined) {
          course.content[itemIndex].title = updatedItem.title;
        }
        if (updatedItem.videoUrl !== undefined) {
          course.content[itemIndex].videoUrl = updatedItem.videoUrl;
        }
        if (updatedItem.duration !== undefined) {
          course.content[itemIndex].duration = updatedItem.duration;
        }
        if (updatedItem.isFree !== undefined) {
          course.content[itemIndex].isFree = updatedItem.isFree;
        }
      }
    }
  }
  await course.save();
  return course;
};
