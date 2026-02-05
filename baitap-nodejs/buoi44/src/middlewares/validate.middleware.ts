import { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validate = (schema: z.ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = await schema.safeParseAsync(req.body);

    if (!body.success) {
      body.error.issues.forEach(issue => {
        const error = issue.path[0] as string;
        req.flash(error, issue.message);
      });
      return res.redirect("/login")
    }
    req.body = body.data;
    next();
  };
};
