import express from "express"
import { validate } from "../middlewares/auth.middleware"
import { loginRequest, RegisterRequest } from "../validators/auth.schema"
import { authController } from "../controllers/auth.controller"
import { homeController } from "../controllers/home.controller"

const router = express.Router()
router.get("/", homeController.index)
router.post("/api/auth/register", validate(RegisterRequest), authController.register)
router.post("/api/auth/login", validate(loginRequest), authController.login)
export default router;