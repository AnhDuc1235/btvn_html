"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_schema_1 = require("../validators/auth.schema");
const auth_controller_1 = require("../controllers/auth.controller");
const home_controller_1 = require("../controllers/home.controller");
const router = express_1.default.Router();
router.get("/", home_controller_1.homeController.index);
router.post("/api/auth/register", (0, auth_middleware_1.validate)(auth_schema_1.RegisterRequest), auth_controller_1.authController.register);
router.post("/api/auth/login", (0, auth_middleware_1.validate)(auth_schema_1.loginRequest), auth_controller_1.authController.login);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map