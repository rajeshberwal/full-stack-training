const EventEmitter = require('events').EventEmitter;

let myevent = new EventEmitter();

myevent.on('ischoolEvent', function () {
    console.log('iSchool Event Happend');
});

let i = 0;
let intr1 = setInterval(() => {
    myevent.emit('ischoolEvent');
    i += 1;
    if (i == 5) {
        clearInterval(intr1);
        console.log('Event completed');
    }
}, 2000);
/*
create an event that gets called once every 2 seconds for 5 times
*/