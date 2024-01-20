const fs = require('fs');

const dataToAppend = "Hello, this is some text I'm appending!\n";

// Append data to the file
fs.appendFile('example.txt', dataToAppend, (err) => {
    if (err) throw err;
    console.log('The data was appended to the file!');
});

// If you want to run this code multiple times, it will keep adding the same line to 'example.txt'
