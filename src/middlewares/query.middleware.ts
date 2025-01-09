import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { sendResponse } from "../utils/http.expection";
import queriesValid from "../validations/query.validation";

const isQueryValid = (req: Request, res: Response, next: NextFunction) => {
  const error = queriesValid(req.body);
  if (error) {
    return sendResponse(
      res,
      400,
      "Bad Request",
      error.details[0].message.replace(/"/g, "")
    );
  }
  next();
};

const isIdValid = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse(
      res,
      400,
      "Bad Request",
      "The message you're looking for doesn't seem to exist"
    );
  }
  next();
};

export default { isQueryValid, isIdValid };
