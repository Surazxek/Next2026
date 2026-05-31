import {Router} from 'express'
import { pAuthController } from './PAuthController';

const pRouter = Router();

pRouter.post('/register', pAuthController.register)
pRouter.get('/users', pAuthController.getAllUsers)


export default pRouter;