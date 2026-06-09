import { type Request, type Response, type NextFunction } from "express";
import { IAuthRequest } from "../../types/Request";
import bcrypt from "bcryptjs";
import { UserModel } from "../User/Usermodel";
import jwt from "jsonwebtoken";
import { appconfig } from "../config/app-env";

class AuthController {
  async authRegister(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      data.password = bcrypt.hashSync(data.password);

      if (req.file) {
        data.image = req.file;
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

  authLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      // can login with username or email with password
      const userDetail = await UserModel.findOne({
        $or: [{ username: username }, { email: username }],
      });

      if (!userDetail) {
        throw { code: 422, message: "Account not registered yet" };
      }

      if (!bcrypt.compareSync(password, userDetail.password)) {
        throw { code: 422, message: "Credentials  dont match" };
      }

      const accessToken = jwt.sign(
        { sub: userDetail._id },
        appconfig.jwtSecret as string,
        { expiresIn: "8h" },
      );

      res.json({
        data: { accessToken },
        message: "Login successs",
        meta: null
      });
    } catch (exception) {
      next(exception);
    }
  };

  authgetMyProfile = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    res.json({
      data: req.loggedInUser,
      message: "User Profile",
      meta: null,
    });
  };
}

export const authController = new AuthController();
