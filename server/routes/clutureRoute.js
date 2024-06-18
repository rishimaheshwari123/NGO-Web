const express = require("express");
const { createCulture, getAllCulture, getCulute, deleteCulture } = require("../controllers/culture");
const router = express.Router();



router.post("/create", createCulture);
router.get("/getAll", getAllCulture);
router.get("/get/:id", getCulute);
router.delete("/delete/:id", deleteCulture);
module.exports = router;