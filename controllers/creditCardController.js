const Card = require("../models/creditCardModel");
const mongoose = require("mongoose");
// get all credit card
const getCreditCards = async (req, res) => {
  const cards = await Card.find({}).sort({ createdAt: -1 });
  res.status(200).json(cards);
};
// get a single credit card
const getCreditCard = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const card = await Card.findById(id);
  if (!card) {
    return res.status(404).json({ error: "not found" });
  }
  res.status(200).json(card);
};
// create credit card document
const createCard = async (req, res) => {
  const { cardNum, cardName, cardExpirtedDate, cardSecurity } = req.body;
  try {
    const newCards = await Card.insertMany({
      cardNum,
      cardName,
      cardExpirtedDate,
      cardSecurity,
    });

    res.status(200).json(newCards);
  } catch (error) {
    res.status(404).json({ error: "not Found" });
  }
};

// delete credit card document

const deleteCard = async (req, res) => {
  const { id } = req.params;

  const card = await Card.findOneAndDelete({ _id: id });

  if (!card) {
    return res.status(404).json({ error: "not found" });
  }
  res.status(200).json(card);
};
// update credit card document
const updateCard = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const card = await Card.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!card) {
    return res.status(404).json({ error: "not found" });
  }
  res.status(200).json(card);
};

module.exports = {
  getCreditCards,
  getCreditCard,
  createCard,
  deleteCard,
  updateCard,
};
