const express = require("express");
const { createCategoryCtrl, getAllCategory } = require("../controllers/categoryCtrl");
const router = express.Router();



router.post("/create", createCategoryCtrl);
router.get("/getAll", getAllCategory);

module.exports = router;