const fetch = require('fetch');
const fs = require('fs');

fetch.fetchUrl('http://arcstellar.com', (error, meta, data) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        // console.log(data.toString());
        fs.writeFileSync('tempfiles/archstellar.html', data, 'utf-8');
    }
});