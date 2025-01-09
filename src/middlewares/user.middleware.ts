import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/http.expection";
import { loginValidate } from "../validations/login.validation";
import { signupValidate } from "../validations/register.validation";

const userValid = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body) {
      const { error } = signupValidate(req.body);
      if (error) {
        return sendResponse(
          res,
          400,
          "BAD REQUEST",
          error.details[0].message.replace(/"/g, "")
        );
      }
    }
    next();
  } catch (error) {
    return sendResponse(
      res,
      500,
      "Server Error",
      "Something went wrong",
      error
    );
  }
};

const loginValid = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body) {
      const { error } = loginValidate(req.body);
      if (error) {
        return sendResponse(
          res,
          400,
          "BAD REQUEST",
          error.details[0].message.replace(/"/g, "")
        );
      }
    }
    next();
  } catch (error) {
    return sendResponse(
      res,
      500,
      "Server Error",
      "Something went wrong",
      error
    );
  }
};
export default { userValid, loginValid };
