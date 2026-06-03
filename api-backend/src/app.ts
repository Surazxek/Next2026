import express, { Application } from "express";
import mainRouter from "./router";
import errorHandler from "./app/middleware/Error-handlerMiddleware";
import path from "path";

const app: Application = express();

// Data parsing middleware
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({limit: "5mb"}))

//public dir folder
app.use('/assets', express.static(path.join(process.cwd(), "public/uploads/")));

//router
app.use(mainRouter);

// route 404 Not-Found
app.use((req, res, next) => {
  next({
    code: 404,
    message: "Resource not Found",
  });
});

//Error handling middleware
app.use(errorHandler);

export default app;
