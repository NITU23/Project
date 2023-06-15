const express = require( "express");
const {  login,signup,getAllUser } = require( "../Controller/userController");

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/",getAllUser)

module.exports = router;
