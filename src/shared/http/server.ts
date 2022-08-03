import  express, { NextFunction, Request, Response }  from "express";
import cors from "cors";
import routes from "./routes/index"
import AppError from "@shared/errors/apperror";
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err:Error,req : Request, res : Response,next:NextFunction) => {
  if(err instanceof AppError){
    res.status(err.StatusCode).json({
      status: "error!",
      Data: err.Data,
    })
  }
  return res.status(500).json({
    status: "error!",
    Data: "Internal Server Error",
  })
}

);


app.listen(3333, () =>{
  console.log("Server is running on port 3333");
});
