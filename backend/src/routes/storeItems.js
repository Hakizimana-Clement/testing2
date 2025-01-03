const express = require("express");
const router = express.Router();
const {
  getStores,
  getStore,
  createStore,
  deleteStore,
  updateStore,
} = require("../controllers/StoreController");
// get all storeItems
router.get("/", getStores);
// get a single storeItems
router.get("/:id", getStore);
// create new storeItems document
router.post("/", createStore);
// delete new storeItems document
router.delete("/:id", deleteStore);
// update new storeItems document
router.patch("/:id", updateStore);
module.exports = router;
