const Store = require("../models/storeItemsModel");
const mongoose = require("mongoose");
// get all store
const getStores = async (req, res) => {
  const store = await Store.find({}).sort({ createdAt: -1 });
  res.status(200).json(store);
};
// get a single store
const getStore = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such products" });
  }
  const store = await Store.findById(id);

  if (!store) {
    return res.status(400).json({ error: "no such products" });
  }

  res.status(200).json(store);
};
// create new  store
const createStore = async (req, res) => {
  const { priceInCents, name, size, quantity } = req.body;
  try {
    const store = await Store.create({ priceInCents, name, size, quantity });
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a store
const deleteStore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such products" });
  }
  const store = await Store.findOneAndDelete({ _id: id });

  if (!store) {
    return res.status(400).json({ error: "no such products" });
  }

  res.status(200).json(store);
};
// update a store
const updateStore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such products" });
  }
  const store = await Store.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!store) {
    return res.status(400).json({ error: "no such products" });
  }

  res.status(200).json(store);
};
module.exports = {
  getStores,
  getStore,
  createStore,
  deleteStore,
  updateStore,
};
