import express, { Application} from "express";
import mainRouter from "./router";


const app: Application = express();

app.use(express.json()); 

//router
app.use(mainRouter)



export default app;
