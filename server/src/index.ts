import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/connectDB";
import userRoutes from "./user/user.routes";
dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT;
const corsOptions: cors.CorsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  const healthcheck: any = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

app.listen(port, () => {
  console.log(`App running on ${port} port`);
});
