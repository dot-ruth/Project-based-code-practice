const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals',require('./routes/Goal_routes'))
app.use('/api/users',require('./routes/User_routes'))

app.listen(port,()=> console.log(`server started, running ${port}`))