const fs = require('fs');

const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//    if (err) throw err;
//    console.log('Folder Created...');
// });

// // Create and Write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//    if (err) throw err;
//    console.log('File written to...');

//    // File append
//    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', err => {
//       if (err) throw err;
//       console.log('File written to...');
//    });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
// });

// Rename file
fs.rename(
   path.join(__dirname, '/test', 'ur_demo.js'),
   path.join(__dirname, '/test', 'url_demo.js'),
   err => {
   if (err) throw err; 
   console.log('File renamed...');
});