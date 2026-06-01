import {type Request, type Response, type NextFunction} from "express";

const authCheck = () =>{
    return (req: Request, res: Response, next: NextFunction) => {
    //auth check
    //success => loggedInUser => next()
    console.log('iam authcheck middleware')
    next()
    
}
}

export default authCheck