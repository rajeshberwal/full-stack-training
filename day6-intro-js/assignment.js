let arr1 = [1, 2, 3, 'a', 'b', 'c'];
let arr2 = [3, 4, 5, 'd', 'e', 'f'];

// concat method
let arr3 = arr1.concat(arr2);
console.log(arr3);

// join method
let msgArr = ['Hello', 'World'];
let msg = msgArr.join(' | ');
console.log(msg);

// pop method
let popedVal = arr1.pop();
console.log(popedVal);
console.log(arr1);


// push method
arr1.push(4, 5, 6);
console.log(arr1);

// unshift method
arr1.unshift(0);
console.log(arr1);

// shift method
arr1.shift();
console.log(arr1);


// slice method
let slicedArr = arr1.slice(2, 4);
console.log(slicedArr);

// splice method
arr1.splice(2, 2);
console.log(arr1);


let nums = [1, 2, 4, 3, 5, 6]

// reverse method
nums.reverse();
console.log(nums);

// sort method
nums.sort();
console.log(nums);


// toString method
let str = nums.toString();
console.log(str);

// toLocaleString method
let str2 = nums.toLocaleString();
console.log(str2);