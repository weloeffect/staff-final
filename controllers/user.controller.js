const Staff = require('../models/user')
const jwt = require('jsonwebtoken')

function createToken(_id){
  return   jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'} )
}
//signup controller
async function signupUser(req, res){
    const {email, password} = req.body;

    try{
        const user = await Staff.signup(email, password) 
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }
    catch(err){
        res.status(400).json({error : err.message})
    }

}
//login controller
async function loginUser(req, res){
    const email = req.body.email;
    const password = req.body.password;

    try{
        const user = await Staff.login(email, password) 
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }
    catch(err){
        res.status(400).json({error : err.message})
    }
   
}

module.exports = {signupUser, loginUser}