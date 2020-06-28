import { Router } from "express";
import authController from "../controllers/auth.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";
import passport from "passport";
import passportJWT from "../services/passport/config";
import passportGoogle from "../services/passport/passport-google";

const { signup, login, protectedRoute, socialAuth, logout } = authController;
const { authenticate } = authentication;

const authRouter = Router();

authRouter.post("/signup", catchAsync(signup));
authRouter.post("/login", catchAsync(login));
authRouter.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  })
);

// callback route for google
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  }),
  socialAuth
);

authRouter.get("/amiworthy", authenticate, catchAsync(protectedRoute));

export default authRouter;
