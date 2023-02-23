const express = require('express');

// Initialise Router
const router = express.Router();


// GET All Workout
router.get('/', (req, res) =>{
    res.json({message: "This will pull all workouts"})
})

// GET a single workout
router.get('/:id', (req, res) =>{
    res.json({message: " This will pull a specific workout by their ID"})
})

//POST a workout
router.post('/', (req, res) =>{
    res.json({message: "This should post a workout to the database"})
})

//PATCH a workout
router.patch('/:id', (req, res) =>{
    res.json({message: "This should update a specific workout by their ID"})
})

// DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({message: "This should update a particular workout by their ID"})
})

module.exports = router
