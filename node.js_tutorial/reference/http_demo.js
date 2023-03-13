const http = require('http')

//creating a server object
http.createServer((req,res)=>{
    // write response
    res.write('hello')
    res.end()
})
.listen(5000,()=> console.log('server running.....'))
