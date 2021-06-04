var events = require('events');
var EventEmitter = events.EventEmitter;
var logger = new EventEmitter();

logger.on('message', function(message) {
    console.log(message);
})