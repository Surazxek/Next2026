import { Router } from "express";
import UserController from "./UserController";

const userRouter = Router();
const userCtrl = new UserController();

userRouter.get("/", userCtrl.getAllUsers);
//parameterized route
userRouter.get("/:id", userCtrl.getUserByUsername ); 

export default userRouter;
