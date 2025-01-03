require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// import routes
// emailroutes
const emailRoutes = require("./routes/email");
// contact routes
const contactRoutes = require("./routes/contact");
// store Items routes
const StoreItemsRoutes = require("./routes/storeItems");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
////////////////////////////////////////////////////////////////

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/api/payment/cart1", async (req, res) => {
  let status, error;

  const { token, amount, answer } = req.body;

  console.log(answer);
  try {
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "failure";
  }
  res.json({ error, status });
});

// ////////////////////////storeItem ///////////////////////////////////
// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Igitenge shirt" }],
//   [2, { priceInCents: 10000, name: "Igitenge suit" }],
// ]);

////////////////////////// repeated /////////////////////

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),

      success_url: `${process.env.SERVER_URL}`,
      cancel_url: `${process.env.SERVER_URL}`,
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
////////////////////////// TRAILER WITH ID /////////////////////
// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     // this object which have info about checkout
//     const session = await stripe.checkout.sessions.create({
//       // payment to accept
//       // payment_method_types: ["card"],
//       // mode like one payment or subscription mode
//       mode: "payment",
//       // is array of items that we're  sending down that we want to purchase like name,price of products.
//       /*
//       step 1. use req.body.items form frontend
//       >> res.body.items
//       step 2. add map for mapping through all items
//       >> res.body.items.map
//       step 3. just return item with new in  bject  type
//       >> res.body.items.map((item)=>{

//       })
//       step 4. create const for storeItem which get id from frontend
//       >> const storeItem = storeItems.get(item.id)
//       step 5. after to get id let's return object which is collect format for stripe.
//       5.1.first data is price_data and
//       price_data:{
//         currency:"usd",
//         product_data:{
//           name:storeItem.name
//         }
//       }
//       5.2. quantity
//       the quantity is going to be item.quantity
//         */
//       //     line_items: [
//       //       {
//       //         price_data: {
//       //           currency: "usd",
//       //           product_data: {
//       //             name: "Igitenge shirt",
//       //           },
//       //           unit_amount: 10000,
//       //         },
//       //         quantity: 1,
//       //       },
//       //     ],

//       line_items: req.body.items.map((item) => {
//         const storeItem = storeItems.get(item.id);
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       // if payment success
//       success_url: "http://localhost:3000/cart-1/checkout/payment/success",
//       // if payment failed
//       cancel_url: "http://localhost:3000/cart-1/checkout/payment/success",
//     });
//     // this return the session to frontend server
//     res.json({ url: session.url });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
//////////////////////////TRAILER /////////////////////////////
// app.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: "Igitenge shirt",
//           },
//           unit_amount: 10000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: "http://localhost:3000/cart-2/checkout/payment/success",
//     cancel_url: "http://localhost:3000/cart-2/checkout/payment/failed",
//   });

//   res.redirect(303, session.url);
// });
////////////////////////////////////////////////////////////////

// environment variable
const port = process.env.PORT;
const db_url = process.env.MONGO_URI;

// middleware
// app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// app.disable("etag");
// routes
// emal route
app.use("/api/emails", emailRoutes);
// review route
app.use("/api/contacts", contactRoutes);
// store Items route
app.use("/api/stores", StoreItemsRoutes);
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
