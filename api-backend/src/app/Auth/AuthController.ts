import { type Request, type Response, type NextFunction} from 'express';
class AuthController {
    login = (req: Request, res: Response, next: NextFunction)=>{
    res.json({
        data: "Ok",
        message: " Done",
        meta: null
    })
   }
}

export default AuthController
