import express from "express";
import cors from "cors";
import morgan from "morgan";
import Std_router from './Routes/studentroute.js';
import Coordinator_Router from "./Routes/coordinatorroute.js";

const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/app/students', Std_router );
app.use('/app/coordinator',Coordinator_Router);

export default app;