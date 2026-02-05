import { Request, Response } from "express";

export const loginForm = {
  loginForm: async (req: Request, res: Response) => {
    res.render("login", {
      failed: req.flash("failed")[0],
      emailError: req.flash("email")[0],
      passwordError: req.flash("password")[0]
    })
  },
};
