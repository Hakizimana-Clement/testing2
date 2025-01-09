import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ACCESS_TOKEN_SERCET, REFRESH_TOKEN_SERCET } from "../utils/keys";

export interface TokenData {
  id: mongoose.Types.ObjectId;
  role: string;
  email?: string;
}

export const generateAccessToken = (userData: TokenData) => {
  const token = jwt.sign(userData, ACCESS_TOKEN_SERCET, { expiresIn: "20m" });
  return token;
};

export const generateRefreshToken = (userData: TokenData) => {
  const token = jwt.sign(userData, REFRESH_TOKEN_SERCET, { expiresIn: "7d" });
  return token;
};
