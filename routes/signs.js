const express = require("express");
const router = express.Router();

// import controllers.
const {signupController}  = require("../controllers/Signupproj");

//Register \\ post
router.post('/Signup',signupController)

module.exports = router;