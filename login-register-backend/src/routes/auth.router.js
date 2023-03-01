import { Router } from "express";
import authController, {
  loginValidation,
  registerValidation,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/authenticated.middleware.js";

const router = Router();

router.post("/register", registerValidation, authController.registerUser);
router.post("/login", loginValidation, authController.loginUser);
router.get("/account", isAuthenticated, authController.getUserSelf);

export default router;
