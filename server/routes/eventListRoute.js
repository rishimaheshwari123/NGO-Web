const express = require("express");
const { getEventListCtrl, deleteEventListCtrl, exportToExcel, createEventListCtrl } = require("../controllers/eventListCtrl");

const router = express.Router();

router.post("/create", createEventListCtrl)
router.get("/getAll", getEventListCtrl)
router.delete("/delete/:id", deleteEventListCtrl)
router.get("/download", exportToExcel)

module.exports = router;