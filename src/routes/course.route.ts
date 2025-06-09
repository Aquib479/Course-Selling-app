import express from 'express'
import { createCourse, getCourse, getSingleCourse, updateCourse } from '../controllers/course.controller';

const router = express.Router();

router.get('/', getCourse);
router.get('/:courseId', getSingleCourse);

// route with middleware
router.post('/', createCourse); // middleware to be added
router.put('/:courseId', updateCourse); // middleware to be added