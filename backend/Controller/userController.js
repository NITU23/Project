const User = require('../Model/userModel')

const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).send('please fill all details')
    }

    else {
        let userExist;
        try {
            userExist = await User.findOne({ email });
        }
        catch (err) {
            console.log('there is an error for finding user', err);
        }
        if (!userExist) {
            console.log('chal bhag yha se')
            res.status(401).send('user does not exist')
        }
        else {
            try {
                if (userExist.password === password) {
                    console.log('user logged in successfully')
                    res.status(200).send('User logged in successfully')
                }
                else {
                    console.log('invalid credentials')
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

    const { email, password,name } = await req.body;
    if (!email || !password || !name) {
        res.status(422).send('please fill all details')
    }
    else {
        let userExist;
        try {
            userExist = await User.findOne({ email })
        }
        catch (err) {
            console.log('there is an error during signup', err)
        }
        if (password.length < 6) {
            res.send('Password length can not be less than 6')
        }
        else {
            if (userExist) {
                res.status(200).send('User already Exist');
            }
            const user = new User({
                email: email, password: password, name : name
            })
            try {
                await user.save()
                console.log('user saved')
                return res.status(200).json(user)
            }
            catch (err) {
                console.log('there is an error creating user', err)
            }
            
        }
    }
}
module.exports = { login, signup }