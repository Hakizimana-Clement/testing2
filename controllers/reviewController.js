// import model
const Review = require("../models/reviewModel");
const mongoose = require("mongoose");
// get all review
const getReviews = async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json(reviews);
};
// get a single review
const getReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const review = await Review.findById(id);

  if (!review) {
    return res.status(404).json({ error: "not found" });
  }

  res.status(200).json(review);
};
// create a new review document
const createReview = async (req, res) => {
  const { name, rating, email, title, comment } = req.body;

  try {
    const reviews = await Review.create({
      name,
      rating,
      email,
      title,
      comment,
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// delete a  review document
const deleteReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const review = await Review.findOneAndDelete({ _id: id });

  if (!review) {
    return res.status(404).json({ error: "not found" });
  }

  res.status(200).json(review);
};
// update a  review document
const updateReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const review = await Review.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!review) {
    return res.status(404).json({ error: "not found" });
  }

  res.status(200).json(review);
};
module.exports = {
  getReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
};
