import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const register = authService.register(req.body);
            res.status(201).json({
                success: true,
                message: "success",
                data: register,
            })
        } catch (error: any) {
            res.status(409).json({
                error: error.message
            })
        }
    },
    login: async (req: Request, res: Response) => {
        try {
            const login = authService.login(req.body);
            res.status(200).json({
                success: true,
                message: "success",
                data: login,
            })
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}
