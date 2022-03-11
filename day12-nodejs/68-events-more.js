const EventEmitter = require('events').EventEmitter;

let myevent = new EventEmitter();

myevent.on('ischoolEvent', function () {
    console.log('iSchool Event Happend');
});

setTimeout(function () {
    myevent.emit('ischoolEvent');
}, 2000);