import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
    login: (req: Request, res: Response) => {
        const login = authService.login(req.body);

        if (!login) {
            req.flash("failed", "Email hoặc password không đúng");
            return res.redirect("/login")
        }
        req.session.isLogged = true
        req.session.user = login
        return res.redirect("/")
    },
    logout(req: Request, res: Response) {
        req.session.destroy((err) => {
            res.redirect("/")
        })
    }
}