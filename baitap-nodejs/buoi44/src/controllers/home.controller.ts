import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const homeController = {
  index: (req: Request, res: Response) => {


    if (!req.session.isLogged) {
      return res.redirect("/login")
    }

    res.render("home", {
      name: req.session.user?.name,
    });
  },
};


