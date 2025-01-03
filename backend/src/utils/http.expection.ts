import { Response } from "express";

export class HttpExpection {
  public status: string;
  public message: string;

  constructor(status: string, message: string) {
    this.status = status;
    this.message = message;
  }

  response(): { status: string; message: string } {
    return {
      status: this.status,
      message: this.message,
    };
  }
}

export const sendResponse = (
  res: Response,
  statusNumber: number,
  status: string,
  message: string,
  data?: any
) => {
  res
    .status(statusNumber)
    .json({ ...new HttpExpection(status.toUpperCase(), message), data });
};
