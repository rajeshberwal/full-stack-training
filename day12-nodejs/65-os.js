let os = require('os');

console.log(os.arch());
console.log(os.cpus().length);
console.log(os.totalmem()/(1024 ** 3), 'GB');
console.log(os.freemem()/(1024 ** 3), 'GB');
console.log(os.userInfo().username);
