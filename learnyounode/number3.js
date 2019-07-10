const fs = require('fs');

let newBuffer = fs.readFileSync(process.argv[2],'utf8');
let str = newBuffer.toString();
console.log(str.split(/\n/).length - 1);