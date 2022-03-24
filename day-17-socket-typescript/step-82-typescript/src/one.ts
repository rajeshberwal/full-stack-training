let message: string = "";

// class Hero {
//     title: string = 'default';

//     constructor(ntitle: string) {
//         this.title = ntitle;
//     }

//     sayTitle() {
//         console.log(this.title);
//     }
// }

// class Hero {
//     public title: string;
//     constructor(ntitle: string) {
//         this.title = ntitle;
//     }

//     sayTitle() {
//         console.log(this.title);
//     }
// }

interface IHero {
    title: string;
    fname: string;
    lname: string;
    city: string;
    sayTitle(): void;
    sayFullName(): void;
    sayCity(): string;
}

class Hero implements IHero {
    city: string = 'Default';
    constructor(public title: string, public fname: string, public lname: string) {}

    sayTitle() {
        console.log(this.title);
    }

    sayFullName() {
        console.log(this.fname + " " + this.lname);
    }

    sayCity(): string {
        return this.city;
    }
}

let hero = new Hero("Superman", "Clark", "Kent");
hero.sayTitle();
hero.sayFullName();

function sayMessage(part1: string, part2: string, part3 ? : string): string {
    return part1 + " " + part2;
}

function logMessage(part1: string, part2: string): void {
    console.log(part1 + " " + part2);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.log').innerHTML = sayMessage("Hello", "World");
    logMessage('Hello', 'World');
})