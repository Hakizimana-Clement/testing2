import cors from "cors";
import { app } from "./app";
import { mongoConnect, mongoDisconnect } from "./services/mongo";
import { PORT } from "./utils/keys";

const startServer = async () => {
  try {
    await mongoConnect();
    app.listen(PORT, () => {
      app.use(cors());
      console.log(`Server has started on port ${PORT}`);
    });
  } catch (error) {
    await mongoDisconnect();
  }
};

startServer();
