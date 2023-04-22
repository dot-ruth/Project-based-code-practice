const express = require('express')
const router = express.Router()
const { registerUser, loginUser,getme } = require("../controller/User_controller")
const {protect} = require('../middleware/authmiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getme)

module.exports = router