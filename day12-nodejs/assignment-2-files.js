const fs = require('fs');


// append a quote to a text file and watch for change every 5 seconds

let quote = 'If you want to learn more about the bad parts and how to use them badly, consult any other JavaScript book.'


fs.watchFile('temp.txt', () => {
    console.log('File changed');
});

setInterval(() => {
    fs.appendFileSync('temp.txt', `${quote}\n`, 'utf-8');
}, 5000);