const express = require("express");
const { createCulture, getAllCulture, deleteCulture, getCultureByCategory } = require("../controllers/culture");
const router = express.Router();



router.post("/create", createCulture);
router.get("/getAll", getAllCulture);
router.get("/category/:categoryId", getCultureByCategory);
router.delete("/delete/:id", deleteCulture);
module.exports = router;