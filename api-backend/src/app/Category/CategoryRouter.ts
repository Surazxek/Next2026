import { Router } from "express";
import authCheck from "../middleware/AuthMiddleware";
import uploader from "../middleware/UploaderMiddleware";
import bodyValidator from "../middleware/ValidationMiddleware";
import CategoryDTO from "./CategoryDTO";
import categoryCtrl from "./CategoryController";

const catRouter = Router();

catRouter.post(
  "/",
  authCheck(),
  uploader().single("image"),
  bodyValidator(CategoryDTO),
  categoryCtrl.storeCategory,
);

export default catRouter;
