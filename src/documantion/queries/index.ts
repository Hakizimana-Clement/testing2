import { responses } from "../responses";

const createQuery = {
  tags: ["Queries"],
  summary: "creating new query",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Enter your name",
              required: true,
              example: "John Doe",
            },
            email: {
              type: "string",
              description: "Enter your email",
              required: true,
              example: "example@gmail.com",
            },
            message: {
              type: "string",
              description: "Message",
              required: true,
              example: "Your website is works really well",
            },
          },
        },
      },
    },
  },
  responses,
};
const readQeuries = {
  all: {
    tags: ["Queries"],
    summary: "List of all the queries",
    description: "Get all of the queries",
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses,
  },
  single: {
    tags: ["Queries"],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get a single querry",
    description: "Get a single querry",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses,
  },
};

export const queries = {
  "/api/v2/queries": {
    post: createQuery,
  },
  "/api/v2/queries/": {
    get: readQeuries["all"],
  },
  "/api/v2/queries/{id}": {
    get: readQeuries["single"],
  },
};
