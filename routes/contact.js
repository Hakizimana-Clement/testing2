const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContacts,
  deleteContacts,
  updateContacts,
} = require("../controllers/contactController");
// get all contact
router.get("/", getContacts);
// get a single contact
router.get("/:id", getContact);
// create a contact document
router.post("/", createContacts);
// delete a contact document
router.delete("/:id", deleteContacts);
// update a contact document
router.patch("/:id", updateContacts);

module.exports = router;
