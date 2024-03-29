const User = require('../models/userModel');

// Login User
const  loginUser = async(req, res) =>{
    res.json({message: "You have been logged in"})
}


// Signup User
const signupUser = async(req, res) =>{
    const { email, password } = req.body;
    
    try{
        const user = await User.signup(email, password)

        res.status(200).json({email, user})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    //res.json({message: "New user has been added"})
}

module.exports = {
    loginUser,
    signupUser
}