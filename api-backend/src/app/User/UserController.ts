import {type Request, type Response, type NextFunction} from 'express'
class UserController {
    getAllUsers = (req: Request, res: Response, next: NextFunction)=>{
        res.json({
            data: 'ok',
            message: "Done",
            mete: null
        })
    
    }
}

export default UserController