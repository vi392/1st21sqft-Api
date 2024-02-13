// const express = require("express");
// const router = express.Router();

import express from 'express'
import router from "../routes/contacts.js"

// import controllers.
import Contactproj from "../controllers/Contactproj.js";

//define Api routes.
router.post("/Contactproj",Contactproj);

// module.exports = router;
export default router;