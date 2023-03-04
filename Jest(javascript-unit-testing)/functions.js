const axios = require('axios')
const functions = {
    add: (x,y) => x+y,
    isNull: ()=> null,
    checkValue: (x)=> x,
    createUser: ()=>{

        const user = { firstName: 'Ruth'};
        user['lastName'] = 'Abiti';
        return user;

    },
    fetchUser:() => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}
module.exports = functions