import Purchase from "../models/purchase.model";

export const purchaseCourses = async (
  course: string,
  user: string,
  paymentStatus: string,
  amountPaid: number
) => {
  const purchasedCourse = await Purchase.create({
    course,
    user,
    paymentStatus,
    amountPaid,
  });
  console.log(purchasedCourse);
  return purchasedCourse;
};

export const getpurchasedCourses = async () => {
  const purchasedCourses = await Purchase.find();
  return purchasedCourses;
};
