const express = require("express");
const { createBloodDonationCtrl, getBloodDonationCtrl, deleteBloodDonetedCtrl, exportToExcel } = require("../controllers/bloodDonation");

const router = express.Router();

router.post("/create", createBloodDonationCtrl)
router.get("/getAll", getBloodDonationCtrl)
router.delete("/delete/:id", deleteBloodDonetedCtrl)
router.get("/download", exportToExcel)

module.exports = router;