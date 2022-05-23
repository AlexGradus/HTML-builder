const fs=require('fs');
const path = require('path');


let b=path.join(__dirname)+'/text.txt';
let c=fs.createReadStream(b,'utf-8');
c.on('data',solve=>console.log(solve));




