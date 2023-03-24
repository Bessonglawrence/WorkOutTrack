const express = require('express');

//Custom function import
const {
    loginUser,
    signupUser
} = require('../controllers/userController')

// Initialise Router
const router = express.Router();

// LOGIN User

router.post('/login', loginUser)

// SIGNUP User

router.post('/signup', signupUser)

module.exports = router;
