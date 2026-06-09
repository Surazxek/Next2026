import { type Response, type NextFunction } from "express";
import { IAuthRequest } from "../../types/Request";

class CategoryController{
    async storeCategory (req: IAuthRequest, res: Response, next: NextFunction){
        try {
            
        } catch (exception) {
            next(exception)
        }
    }
}
const categoryCtrl = new CategoryController()
export default categoryCtrl