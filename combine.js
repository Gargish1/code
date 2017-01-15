var fs = require('fs');

function ReadAppend(file, appendFile){
  fs.readFile(appendFile, function (err, data) {
    if (err) throw err;
    console.log('File was read');

    fs.appendFile(file, data, function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');

    });
  });
}
// edit this with your file names
file = '1.xml';
appendFile = '1.pdf';
ReadAppend(file, appendFile);