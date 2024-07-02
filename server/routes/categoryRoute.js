const express = require("express");
const { createCategoryCtrl, getAllCategory, update } = require("../controllers/categoryCtrl");
const router = express.Router();



router.post("/create", createCategoryCtrl);
router.get("/getAll", getAllCategory);
router.put("/up/:id", update);

module.exports = router;