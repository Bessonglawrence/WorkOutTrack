const express = require('express');
const WorkoutModel = require('../models/workoutModel')

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
router.post('/', async (req, res) =>{
    
    const {title, reps, load } = req.body;
    try{
        const workout = await WorkoutModel.create({title, reps, load});
        res.status(200).json(workout);
    } catch(error){
        res.status(500).json({error : error.message})
    }
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
