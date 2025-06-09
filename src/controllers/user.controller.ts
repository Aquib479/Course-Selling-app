import { Request, Response } from "express";
import { createUser, loginUser } from "../services/user.service";

// signUp route
export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);

    res
      .status(201)
      .json({ success: true, message: "User created", data: user });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "User registration failed" });
  }
};

// signIn user
export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);

    res.status(200).json({
      success: true,
      message: "User loggedIn Successfully",
      token: token,
    });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to login user" });
  }
};
