
const express = require( "express");
const {  createComplain,deleteComplain } = require( "../Controller/complainController");

const router = express.Router();
router.post("/createComplain", createComplain);
router.delete("/deleteComplain", deleteComplain);

module.exports = router;