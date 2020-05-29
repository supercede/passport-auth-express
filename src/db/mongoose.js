import mongoose from "mongoose";
import { config } from "dotenv";
import debug from "debug";

config();
const DEBUG = debug("dev");

const { NODE_ENV, DEV_DB } = process.env;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(DEV_DB, options)
  .then(() => {
    DEBUG("MongoDB is connected");
  })
  .catch((err) => {
    DEBUG("MongoDB connection unsuccessful");
    console.log(err);
  });
