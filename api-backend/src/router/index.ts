import {Router} from 'express'
import authRouter from '../app/Auth/authRouter'
import userRouter from '../app/User/userRouter'
import publicRouter from './publicRouter'
import pRouter from '../app/pracAuth/pRoute'

const mainRouter = Router()


mainRouter.use(publicRouter)
mainRouter.use('/user', userRouter)
mainRouter.post('/auth/login',authRouter )
mainRouter.use('/pAuth', pRouter)
export default mainRouter