import express from "express";
import queryRouter from "./query.route";

const router = express.Router();

router.use("/queries", queryRouter);

export default router;
