const express = require('express')
const path = require('path')
const app = express()
const uuid = require('uuid')
const members = require('./Members')
const PORT = process.env.PORT || 5000

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

//middleware function
const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}
//init middleware
//app.use(logger)


//creating a route
//getting all members
app.get('api/members',(req,res)=>{
    res.json(members)
})

//get single member by id
app.get('api/members/:id',(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.is))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json("members not found")
    }
})


//Create a Member(when creating an object we use post methos)
app.post('api/members',(req,res)=>{
    const newMember ={
          id:uuid.v4(),
          name:req.body.name,
          status:req.body.status
    }
    members.push(newMember)
    res.json(members)
})

//update a member(for updating something it will be a put request)
app.put('api/members',(req,res)=>{
    members.forEach(member => {
        if(member.id === parseInt(req.params.id)){
            member.name = req.body.name
            member.status = req.body.status
            res.json({msg:'Member Updated',member})
        }
        
    });
    members.push(newMember)
    res.json(members)
})

//delete a member
app.delete('api/members',(req,res)=>{
    res.json({msg:'Member Deleted'})
})



//Set static folder
//usefull when there is many page to render
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=>{
    console.log("server started running.....")
})