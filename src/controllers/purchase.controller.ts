import { Request, Response } from "express";
import Course from "../models/course.model";
import User from "../models/user.model";
import {
  getpurchasedCourses,
  purchaseCourses,
} from "../services/purchase.service";

export const purchaseCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    // just for now pass the paymentStatus, amountPaid from body manually
    const { paymentStatus, amountPaid } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({ message: "course not found" });
    }
    const user = await User.findById((req as any).user.userId);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }

    // const alreadyPurchased = user?.purchasedCourses.some((p: any) =>
    //   p.courseId.equals(course?._id)
    // );
    // if (alreadyPurchased) {
    //   res.status(400).send("Course already purchased");
    // }

    await purchaseCourses(
      (course as any)._id,
      (user as any)._id,
      paymentStatus,
      amountPaid
    );

    res.status(200).json({
      success: true,
      message: "You have successfully purchased the course",
    });
  } catch (error) {
    res.status(500);
  }
};

export const getpurchasedCourse = async (req: Request, res: Response) => {
  const purchasedCourses = await getpurchasedCourses();

  res.status(200).json({
    success: true,
    data: purchasedCourses,
  });
};
