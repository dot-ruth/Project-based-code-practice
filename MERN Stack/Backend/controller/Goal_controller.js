const asyncHandler = require('express-async-handler')
const Goal = require('../model/Goal_model')
const User = require('../model/User_model')
// @desc Get goals
//@route GET api/goals
//@access Private
const getGoals =asyncHandler(async (req,res) => {
    const goals = await Goal.find({user:req.user.id})
    res.json(goals)
})

// @desc Set goals
//@route POST api/goals
//@access Private
const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400).json({message:'please add a text file'})
    }
    const goal = await Goal.create({
        text:req.body.text,
        user: req.user.id
    })
    res.json(goal)
})

// @desc Update goals
//@route PUT api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new error ('goal not found')
    }

    

    //check for user
    if(!req.user){
        res.status(401)
        throw new error ('Use not found')
    
    }
    
    //make sure the login user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedgoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.json(updatedgoal)
})

// @desc Delete goals
//@route DELETE api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new error ('goal not found')
    }

    

    //check for user
    if(!req.user){
        res.status(401)
        throw new error ('Use not found')
    
    }
    
    //make sure the login user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await Goal.findByIdAndRemove(req.params.id)

    res.json({message: `Deleted `})
})

module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}