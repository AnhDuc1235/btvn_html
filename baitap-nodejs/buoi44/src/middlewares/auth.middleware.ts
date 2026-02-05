import { NextFunction, Request, Response } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.session.isLogged) {
    return res.redirect("/login")
  }
  next();
};
