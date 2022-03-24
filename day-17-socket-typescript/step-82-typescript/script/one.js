"use strict";
let message = "";
class Hero {
    constructor(title, fname, lname) {
        this.title = title;
        this.fname = fname;
        this.lname = lname;
        this.city = 'Default';
    }
    sayTitle() {
        console.log(this.title);
    }
    sayFullName() {
        console.log(this.fname + " " + this.lname);
    }
    sayCity() {
        return this.city;
    }
}
let hero = new Hero("Superman", "Clark", "Kent");
hero.sayTitle();
hero.sayFullName();
function sayMessage(part1, part2, part3) {
    return part1 + " " + part2;
}
function logMessage(part1, part2) {
    console.log(part1 + " " + part2);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.log').innerHTML = sayMessage("Hello", "World");
    logMessage('Hello', 'World');
});
