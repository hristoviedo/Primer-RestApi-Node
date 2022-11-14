const express = require("express");
const router = express.Router();
const checkOrigin = require("../middleware/origin");

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/users");

router.get("/", getItems);
router.get("/:id",checkOrigin, getItem);

router.post("/", checkOrigin, createItem);

router.patch("/:id", updateItem);

router.delete("/:id",checkOrigin, deleteItem);

module.exports = router;
