const fs = require('fs');
const stream = fs.createReadStream('./input1.txt');
stream.on('data',function (a) {
  console.log('--------------------')
  console.log(a)
})
