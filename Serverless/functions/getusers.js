const axios = require('axios');
exports.handler = function(event,context,callback){
 const API_URL = 'https://api.github.com/users'; 
 const API_CLIENT_ID = 'f2219d9e7f352e447ee4';
 const API_CLIENT_SECRET = '21e737fdd6f280ea2375719e04e000a1770d2d6e';

 const URL =`${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

 // send user response
 const send = body =>{
    callback(null,{
        statusCode:200,
        body:JSON.stringify(body)
    });
 }

 //preform API call
 const getUsers =()=>{
    axios.get(URL)
    .then(res => send(res.data))
    .catch(err => send(err));
 }

 //make sure method is get
 if(event.httpMethod == 'GET'){
    getUsers();
 }
}