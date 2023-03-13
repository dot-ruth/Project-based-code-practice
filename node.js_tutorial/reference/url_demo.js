const { constants } = require('buffer')
const url = require('url')
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//Serilized URL
console.log(myUrl.href)
console.log(myUrl.toString())
// host(root Domain)
console.log(myUrl.host)
// hostname(doesn't include the port number)
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

// Serilized query
console.log(myUrl.search)

//params object(the object that is serched)
console.log(myUrl.searchParams)

//adding parameters dynamically
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)

//looping through the params
myUrl.searchParams.forEach((value,name)=>{console.log(`${name}:${value}`)})
 