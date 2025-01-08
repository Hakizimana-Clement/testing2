import express from "express";
import queryController from "../controllers/queries.controller";
import authentication from "../middlewares/auth";
import queryMiddleware from "../middlewares/query.middleware";

const queryRouter = express.Router();

queryRouter.post(
  "/",
  queryMiddleware.isQueryValid,
  queryController.createQuery
);

queryRouter.get("/", authentication.isAdmin, queryController.getAllQueries);

queryRouter.get(
  "/:id",
  authentication.isAdmin,
  queryMiddleware.isIdValid,
  queryController.getSingleQuery
);

export default queryRouter;
