import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

interface UserPayload {
    userId: string,
    email: string
}

export const authorizeUser = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const token = authHeader?.split(" ")[1];

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        (req as any).user = decode;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" })
    }
} 