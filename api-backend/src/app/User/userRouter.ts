import { Router } from "express";
import UserController from "./UserController";
import authCheck from "../middleware/AuthMiddleware";

const userRouter = Router();
const userCtrl = new UserController();

userRouter.get("/", userCtrl.getAllUsers);
userRouter.get("/:username", userCtrl.getUserByUsername);

//private route/protectedRoute

userRouter.get("/me", authCheck, userCtrl.getMyProfile);

export default userRouter;
