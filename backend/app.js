import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// App Middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Routes Imports
import todoRouter from "./routes/todos.routes.js";
app.use("/api/v1/todos", todoRouter);
export { app };
