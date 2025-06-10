import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import userRoute from "./routes/user.route";
import courseRoute from "./routes/course.route";
import purchaseRoute from "./routes/purchase.route";
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
app.use("/auth", userRoute);
app.use("/course", courseRoute);
app.use("/courses", purchaseRoute);

export default app;
