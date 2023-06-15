
const express = require( "express");
const {  createComplain,deleteComplainByUser,getAllComplainUser,updateComplainUser,getAllComplainMechanic } = require( "../Controller/complainController");

const router = express.Router();
router.post("/createComplain", createComplain);
router.delete("/deleteComplain/:id", deleteComplainByUser);
router.get("/getAllComplains/:id",getAllComplainUser)
router.put("/updateComplain/:id",updateComplainUser)
router.get("/getAllComplainMechanic/:id",getAllComplainMechanic)

module.exports = router;