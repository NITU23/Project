const express = require( "express");
const {  login,signup,getAllUser,logout } = require( "../Controller/userController");

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/",getAllUser)
router.post("/logout",logout)
module.exports = router;
