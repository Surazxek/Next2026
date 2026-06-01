import { NextFunction, type Request, type Response } from "express";

class UserController {
  getAllUsers = (req: Request, res: Response) => {
    res.json({ data: "ok", message: "All users fetched" });
  };

  getUserByUsername = (req: Request, res: Response) => {
    const params = req.params;
    const query = req.query
    res.json({ 
      data: {
         params,
        query
      }, 
    message: "User by Username" ,
    meta: null });
  };


  getMyProfile(req: Request, res: Response, next: NextFunction){
    //function develop chcek for check profile

  }
}

export default UserController;
