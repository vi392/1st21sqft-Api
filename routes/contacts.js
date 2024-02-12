const express = require("express");
const router = express.Router();

// import controllers.
const {Contactproj} = require("../controllers/Contactproj");

//define Api routes.
router.post("/Contactproj",Contactproj);

module.exports = router;