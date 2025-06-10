import { NextFunction, Request, Response } from "express";

export const allowedRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = (req as any).user.role;
    if (!userRole) {
      res.status(401).json({ message: "Unauthorized" });
    }

    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(401).json({ message: "User not allowed" });
    }
  };
};

export default allowedRole;
