import express from "express";
import queryRouter from "./query.route";
import userRouter from "./user.route";

const router = express.Router();

router.use("/queries", queryRouter);
router.use("/users", userRouter);

export default router;
