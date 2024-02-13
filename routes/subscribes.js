// import mongoose.
// const express = require('express');
import express from 'express';

import { subscribeControllers, sendmail } from'../controllers/Subscribeproj.js';

const router = express.Router();
// routes.
router.get('/subcribe',sendmail)

 //export router.
//  module.exports = router
export default router;