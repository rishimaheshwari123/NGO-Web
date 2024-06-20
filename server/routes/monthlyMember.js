const express = require("express");
const { createMontlyMemberCtrl, getMonthlyMemberCtlr, deleteMonthlyMemberCtrl, exportToExcel } = require("../controllers/monthlyMemberCtrl");
const router = express.Router();



router.post("/create", createMontlyMemberCtrl);
router.get("/getAll", getMonthlyMemberCtlr);
router.delete("/delete/:id", deleteMonthlyMemberCtrl);
router.get("/download", exportToExcel);
module.exports = router;