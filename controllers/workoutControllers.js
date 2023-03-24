const workoutModel = require('../models/workoutModel');
const mongoose = require('mongoose');


// Get all workouts

const getWorkOuts = async (req, res) => {
    try{
        const workouts = await workoutModel.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(500).json({error: error.body})
    }
}


// Get a single workout

const getWorkOut = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"})
    }
    const workout = await workoutModel.findById(id)
    if(!workout){
        return res.status(500).json({error: "Workout doesn't exist"})
    }
    res.status(200).json(workout);
}


// Create a workout

const createWorkOut = async (req, res) =>{
    const { title, reps, load} = req.body;

    let emptyFields = [];

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        res.status(400).json({ error: "Please enter all fields", emptyFields })
    }

    try {
        const workout = await workoutModel.create({ title, reps, load});
        res.status(200).json(workout);
    } catch(error){
        res.status(500).json({error: error.body})
    }

}


// Update a workout

const updateWorkOut = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    const workout = await workoutModel.findOneAndUpdate({_id: id},{...req.body})
    if(!workout){
        return res.status(404).json({error: "Workout doesn't exist"})
    }
    res.status(200).json(workout)
}


// Delete a workout

const deleteWorkOut = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Workout"})
    }
    const workout = await workoutModel.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: "Workout doesn't exist"})
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkOuts,
    getWorkOut,
    createWorkOut,
    updateWorkOut,
    deleteWorkOut
}