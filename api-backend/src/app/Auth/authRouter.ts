import { Router } from "express";
import AuthController from "./AuthController";
const authRouter = Router();
const authCtrl = new AuthController();

authRouter.post("/login", authCtrl.login);
authRouter.post("/register", authCtrl.register);

export default authRouter;
