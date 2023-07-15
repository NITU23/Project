const Mechanic = require('../Model/mechanicModel')

const login = async (req, res, next) => {
    const { mechanic_email, password } = req.body;
    if (!mechanic_email || !password) {
        res.status(422).send('please fill all details')
    }
    else {
        let mechanicExist;
        mechanicExist = await Mechanic.findOne({ mechanic_email });
        if (!mechanicExist) {
            res.status(401).send('mechanic does not exist')
        }
        else {
            try {
                if (mechanicExist.password === password) {
                    req.session.mechanic = mechanic_email
                    console.log('mechanic logged in successfully')
                    res.status(200).send('Mechanic logged in successfully')
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

    const { mechanic_email, password, mechanic_name, machineType } = await req.body;
    if (!mechanic_email || !password || !mechanic_name || !machineType) {
        res.status(422).send("please fill all details")
    }
    else {
        let mechanicExist;
        try {
            mechanicExist = await Mechanic.findOne({ mechanic_email })
        }
        catch (err) {
            console.log('there is an error during signup', err)
        }
        if (password.length < 6) {
            res.send('Password length can not be less than 6')
        }
        else {
            if (mechanicExist) {
                return res.status(200).send('Mechanic already Exist');
            }
            const mechanic = new Mechanic({
                mechanic_email: mechanic_email, password: password, mechanic_name: mechanic_name,machineType : machineType
            })
            try {
                await mechanic.save()
                req.session.mechanic = mechanic_email
                console.log('mechanic saved')
                return res.status(200).json(mechanic)
            }
            catch (err) {
                console.log('there is an error creating user', err)
            }
             
        }
    }
}

const getAllMechanic = async(req,res,next) =>{
    let mechanics ;
    mechanics = await Mechanic.find();
    if(mechanics){
        res.status(200).json(mechanics)
    }
    else {
        res.status(404).send('no mechanics found')
    }
}
module.exports = { login, signup,getAllMechanic }