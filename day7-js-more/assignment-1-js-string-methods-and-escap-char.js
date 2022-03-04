let _name = 'Bruce Wayne';
console.log(`Name: ${_name}`);


// char at and length methods
let firstChar = _name.charAt(0);
console.log(`First character of name is: ${firstChar}`);

let lastChar = _name.charAt(_name.length - 1);
console.log(`Last character of name is: ${lastChar}`);

let lengthOfName = _name.length;
console.log(`Length of name is: ${lengthOfName}`);


// substring method
let firstName = _name.substring(0, 5);
console.log(`First name is: ${firstName}`);


// slice method
let firstNameSlice = _name.slice(0, 5);
console.log(`First name slice is: ${firstNameSlice}`);

let lastName = _name.slice(-5);
console.log(`Last name is: ${lastName}`);


// indexOf method
let indexOfE = _name.indexOf('e');
console.log(`Index of e is: ${indexOfE}`);

let indexOfE2 = _name.indexOf('e', 5);
console.log(`Index of e is: ${indexOfE2}`);


// lastIndexOf method
let lastIndexOfE = _name.lastIndexOf('e');
console.log(`Last index of e is: ${lastIndexOfE}`);


// split method
let splitName = _name.split(' ');
console.log(`Split name is: ${splitName}`);


// replace method
let replaceName = _name.replace('Bruce', 'Batman');
console.log(`Replace name is: ${replaceName}`);


// toUpperCase and toLowerCase methods
let upperCaseName = _name.toUpperCase();
console.log(`Upper case name is: ${upperCaseName}`);

let lowerCaseName = _name.toLowerCase();
console.log(`Lower case name is: ${lowerCaseName}`);




// Eascape character

console.log('\n\nUsing Escape characters: \n\n');

// backslash
let escapeChar = 'I\'m Batman';
console.log(`After using \\ to use single quote inside single quote: ${escapeChar}`);

let escapeChar2 = "I\"m Batman";
console.log(`After using \" to use double quote inside single quote: ${escapeChar2}`);


// new line
let newLine = 'I\'m\nBatman';
console.log(`After using \\n to use new line: ${newLine}`);


// tab
let tab = 'I\'m\tBatman';
console.log(`After using \\t to use tab: ${tab}`);


// vertical tab
let verticalTab = 'I\'m\vBatman';
console.log(`After using \\v to use vertical tab: ${verticalTab}`);


// backspace
let backspace = 'I\'m\bBatman';
console.log(`After using \\b to use backspace: ${backspace}`);


// carriage return
let carriageReturn = 'I\'m\rBatman';
console.log(`After using \\r to use carriage return: ${carriageReturn}`);