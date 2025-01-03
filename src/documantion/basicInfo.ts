import { DEPLOYED_URL, PORT } from "../utils/keys";

const basicInfo = {
  openapi: "3.0.0",
  info: {
    title: "Gitenge style API",
    description: "This is swagger documenation for Gitenge style backend apis",
    version: "1.0.0",
  },

  servers: [
    {
      url: `http://localhost:${PORT}`,
      description: "Development server",
    },
    {
      url: DEPLOYED_URL,
      description: "Production server (HTTPS)",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

export default basicInfo;

// // import config from "../config/config";
// const basicInfo = {
//   openapi: "3.0.0",
//   info: {
//     title: "CharisUAS Report Management API",
//     description: "CharisUAS Report Management api docs",
//     version: "1.0.0",
//   },

//   servers: [
//     {
//       url: `http://localhost:${PORT}`,
//       description: "Development server",
//     },
//     {
//       url: DEPLOYED_URL,
//       description: "Production server (HTTPS)",
//     },
//   ],

//   components: {
//     securitySchemes: {
//       bearerAuth: {
//         type: "http",
//         scheme: "bearer",
//         bearerFormat: "JWT",
//       },
//     },
//   },
// };

// export default basicInfo;
