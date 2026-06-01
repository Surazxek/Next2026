import { type Request, type Response, type NextFunction } from "express";
import { pAuthServices } from "../pracAuth/pAuthServices";

class PAuthController {
  register = (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = pAuthServices.register(req.body);

      return res.status(201).json({
        success: true,
        data: user,
        message: "User Registered sucessfully",
      });
    } catch (error) {
      return res.status(409).json({
        success: false,
        message: "User is already registered",
        data: null,
      });
    }
  };

  getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    const users = pAuthServices.getAllUsers();

    return res.json({
      success: true,
      data: users,
      message: "All Users",
    });
  };
}

export const pAuthController = new PAuthController();
