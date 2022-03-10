import Person from './person.js';

class Hero extends Person {
    firstName = 'Default firstname';
    lastName = 'Default lastname';
    _secret = 'Confidential Content';
    static version = 1001;

    constructor(fName, lName, nCity) {
        super(nCity);
        this.firstName = fName;
        this.lastName = lName;
    }

    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    get secret() {
        return this._secret;
    }

    set secret(nSecret) {
        this._secret = nSecret;
    }
}

export {
    Hero
};