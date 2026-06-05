import {
  type Request,
  type Response,
  type NextFunction,
  response,
} from "express";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction)=> {
  console.error(error)
  let code = error.code || 500;
  let detail = error.detail || error.details || null;
  let msg = error.message || "Internal Server Error";


  //mongoTODO error
  if (error.name === "MongoServerError") {
    code= 400;
    detail = {}
    if(+error.code === 11000){
      //unique handling failed
      Object.keys(error["keyPattern"]).map((key) =>{
        detail[key] = `${key} should be unique`
      })

    }
      
      
  }
  res.status(code).json({
    error: detail,
    message: msg,
    meta: null,
  });
};

export default errorHandler;

// class CustomError extends Error {
//     statusCode :number;
//     status:'error' | 'fail'
//     success:boolean;

//     constructor(message:string,statusCode:number){
//         super(message);
//         this.statusCode = statusCode
//         this.status = statusCode >=400 && statusCode < 500 ? 'fail' : 'error'
//         this.success = false
//         Error.captureStackTrace(this,CustomError)
//     }
// }

// export const errorHandler = (error:any,req:Request,res:Response,next:NextFunction) =>{

//     const statusCode = error ?.statusCode || 500
//     const success = error ?.success || false
//     const status = error ?.status || 'error'
//     const message = error?.message || 'Internal Server Error'

//     res.status(statusCode).json({
//         message,
//         success,
//         status,
//         meta:null
//     })

// }

// export default CustomError
