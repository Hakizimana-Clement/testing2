import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { generateAccessToken } from "../helpers/security.helpers";
import { sendResponse } from "../utils/http.expection";
import { ACCESS_TOKEN_SERCET, REFRESH_TOKEN_SERCET } from "../utils/keys";

export interface ExpandedRequest extends Request {
  user?: JwtPayload;
}

const authenticateUser = async (
  req: ExpandedRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken) {
    return sendResponse(res, 401, "UNAUTHORIZED", "Please login to continue");
  }

  try {
    const verifiedToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SERCET
    ) as JwtPayload;

    req.user = verifiedToken;

    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError && refreshToken) {
      try {
        const verifiedRefreshToken = jwt.verify(
          refreshToken,
          REFRESH_TOKEN_SERCET
        ) as JwtPayload;

        const newAccessToken = generateAccessToken({
          id: verifiedRefreshToken.id,
          role: verifiedRefreshToken.role,
        });

        res.setHeader("Authorization", `Bearer ${newAccessToken}`);

        req.user = jwt.decode(newAccessToken) as JwtPayload;
        return next();
      } catch (refreshError) {
        if (error instanceof jwt.JsonWebTokenError) {
          return sendResponse(res, 401, "UNAUTHORIZED", "Invalid token!");
        } else {
          return sendResponse(
            res,
            500,
            "SERVER_ERROR",
            "Something went wrong!"
          );
        }
      }
    }
  }
};

const isAdmin = async (
  req: ExpandedRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken) {
    return sendResponse(res, 401, "UNAUTHORIZED", "Please login to continue");
  }

  try {
    const verifiedToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SERCET
    ) as JwtPayload;

    const { role } = verifiedToken;

    if (role && role !== "ADMIN") {
      return sendResponse(
        res,
        403,
        "FORBIDDEN",
        "You're not allowed to access this route!"
      );
    }
    req.user = verifiedToken;
    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError && refreshToken) {
      try {
        const verifiedRefreshToken = jwt.verify(
          refreshToken,
          REFRESH_TOKEN_SERCET
        ) as JwtPayload;

        const newAccessToken = generateAccessToken({
          id: verifiedRefreshToken.id,
          role: verifiedRefreshToken.role,
        });

        res.setHeader("Authorization", `Bearer ${newAccessToken}`);

        req.user = jwt.decode(newAccessToken) as JwtPayload;
        return next();
      } catch (refreshError) {
        if (error instanceof jwt.JsonWebTokenError) {
          return sendResponse(res, 401, "UNAUTHORIZED", "Invalid token!");
        } else {
          return sendResponse(
            res,
            500,
            "SERVER_ERROR",
            "Something went wrong!"
          );
        }
      }
    }
  }
};

const isBuyer = async (
  req: ExpandedRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken) {
    return sendResponse(res, 401, "UNAUTHORIZED", "Please login to continue");
  }

  try {
    const verifiedToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SERCET
    ) as JwtPayload;

    const { role } = verifiedToken;

    if (role && role !== "USER") {
      return sendResponse(
        res,
        403,
        "FORBIDDEN",
        "You're not allowed to access this route!"
      );
    }
    req.user = verifiedToken;
    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError && refreshToken) {
      try {
        const verifiedRefreshToken = jwt.verify(
          refreshToken,
          REFRESH_TOKEN_SERCET
        ) as JwtPayload;

        const newAccessToken = generateAccessToken({
          id: verifiedRefreshToken.id,
          role: verifiedRefreshToken.role,
        });

        res.setHeader("Authorization", `Bearer ${newAccessToken}`);

        req.user = jwt.decode(newAccessToken) as JwtPayload;
        return next();
      } catch (refreshError) {
        if (error instanceof jwt.JsonWebTokenError) {
          return sendResponse(res, 401, "UNAUTHORIZED", "Invalid token!");
        } else {
          return sendResponse(
            res,
            500,
            "SERVER_ERROR",
            "Something went wrong!"
          );
        }
      }
    }
  }
};

export default { authenticateUser, isAdmin, isBuyer };
