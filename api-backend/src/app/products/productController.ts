import { type Request, type Response, type NextFunction } from "express";

class ProductController {
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
     res.json({
        data: [],
        message: "All categories",
        meta: null
     })

    }
}

const productCtrl = new ProductController()
export default productCtrl