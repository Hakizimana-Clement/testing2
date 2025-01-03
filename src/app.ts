import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import docs from "./documantion";
import router from "./routes";

const app = express();
const swaggerOptions = {
  validatorUrl: null,
  oauth: {
    appName: "Gitenge Style backend",
  },
};

app.use(express.json());
app.use(
  "/api/v2/docs",
  swaggerUi.serve,
  swaggerUi.setup(docs, { swaggerOptions: swaggerOptions })
);
app.use("/api/v2/", router);

app.get("/api/v2", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome To Gitenge style backend!" });
});

export { app };
