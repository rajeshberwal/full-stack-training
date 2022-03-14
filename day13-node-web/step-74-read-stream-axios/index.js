const axios = require('axios');
const fs = require('fs');
const zlib = require('zlib');

axios({
        method: "get",
        url: "https://rollic.in",
        responseType: "stream"
    })
    .then(res => {
        // res.data.pipe(fs.createWriteStream('temp/rollic.html'));
        res.data.pipe(zlib.createGzip()).pipe(fs.createWriteStream('temp/rollic.html.zip'));
    })
    .catch(err => console.log(err));