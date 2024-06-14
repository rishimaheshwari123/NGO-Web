const express = require("express");
const { createCasePaymentCtrl, getCasePaymentCtrl, deleteCasePaymentCtrl, exportToExcel } = require("../controllers/casePaymentCtrl");

const router = express.Router();

router.post("/create", createCasePaymentCtrl)
router.get("/getAll", getCasePaymentCtrl)
router.delete("/delete/:id", deleteCasePaymentCtrl)
router.get("/download", exportToExcel)

module.exports = router;