const express = require("express");
const router = express.Router();

// import controllers.
const {loginController}  = require("../controllers/Loginproj");

//Register \\ post
router.post('/Login',loginController)

module.exports = router;