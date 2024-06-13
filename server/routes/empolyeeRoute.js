const express = require("express");
const { createEmployee, getEmployee, deleteEmployee } = require("../controllers/employeeCtrl");

const router = express.Router();

router.post("/create", createEmployee)
router.get("/getAll", getEmployee)
router.delete("/delete/:id", deleteEmployee)

module.exports = router;