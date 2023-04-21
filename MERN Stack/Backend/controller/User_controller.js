const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/User_model')

// @desc register new users
//@route POST api/users
//@access Public
const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body
    if(!name||!email||!password){
        res.status(400)
        throw new Error('Please fill all fields')
    }
    //check if user existes
    const User_exists = await User.findOne({email})

    if(User_exists){
        res.status(400)
        throw new Error('user already exists')
    }

    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hasdedpassword = await bcrypt.hash(password,salt)

    // create the user
    const user = await User.create({
        name,email,password:hasdedpassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid Data')
    }
    res.json({message: 'register user'})
})


// @desc Authenticate a user
//@route POST api/users/login
//@access Public
const loginUser = asyncHandler(async(req,res)=>{
    const {}
    res.json({message: 'login user'})
})

// @desc get users data
//@route GET api/users/me
//@access Public
const getme = asyncHandler(async(req,res)=>{
    res.json({message: 'user data display'})
})
module.exports ={registerUser,loginUser,getme} 