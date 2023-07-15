const User = require('../Model/userModel')

const login = async (req, res, next) => {
    const { user_email, password } = req.body;
    if (!user_email || !password) {
        res.status(422).send('please fill all details')
    }

    else {
        let userExist;
        try {
            userExist = await User.findOne({ user_email });
        }
        catch (err) {
            console.log('there is an error for finding user', err);
        }
        if (!userExist) {
            console.log('user does not exist')
            res.status(401).send('user does not exist')
        }
        else {
            try {
                if (userExist.password === password) {
                    req.session.username = user_email
                    req.session.user_sessionId = req.sessionID
                    console.log('user logged in successfully')
                    console.log('session is >>>>',req.session)
                    console.log('sessionid',req.sessionID)
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

    const { user_email, password,username } = await req.body;
    if (!user_email || !password || !username) {
        res.status(422).send('please fill all details')
    }
    else {
        let userExist;
       
            userExist = await User.findOne({ user_email })
       
        if (password.length < 6) {
            res.send('Password length can not be less than 6')
        }
        else {
            if (userExist) {
               return res.status(200).send('User already Exist');
            }
          
            const user = new User({
                user_email: user_email, password: password, username : username,complains:[]
            })
            try {
                await user.save()
                req.session.user_sessionId = req.sessionID
                req.session.username = user_email
                console.log('user saved')
                return res.status(200).json(user)
            }
            catch (err) {
                console.log('there is an error creating user', err)
            }
            
        }
    }
}

const getAllUser = async (req,res,next) => {
    const users = await User.find();
    if(!users){
        res.status(404).send('No user exist')
    }
    else {
        res.status(200).send(users)
    }

}
const logout = async (req,res,next) => {
    req.session.destroy(err => {
        if (err) {
          console.error('Error destroying session:', err);
        } else {
            console.log('logged out successfully',req.session)
          res.redirect('/');
              }
      });
}
module.exports = { login, signup,getAllUser,logout }