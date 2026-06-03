import { type Request, type Response, type NextFunction } from "express";

class AuthController{
     authRegister = (req: Request, res: Response, next: NextFunction)=>{
        const data = req.body
        const file = req.file
        const files = req. files


          res.json({
      data: data,
      file, files,
      message: " Done",
      meta: null,
    });

}

    authLogin = (req: Request, res: Response, next: NextFunction)=>{
        const data = req.body
          res.json({
      data: data,
      message: " Done",
      meta: null,
    })
}

}
export const authController = new AuthController()