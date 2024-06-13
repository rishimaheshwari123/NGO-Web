const express = require("express");
const { createEvents, getAllEvents, deleteEvent } = require("../controllers/eventsCtrl");
const router = express.Router();



router.post("/create", createEvents);
router.get("/getAll", getAllEvents);
router.delete("/delete/:id", deleteEvent);
module.exports = router;