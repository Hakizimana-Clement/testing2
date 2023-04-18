const Contact = require("../models/contactModel");
const mongoose = require("mongoose");
// get all contact
const getContacts = async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.status(200).json(contacts);
};
// get a single contact
const getContact = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "contacts not found" });
  }

  const contacts = await Contact.findById(id);

  if (!contacts) {
    return res.status(404).json({ error: "contacts not found" });
  }

  res.status(200).json(contacts);
};
// create a new contact document
const createContacts = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contacts = await Contact.create({ name, email, message });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// delete a new contact document
const deleteContacts = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "contacts not found" });
  }
  const contacts = await Contact.findOneAndDelete({ _id: id });
  if (!contacts) {
    return res.status(404).json({ error: "contacts not found" });
  }

  res.status(200).json(contacts);
};
// update a new contact document
const updateContacts = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "contacts not found" });
  }
  const contacts = await Contact.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!contacts) {
    return res.status(404).json({ error: "contacts not found" });
  }

  res.status(200).json(contacts);
};
module.exports = {
  getContacts,
  getContact,
  createContacts,
  deleteContacts,
  updateContacts,
};
