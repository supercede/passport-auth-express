import { config } from "dotenv";
import debug from "debug";

config();

const DEBUG = debug("dev");

export default (err, request, response, next) => {
  const isProduction = process.env.NODE_ENV === "production";
  let errorMessage = {};

  if (response.headersSent) {
    return next(err);
  }

  if (!isProduction) {
    DEBUG(err.stack);
    errorMessage = err;
  }

  return response.status(err.statusCode || 500).json({
    status: "error",
    error: {
      message: err.message,
      ...(err.errors && { errors: err.errors }),
      ...(!isProduction && { trace: errorMessage }),
    },
  });
};
