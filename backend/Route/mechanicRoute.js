
const express = require( "express");
const {  login,signup,getAllMechanic } = require( "../Controller/mechanicController");

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/",getAllMechanic)
module.exports = router;