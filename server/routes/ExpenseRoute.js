const express = require("express");
const { createExpense, getExpense, deleteExpense, exportToExcel } = require("../controllers/expenseCtrl");
const router = express.Router();



router.post("/create", createExpense);
router.get("/getAll", getExpense);
router.delete("/delete/:id", deleteExpense);
router.get("/download", exportToExcel);
module.exports = router;