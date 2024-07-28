const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// create email schema
const emailSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Email", emailSchema);
