import express from "express";
import logger from "morgan";
import { config } from "dotenv";
import passport from 'passport';
import cookieParser from 'cookie-parser';
import errorHandler from "./middleware/errorHandler";
import { NotFoundError } from "./helpers/errors";
import authRouter from "./routes/auth.route";

config()

const app = express();

if (["development", "production"].includes(process.env.NODE_ENV)) {
  app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

passport.initialize()

app.use('/auth', authRouter);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Bonjour, Welcome, E Kaabo",
  });
});

app.all("*", (_, res) => {
  throw new NotFoundError('Resource not found on this server')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

export default app;
