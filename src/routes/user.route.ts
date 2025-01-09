import express from "express";
import userController from "../controllers/user.controller";
import authentication from "../middlewares/auth";
import userMiddleware from "../middlewares/user.middleware";

const userRouter = express.Router();

userRouter.post("/signup", userMiddleware.userValid, userController.signup);

userRouter.post("/login", userMiddleware.loginValid, userController.login);

userRouter.get("/", authentication.isAdmin, userController.get_all_user);

userRouter.post(
  "/logout",
  authentication.authenticateUser,
  userController.logout
);

export default userRouter;
