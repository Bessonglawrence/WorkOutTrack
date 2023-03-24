const express = require('express');
const {
    getWorkOuts,
    getWorkOut,
    createWorkOut,
    updateWorkOut,
    deleteWorkOut
} = require('../controllers/workoutControllers')
// Initialise Router
const router = express.Router();


// GET All Workout
router.get('/', getWorkOuts)

// GET a single workout
router.get('/:id', getWorkOut)

//POST a workout
router.post('/', createWorkOut)

//PATCH a workout
router.patch('/:id', updateWorkOut)

// DELETE a workout
router.delete('/:id', deleteWorkOut)

module.exports = router
