import express from "express";
import { signInUser, registerUser } from "../controllers/user.controller";

const router = express.Router();

// user routes
router.post("/register", registerUser);
router.post("/login", signInUser);

export default router;
