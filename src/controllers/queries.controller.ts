import { Request, Response } from "express";
import queryModel from "../models/query.model";
import { sendResponse } from "../utils/http.expection";

const createQuery = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const newQuery = await queryModel.create({ name, email, message });

    return sendResponse(
      res,
      200,
      "Success",
      "Message sent successfully",
      newQuery
    );
  } catch (error) {
    return sendResponse(
      res,
      500,
      "Server Error",
      "something went wrong",
      error as Error
    );
  }
};

const getAllQueries = async (req: Request, res: Response) => {
  try {
    const queries = await queryModel.find({}).sort({ createdAt: -1 });
    return sendResponse(
      res,
      200,
      "Success",
      "Queries fetched successfully",
      queries
    );
  } catch (error: unknown) {
    return sendResponse(
      res,
      500,
      "Server Error",
      "something went wrong",
      error as Error
    );
  }
};

const getSingleQuery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const query = await queryModel.findById(id);

    if (!query) {
      return sendResponse(
        res,
        404,
        "Not Found",
        "Uh-oh! The message you're looking for doesn't seem to exist."
      );
    }

    return sendResponse(
      res,
      200,
      "Success",
      "Query fetched successfully",
      query
    );
  } catch (error: unknown) {
    return sendResponse(
      res,
      500,
      "Server Error",
      "something went wrong",
      error as Error
    );
  }
};

export default { getAllQueries, getSingleQuery, createQuery };
