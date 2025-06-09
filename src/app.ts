import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import userRoute from "./routes/user.route";
import { connectToMongo } from "./config/db";

const app = express();
app.use(express.json());

// connect database
connectToMongo();

// middleware
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

// routes
app.use("/api", userRoute);

export default app;
