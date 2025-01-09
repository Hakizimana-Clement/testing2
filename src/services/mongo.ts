import "dotenv/config";
import mongoose from "mongoose";
import { MONGO_URL } from "../utils/keys";

const databaseUrl = MONGO_URL;

mongoose.connection.on("open", () => {
  console.info(`Igitenge Ecommerce database Connected successfully`);
});

mongoose.connection.on("close", () => {
  console.info(`Something went wrong on database`);
});

const mongoConnect = async () => {
  await mongoose.connect(databaseUrl);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

export { mongoConnect, mongoDisconnect };
