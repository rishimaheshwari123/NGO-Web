const express = require("express");
const { createEmployee, getEmployee, deleteEmployee, exportToExcel } = require("../controllers/employeeCtrl");

const router = express.Router();

router.post("/create", createEmployee)
router.get("/getAll", getEmployee)
router.delete("/delete/:id", deleteEmployee)
router.get("/download", exportToExcel)

module.exports = router;