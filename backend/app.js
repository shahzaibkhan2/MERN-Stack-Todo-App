import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// App Middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes Imports
import todoRouter from "./routes/todos.routes.js";
app.use("/api/v1/todos", todoRouter);
export { app };
