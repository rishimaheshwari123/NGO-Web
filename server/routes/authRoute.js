const express = require("express");
const { loginCtrl, registerCtrl } = require("../controllers/authCtrl");
const router = express.Router();



router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
module.exports = router;