const Complain = require('../Model/complainModel')
const User = require('../Model/userModel')
const Mechanic = require('../Model/mechanicModel')
const mongoose = require( "mongoose");
const createComplain = async (req, res, next) => {
    const { mechanic, machineType, issue, date, user } = req.body;
    if (!mechanic || !machineType || !issue || !date || !user ) {
        res.status(404).send('Please fill all details')
    }
    else {
        let existingUser = await User.findById(user)
        if (!existingUser) {
            res.status(404).send('user does not exist')
        }
        else {
            let existingMechanic  = await Mechanic.findById(mechanic)
            if((!existingMechanic)){
                res.status(404).send('mechanic does not exist')
            }
            else {
                const complain = new Complain({
                 machineType,  issue,  date,user, mechanic
                 })
                 try {
                     const session = await mongoose.startSession();
                     session.startTransaction();
                         await complain.save({ session });
                         existingUser.complains.push(complain)
                         existingMechanic.complains.push(complain)
                         await existingUser.save({ session });
                         await existingMechanic.save({session});
                         await session.commitTransaction();
                     console.log('complain saved successfully')
                     res.status(200).json(complain)
                 }
                 catch (err) {
                     res.status(404).send(err)
                 }
            }
            
        }
        
    }

    next();
}
const deleteComplainByUser = async (req, res, next) => {
    const complainId = req.params.id;
    let complain;
    complain = await Complain.findById(complainId).populate("user")
    complainMechanic = await Complain.findById(complainId).populate("mechanic")
    
    if(complain){
        await complain.user.complains.pull(complain)
        await complainMechanic.mechanic.complains.pull(complain)
        complainMechanic.mechanic.save()
        complain.user.save();
        await Complain.findByIdAndRemove(complainId)
        res.status(200).send({message:"complain deleted successfully"})
    }    
    else {
        res.status(401).json({message:"unable to delete"})
    }
}

const getAllComplainUser = async(req,res,next) => {
   const {user} = req.params.id;
       let getAllComplainsUser = await Complain.find(user)
       res.status(200).send(getAllComplainsUser)
}


const updateComplainUser = async(req,res,next) => {
    const {machineType,issue} = req.body;
    const complainId = req.params.id;
    let updateComplain
    try{
        updateComplain = await Complain.findByIdAndUpdate(complainId,{machineType,issue})
    }
    catch(err){
        console.log('there is an error', err)
    }
       if(!updateComplain){
        res.status(401).json({message:"Complain not updated"})
       }
       else {
        res.status(200).json({message:"Complain Updated"})
       }
    }
     

const getAllComplainMechanic = async(req,res,next) =>{
    const {mechanic} = req.params.id;
     const complains = await Complain.find(mechanic)
     return res.status(200).send(complains)
}

module.exports = { createComplain, deleteComplainByUser,getAllComplainUser,updateComplainUser,getAllComplainMechanic }