console.log("Week 02 - FS and Streams Examples");
const fs = require('fs');

// Read File
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})

console.log('** After readFile');


// Read file synchronously
const data = fs.readFileSync('data.txt', 'utf8');
console.log(`Sync: ${data}`);
console.log('** End readFile');

// Write file
fs.writeFile('newData.txt', "I'm writing to a new file!", (err) => {
    if (err) throw err;
    console.log('++ File Written');
})

console.log('++ After writeFile');

// Write Synchronous
const data_to_write_sync = "This is some more sync content added";
fs.writeFileSync('newData.txt', data_to_write_sync);
console.log(`++ Sync: ${data_to_write_sync} written`);
