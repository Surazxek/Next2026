import express, { Application, type Request, type Response, type NextFunction } from "express";

const app: Application = express();


// all the routes has to be mounted
app.get('/v1', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message:"ok",
        success: "true",
        data: "ok",
        meta: null
    })

})

app.get("/", (req: Request, res: Response) => {
  res.send("<h1 >Hello World </h1>");
});

export default app;
