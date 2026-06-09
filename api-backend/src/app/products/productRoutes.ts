import { Router } from "express";
import productCtrl from "./productController";


const productRouter = Router();

productRouter.get("/categories", productCtrl.getAllCategories)

export default productRouter