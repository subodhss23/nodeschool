const fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  if (err) console.log(err);
  else{
    let str = data.toString();
    console.log(str.split(/\n/).length - 1);
  }
})