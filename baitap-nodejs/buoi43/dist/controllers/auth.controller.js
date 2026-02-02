"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.authController = {
    register: async (req, res) => {
        try {
            const register = auth_service_1.authService.register(req.body);
            res.status(201).json({
                success: true,
                message: "success",
                data: register,
            });
        }
        catch (error) {
            res.status(409).json({
                error: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            const login = auth_service_1.authService.login(req.body);
            res.status(200).json({
                success: true,
                message: "success",
                data: login,
            });
        }
        catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }
};
//# sourceMappingURL=auth.controller.js.map