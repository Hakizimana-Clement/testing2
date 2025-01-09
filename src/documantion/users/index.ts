import { responses } from "../responses";

const users = {
  get_all_user: {
    tags: ["Users"],
    summary: "List of all the users",
    description: "Get all of the users",
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses,
  },
  signup: {
    tags: ["Users"],
    summary: "Create new account",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: {
                type: "string",
                description: "Enter your username",
                required: true,
                example: "John Doe",
              },
              email: {
                type: "string",
                description: "Enter your email",
                required: true,
                example: "johnDoe@gmail.com",
              },
              password: {
                type: "string",
                description: "Enter your password",
                required: true,
                example: "Hello@123!",
              },
              confirmPassword: {
                type: "string",
                description: "Confirm password",
                required: true,
                example: "Hello@123!",
              },
            },
          },
        },
      },
    },
    responses,
  },
  login: {
    tags: ["Users"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Login user",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "Email address",
                required: true,
                example: "milk@email.com",
              },
              password: {
                type: "string",
                description: "User password",
                required: true,
                example: "Hello@123!",
              },
            },
          },
        },
      },
    },
    responses,
  },
  logout: {
    tags: ["Users"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Log out a user",
    consumes: ["application/json"],
    responses,
  },
};

export const user = {
  "/api/v2/users/login": {
    post: users["login"],
  },

  "/api/v2/users/signup": {
    post: users["signup"],
  },
  "/api/v2/users/logout": {
    post: users["logout"],
  },
  "/api/v2/users": {
    get: users["get_all_user"],
  },
};
