import { type Response, type NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { appconfig } from "../config/app-env";
import { UserModel } from "../User/Usermodel";
import { IImage } from "../../types/User";
import { IAuthRequest } from "../../types/Request";

const authCheck = () => {
  return async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let token = req.headers.authorization;

      if (!token) {
        throw {
          code: 401,
          message: "Access token not passed",
        };
      }

      token = token.replace("Bearer ", "");

      console.log("TOKEN:", token);

      const data = jwt.verify(
        token,
        appconfig.jwtSecret as string
      ) as JwtPayload;

      const userExists = await UserModel.findOne({
        _id: data.sub,
      });

      if (!userExists) {
        throw {
          code: 422,
          message: "Your account has been deleted",
        };
      }

      req.loggedInUser = {
        name: userExists.name,
        email: userExists.email,
        username: userExists.username,
        phone: userExists.phone as string,
        address: userExists.address as string,
        role: userExists.role,
        image: userExists.image as IImage,
      };

      next();

    } catch (exception) {
      next(exception);
    }
  };
};

export default authCheck;