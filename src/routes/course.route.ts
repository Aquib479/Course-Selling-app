import express from "express";
import {
  createCourse,
  getCourse,
  getSingleCourse,
  updateCourse,
} from "../controllers/course.controller";
import allowedRole from "../middlewares/course.middleware";
import { authorizeUser } from "../middlewares/user.middleware";

const router = express.Router();

router.get("/", getCourse);
router.get("/:courseId", getSingleCourse);

// route with middleware
router.post("/", authorizeUser, allowedRole("admin"), createCourse);
router.put("/:courseId", authorizeUser, allowedRole("admin"), updateCourse);

export default router;
