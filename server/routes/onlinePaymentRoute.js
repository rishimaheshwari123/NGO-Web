const express = require("express");
const { createOnlinePaymentCtrl, getOnlinePaymentCtrl, deleteOnlinePaymentCtrl, exportToExcel } = require("../controllers/onlinePaymentCtrl");

const router = express.Router();

router.post("/create", createOnlinePaymentCtrl)
router.get("/getAll", getOnlinePaymentCtrl)
router.delete("/delete/:id", deleteOnlinePaymentCtrl)
router.get("/download", exportToExcel)

module.exports = router;