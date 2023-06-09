const Complain = require('../Model/complainModel')
const User = require('../Model/userModel')
const Mechanic = require('../Model/mechanicModel')
const createComplain = async (req, res, next) => {
    const { mechanicName, machineType, issue, date, username } = req.body;
    if (!mechanicName || !machineType || !issue || !date || !username) {
        res.status(404).send('Please fill all details')
    }
    else {
        let mechanicExist = Complain.findOne({ mechanicName })
        if (!mechanicExist) {
            res.status(404).send('mechanic does not exist')
        }
        const complain = new Complain({
            mechanicName: mechanicName, machineType: machineType, issue: issue, date: date, username: username
        })
        try {
            await complain.save();
            console.log('complain saved successfully')
            res.status(200).send('complain saved successfully')
        }
        catch (err) {
            res.status(404).send(err)
        }
    }
}
const deleteComplain = async (req, res, next) => {

    const { name, machineType, email } = req.body;
    if (!name || !machineType || !email) {
        res.status(404).send('please provide all details')
    }
    else {
        let userExist, complainExist;
        userExist = await User.findOne({ name })
        if (!userExist) {
            res.status(404).send('user does not exist')
        }
        else {
           let mechanicExist = await Mechanic.findOne({ email })
            if (!mechanicExist) {
                res.status(404).send('mechanic does not exist')
            }
            else {
                complainExist = await Complain.findOne({ machineType })
                if (complainExist) {
                    await Complain.deleteOne({ email })

                    res.status(200).send('complain deleted')
                }
                else {
                    res.status(404).send('machine does not exist')
                }
            }
        }



    }

}
module.exports = { createComplain, deleteComplain }