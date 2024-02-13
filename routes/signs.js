// const express = require("express");
// const router = express.Router();
import express from 'express';
import router from './signs.js';

// const authMiddleware = require('../middleware/authMiddleware');

// import controllers.
import { loginController } from '../controllers/Signupproj.js';
import  {signupController} from '../controllers/Signupproj.js';
import {signupproj} from "../controllers/Signupproj.js";
import { logout } from '../controllers/Signupproj.js';
//Register \\ post
router.post('/Signup',signupController)

//Login \\ post
router.post('/Login',loginController)

//Logout \\ post
router.post('/Logout',logout);

//define Api routes.
router.get("/signupproj",signupproj);

// module.exports = router;
export default router;