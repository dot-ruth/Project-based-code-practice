const fs = require('fs')
const path = require('path')

//create a folder
//fs.mkdir(path.join(__dirname,'/test'),{},err => {
  //  if(err) throw err;
 //   console.log('folder created ..')
//})

//create and write to file
//fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',err => {
  //  if(err) throw err;
   // console.log('file written to ..')
//})

//readfile
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
   if(err) throw err;
   console.log(data)
  }) 