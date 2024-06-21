const express = require("express");
const { creaateGallery, getAllGallery, deleteGallery } = require("../controllers/galleryCtrl");
const router = express.Router();


router.post("/create", creaateGallery);
router.get("/get", getAllGallery);
router.delete("/delete/:id", deleteGallery);


module.exports = router;