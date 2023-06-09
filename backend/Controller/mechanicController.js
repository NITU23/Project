const Mechanic = require('../Model/mechanicModel')

const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).send('please fill all details')
    }
    else {
        let mechanicExist;
        try {
            mechanicExist = await Mechanic.findOne({ email });
        }
        catch (err) {
            console.log('there is an error for finding user', err);
        }
        if (!mechanicExist) {
            res.status(401).send('user does not exist')
        }
        else {
            try {
                if (mechanicExist.password === password) {
                    console.log('user logged in successfully')
                    res.status(200).send('User logged in successfully')
                }
                else {
                    res.status(401).send('invalid credentials')
                }
            }
            catch (error) {
                console.log('error in login block ', error)
            }
        }
    }
}
const signup = async (req, res, next) => {

    const { email, password, name, machineType } = await req.body;
    if (!email || !password || !name || !machineType) {
        res.status(422).send("please fill all details")
    }
    else {
        let mechanicExist;
        try {
            mechanicExist = await Mechanic.findOne({ email })
        }
        catch (err) {
            console.log('there is an error during signup', err)
        }
        if (password.length < 6) {
            res.send('Password length can not be less than 6')
        }
        else {
            if (mechanicExist) {
                res.status(200).send('User already Exist');
            }
            const mechanic = new Mechanic({
                email: email, password: password, name: name,machineType : machineType
            })
            try {
                await mechanic.save()
                console.log('mechanic saved')
                return res.status(200).json(mechanic)
            }
            catch (err) {
                console.log('there is an error creating user', err)
            }
             
        }
    }
}
module.exports = { login, signup }