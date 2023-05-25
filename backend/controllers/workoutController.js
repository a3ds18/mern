const Workouts = require('../modules/workout');
const mongoose = require('mongoose');

// get all workouts

const getWorkouts = async (req, res) =>{
    
    try {
        const workouts= await Workouts.find({})
        .sort({createdAt: -1})
        res.status(200).json(workouts);
    } catch (error) {
        res.json({msg:error.message});
    }
};

// get single workout


const getWorkout = async (req, res) =>{
    const {id}=req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : 'No such workout' })
    }
        const workout= await Workouts.findById(id);
        if(!workout){
            return res.status(404).json({ error : 'No such workout' })
        }
        res.status(200).json({workout});
        
    
};

// create new workout
const createWorkout = async (req, res) =>{
    const {title ,load,reps} = req.body;
    try {
        const workout= await Workouts.create({title ,load,reps})
        res.status(200).json(workout);
    } catch (error) {
        res.json({msg:error.message});
    }
};

// delete  workout
const deleteWorkout = async (req, res) =>{
    const {id}=req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : 'No such workout' })
    }

    
        const workout= await Workouts.findOneAndDelete({_id: id})
        if(!workout){
            return res.status(404).json({ error : 'No such workout' })
        }
        res.status(200).json({workout});

       
};

// update workout

const updateWorkout = async (req, res) =>{
    const {id}=req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error : 'No such workout' })
    }

    
        const workout= await Workouts.findOneAndUpdate({_id: id},{
            ...req.body

        })
        if(!workout){
            return res.status(400).json({ error : 'No such workout' })
        }
        res.status(200).json({workout});

       
};

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
        

}