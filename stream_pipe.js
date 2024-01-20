const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream')

const readStream = fs.createReadStream('data.txt', 'utf8');
const writeStream = fs.createWriteStream('out_stream.txt');

// readStream.pipe(writeStream);
readStream.pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('out_stream.txt.gz'));

//Create custom transform stream
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        //this.push(chunk.toString().toUpperCase());
        const result = chunk.toString().toUpperCase();
        callback(null, result);
    }
});

// Use Custom transform stream
const customDataReadStream = fs.createReadStream('custom_read_stream.txt');
customDataReadStream.pipe(upperCaseTransform)
    .pipe(fs.createWriteStream('out_upper_stream.txt'));


