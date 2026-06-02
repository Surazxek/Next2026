import {Router} from 'express'
import { authController } from './AuthController'
import authCheck from '../middleware/AuthMiddleware';
import bodyValidator from '../middleware/ValidationMiddleware';
import { LoginDTO, RegisterUserDTO } from './AuthDTO';

const authRouter = Router();

authRouter.post('/register', bodyValidator(RegisterUserDTO), authController.authLogin)
authRouter.post('/login', bodyValidator(LoginDTO),  authCheck(), authController.authRegister)

export default authRouter;