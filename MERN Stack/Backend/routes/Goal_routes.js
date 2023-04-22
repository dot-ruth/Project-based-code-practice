const express = require('express')
const router = express.Router()
const {getGoals,
       setGoals,
       updateGoals,
       deleteGoals} = require('../controller/Goal_controller')
const {protect}= require('../middleware/authmiddleware')



router.route('/').get(protect,getGoals).post(protect,setGoals)  
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals)     


module.exports = router

