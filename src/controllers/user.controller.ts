import * as argon2 from "argon2";
import { Request, Response } from "express";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../helpers/security.helpers";
import User from "../models/user.model";
import { sendResponse } from "../utils/http.expection";
import { DEV_MODE } from "../utils/keys";

const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      return sendResponse(res, 409, "CONFLICT", "Email already in use");
    }

    const hashPassword = await argon2.hash(password);

    await User.create({
      username,
      email,
      password: hashPassword,
      role: "user",
    });

    return sendResponse(res, 200, "SUCCESS", "Account created successfully");
  } catch (error) {
    return sendResponse(
      res,
      500,
      "SERVER ERROR",
      "Something went wrong",
      (error as Error).message
    );
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return sendResponse(res, 401, "UNAUTHORIZED", "Wrong credential");
    }

    const { role } = user;

    if (!(await argon2.verify(user.password as string, password))) {
      return sendResponse(res, 401, "UNAUTHORIZED", "Wrong credential");
    } else {
      const accessToken = generateAccessToken({ id: user._id, role });
      const refreshToken = generateRefreshToken({ id: user._id, role });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: DEV_MODE === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 1000,
      });

      return sendResponse(res, 200, "SUCCESS", "Login successfully", {
        accessToken,
      });
    }
  } catch (error) {
    sendResponse(
      res,
      500,
      "SERVER ERROR",
      "Something went wrong",
      (error as Error).message
    );
  }
};

const get_all_user = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find({}).sort({ createdAt: -1 });

    return sendResponse(
      res,
      200,
      "SUCCESS",
      "Fetched all user successfully",
      allUsers
    );
  } catch (error) {
    return sendResponse(
      res,
      500,
      "SERVER ERROR",
      "Something went wrong",
      (error as Error).message
    );
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("refreshToken", {
      httpOnly: true,
      secure: DEV_MODE === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 1000,
    });

    return sendResponse(res, 200, "SUCCESS", "Logged out successfully");
  } catch (error) {
    sendResponse(
      res,
      500,
      "SERVER ERROR",
      "Something went wrong",
      (error as Error).message
    );
  }
};
export default { signup, login, get_all_user, logout };
