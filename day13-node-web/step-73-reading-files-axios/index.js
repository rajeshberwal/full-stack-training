const axios = require('axios');
const fs = require('fs');

axios('http://arcstellar.com')
    .then(res => {
        fs.writeFileSync('tempfiles/archstellar.html', res.data, 'utf-8');
    })
    .catch(err => {
        console.log(err);
    });