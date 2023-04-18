// import models
const Email = require("../models/emailModel");
const mongoose = require("mongoose");
//////////////////////////////// get all email //////////////////////////////////////////
const getEmails = async (req, res) => {
  const emails = await Email.find({}).sort({ createdAt: -1 });
  res.status(200).json(emails);
};
//////////////////////////////////////////// get a single email/////////////////////////////////////////////////
const getEmail = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Email not found" });
  }
  const emails = await Email.findById(id);

  if (!emails) {
    return res.status(404).json({ error: "Email not found" });
  }

  res.status(200).json(emails);
};
//////////////////////////////////////////// create a new email document//////////////////////////////////////////
const createEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const emailss = await Email.create({ email });
    res.status(200).json(emailss);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//////////////////////////////////////////// delete a email document//////////////////////////////////////////
const deleteEmail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Email not found" });
  }

  const emails = await Email.findOneAndDelete({ _id: id });

  if (!emails) {
    return res.status(404).json({ error: "Email not found" });
  }

  res.status(200).json(emails);
};
//////////////////////////////////////////// update a email document//////////////////////////////////////////
const updateEmail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Email not found" });
  }
  const emails = await Email.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!emails) {
    return res.status(404).json({ error: "Email not found" });
  }

  res.status(200).json(emails);
};
module.exports = {
  getEmails,
  getEmail,
  createEmail,
  deleteEmail,
  updateEmail,
};
