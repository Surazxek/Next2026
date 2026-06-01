import {Router} from 'express'
import { pAuthController } from './PAuthController';
import authCheck from '../middleware/AuthMiddleware';

const pRouter = Router();

pRouter.post('/register', authCheck(), pAuthController.register)
pRouter.get('/users', pAuthController.getAllUsers)


export default pRouter;