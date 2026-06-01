import express, { Application } from "express";
import mainRouter from "./router";
import  { errorHandler } from "./app/middleware/Error-handlerMiddleware";

const app: Application = express();

// to manipulate the incoming request
// to respond to client
// to call next middleware
// app.use((req, res, next) => {
//   console.log("I am always called");
//   next();
// });
app.use(express.json());

//router
app.use(mainRouter);

// route 404 Not-Found
app.use((req, res, next) => {
  next({
    code: 404,
    message: "Resource not Found"
  })
});





//Error handling middleware
app.use(errorHandler)

export default app;
