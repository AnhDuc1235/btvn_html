import express from "express";
import { homeController } from "../controllers/home.controller";
import { validate } from "../middlewares/validate.middleware";
import { userSchema } from "../validators/user.validator";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authController } from "../controllers/auth.controller";
import { loginForm } from "../controllers/loginForm";
const router = express.Router();
router.get("/", authMiddleware, homeController.index);
router.get("/login", loginForm.loginForm);
router.post("/login", validate(userSchema), authController.login);
router.get("/logout", authController.logout);


export default router;
