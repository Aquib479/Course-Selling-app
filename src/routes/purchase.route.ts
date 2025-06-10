import express from "express";
import { authorizeUser } from "../middlewares/user.middleware";
import allowedRole from "../middlewares/course.middleware";
import {
  getpurchasedCourse,
  purchaseCourse,
} from "../controllers/purchase.controller";

const router = express.Router();

router.post(
  "/:courseId/purchase",
  authorizeUser,
  allowedRole("user"),
  purchaseCourse
);
router.get("/purchase", authorizeUser, getpurchasedCourse); // add purhcase user confirmation middleware

export default router;
