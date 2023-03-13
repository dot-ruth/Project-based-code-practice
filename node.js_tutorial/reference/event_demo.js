const EventEmitter = require('events')

// create a class
class MyEmitter extends EventEmitter{}

// init Object
const myEmitter = new MyEmitter()

//Event Listener
myEmitter.on('event',()=> console.log('Event Fired'))

//init event
myEmitter.emit('event')