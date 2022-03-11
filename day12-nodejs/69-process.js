// console.log(process.argv[2]);

const EventEmitter = require('events').EventEmitter;

let myevent = new EventEmitter();

process.nextTick(() => {
    myevent.emit('ischoolEvent');
});

myevent.on('ischoolEvent', function () {
    console.log('iSchool Event Happend');
});

console.log('Hello from iSchool');

for (let i = 0; i < 100; i++) {
    console.log(i);

}