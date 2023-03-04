const Bill = require("../models/billAddressModel");
const mongoose = require("mongoose");
// get all bill form
const getBills = async (req, res) => {
  const bill = await Bill.find({}).sort({ createdAt: -1 });
  res.status(200).json(bill);
};
// get a single bill form

const getBill = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "bill address not found" });
  }
  const bill = await Bill.findById(id);
  if (!bill) {
    return res.status(404).json({ error: "bill address not found" });
  }
  res.status(200).json(bill);
};
// create a new bill form
const createBill = async (req, res) => {
  const { country, address, fname, lname, apartment, city } = req.body;

  try {
    const bills = await Bill.create({
      country,
      address,
      fname,
      lname,
      apartment,
      city,
    });
    res.status(200).json(bills);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// delete abill form
const deleteBill = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "bill address not found" });
  }
  const bill = await Bill.findOneAndDelete({ _id: id });

  if (!bill) {
    return res.status(404).json({ error: "bill address not found" });
  }
  res.status(200).json(bill);
};
// update abill form

const updateBill = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "bill address not found" });
  }

  const bill = await Bill.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!bill) {
    return res.status(404).json({ error: "bill address not found" });
  }
  res.status(200).json(bill);
};
module.exports = {
  getBills,
  getBill,
  createBill,
  deleteBill,
  updateBill,
};
