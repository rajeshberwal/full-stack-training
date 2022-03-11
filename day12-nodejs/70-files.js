const fs = require('fs');

// the following can be sync or async
// write file
// read file
// watch file

// fs.writeFileSync('temp.txt', 'Welcome to your life');
// fs.writeFile('temp.txt', 'Welcome to your life', error => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     } else {
//         console.log('File created');
//     }
// });


// console.log(fs.readFileSync('temp.txt').toString());
// console.log(fs.readFileSync('temp.txt', 'utf-8'));

fs.readFile('temp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(data);
    }
});

// append a quote to a text file and watch for change every 5 seconds

fs.watchFile('temp.txt', () => {
    console.log('File changed');
});

setTimeout(() => {
    fs.appendFileSync('temp.txt', '\n Hello World', 'utf-8');
}, 4000);