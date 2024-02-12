// import mongoose.
const express = require('express');

const { subscribeControllers, sendmail } = require('../controllers/subscribe-controllers');

const router = express.Router();
// routes.
router.get('/subcribe',sendmail)

 //export router.
 module.exports = router