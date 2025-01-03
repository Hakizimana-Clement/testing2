const express = require("express");
const router = express.Router();
const {
  getEmails,
  getEmail,
  createEmail,
  deleteEmail,
  updateEmail,
} = require("../controllers/emailController");
// Get all email
router.get("/", getEmails);
// Get a single email
router.get("/:id", getEmail);
// create a email document
router.post("/", createEmail);
// delete a email

router.delete("/:id", deleteEmail);
// update a email document
router.patch("/:id", updateEmail);

module.exports = router;
