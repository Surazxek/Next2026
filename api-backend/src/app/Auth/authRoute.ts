import { Router } from "express";
import { authController } from "./authController";
import authCheck from "../middleware/AuthMiddleware";
import bodyValidator from "../middleware/ValidationMiddleware";
import { LoginDTO, RegisterUserDTO } from "./AuthDTO";
import uploader from "../middleware/UploaderMiddleware";

const authRouter = Router();

authRouter.post(
  "/register",
  uploader().single("image"),
  bodyValidator(RegisterUserDTO),
  authController.authRegister,
);

authRouter.post(
  "/login",
  bodyValidator(LoginDTO),
  authController.authLogin,
);


authRouter.get('/me', authCheck(), authController.authgetMyProfile)

export default authRouter;
