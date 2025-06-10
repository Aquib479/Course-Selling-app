import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

interface UserPayload {
  userId: string;
  email: string;
  role: string;
}

export const authorizeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader || "";
  if (!token) res.status(401).json({ message: "Unauthorized" });

  try {
    const decode = jwt.verify(token, JWT_SECRET) as unknown as UserPayload;
    (req as any).user = decode;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
