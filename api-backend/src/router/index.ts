import { Router } from "express";
import userRouter from "../app/User/userRouter";
import publicRouter from "./publicRouter";
import pRouter from "../app/pracAuth/pRoute";
import authRouter from "../app/Auth/authRoute";

const mainRouter = Router();

mainRouter.use("/pub", publicRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/auth", authRouter)
mainRouter.use("/pAuth", pRouter);

export default mainRouter;
