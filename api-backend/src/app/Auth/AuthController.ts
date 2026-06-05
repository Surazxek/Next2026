import { type Request, type Response, type NextFunction } from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "../User/Usermodel";

class AuthController {
  async authRegister(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      
      data.password = bcrypt.hashSync(data.password);

      if(req.file) {
        data.image = req.file
      }

      const user = new UserModel(data);
      await user.save();

      res.json({
        data: data,
        message: "Done",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  }

  authLogin = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    res.json({
      data: data,
      message: "Done",
      meta: null,
    });
  };
}

export const authController = new AuthController();
