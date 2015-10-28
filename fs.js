var fs = require('fs');
var zlib = require('zlib');
var readStream = fs.createReadStream(__dirname + '/lorem.txt');
var writeStream = fs.createWriteStream(__dirname + '/lorem.copy.txt');
var compressedStream = fs.createWriteStream(__dirname + '/lorem.gzip.txt');
var gzip = zlib.createGzip();

//readStream.on('data', function(chunk) {
//  console.log(chunk.toString());
//});

readStream.pipe(writeStream);
readStream.pipe(gzip).pipe(compressedStream);
