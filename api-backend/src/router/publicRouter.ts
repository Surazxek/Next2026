import {Router, type Request, type Response, type NextFunction} from 'express'

const publicRouter = Router()

publicRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        data: 'ok',
        message: "Done",
        mete: null
    })

})

export default publicRouter;