import express from "express";
import queryController from "../controllers/queries.controller";
import queryMiddleware from "../middlewares/query.middleware";

const queryRouter = express.Router();

queryRouter.post(
  "/",
  queryMiddleware.isQueryValid,
  queryController.createQuery
);

queryRouter.get("/", queryController.getAllQueries);

queryRouter.get(
  "/:id",
  queryMiddleware.isIdValid,
  queryController.getSingleQuery
);

export default queryRouter;
