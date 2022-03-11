let EventEmmiter = require('events').EventEmitter;

let myEvent = new EventEmmiter();

function ischoolHandler1(event) {
    console.log('iSchool Happend', event);
}

function yschoolHandler1(event) {
    console.log('iSchool Happend', event);
}

function ischoolHandler2(event) {
    console.log('ySchool Happend', event);
}

myEvent.addListener('ischoolevent', ischoolHandler1);
myEvent.addListener('ischoolevent', ischoolHandler2);
myEvent.addListener('ischoolevent', yschoolHandler1);

// console.log(myEvent.listenerCount('ischoolevent'));

console.log(myEvent.eventNames());

myEvent.emit('ischoolevent', {
    time: new Date(),
    message: 'Hello from iSchool'
});
myEvent.emit('ischoolevent', {
    time: new Date(),
    message: 'Hello from iSchool'
});
