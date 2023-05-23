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

const app = express();

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
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// routes
// emal route
app.use("/api/emails", emailRoutes);
// review route
app.use("/api/contacts", contactRoutes);
// store Items route
app.use("/api/stores", StoreItemsRoutes);

//////////////// NEW ONE STRIPE ROUTE ///////////////////////////////////
app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
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
