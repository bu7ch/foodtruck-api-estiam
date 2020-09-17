const express = require("express");
const router = express.Router();
// gestion des images
const foodtruckController = require("../controllers/foodtruckController");

router.get("/", foodtruckController.all);
router.get("/:id", foodtruckController.show);
router.get("/new",foodtruckController.add)
router.post("/new",foodtruckController.store);

module.exports = router;
