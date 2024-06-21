const express = require("express");
const { createVoleunterCtrl, getAllVolunterCtrl } = require("../controllers/VoleunterCtrl");

const router = express.Router();

router.post("/create", createVoleunterCtrl)
router.get("/getAll", getAllVolunterCtrl)
module.exports = router;