require("dotenv").config();
// import express
const express = require("express");
//import mongoose
const mongoose = require("mongoose");
/////////////////////////////// NEW PACKAGE ADDED ///////////
const cors = require("cors");
// import routes

// emailroutes
const emailRoutes = require("./routes/email");
// contact routes
const contactRoutes = require("./routes/contact");
// store Items routes
const StoreItemsRoutes = require("./routes/storeItems");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
////////////////////////////////////////////////////////////////

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// environment variable
const port = process.env.PORT;
const db_url = process.env.MONGO_URI;

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
// emal route
app.use("/api/emails", emailRoutes);
// review route
app.use("/api/contacts", contactRoutes);
// store Items route
app.use("/api/stores", StoreItemsRoutes);

//////////////// STRIPE ROUTE ///////////////////////////////////
app.post("/payment", async (req, res) => {
  let status, error;
  const { amount, token } = req.body;
  console.log(token);
  try {
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
      receipt_email: token.email,
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country,
        },
      },
    });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "failure";
  }

  res.json({ error, status });
});
////////////////////////////////////////////////////////////////
// connection
mongoose
  .connect(db_url)
  .then(() => {
    app.listen(port, () => {
      console.log("server is running on port " + port);
      console.log("connected to igitenge style database");
    });
  })
  .catch((error) => console.log({ error: error.message }));
