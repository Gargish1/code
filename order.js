var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {

 

    fs.writeFile('message9.txt', ' "FFOrderNo": "FFUQ100" \n "FFProdCode": "MA001" \n "PullSeqNo": "1" \n  "TrialNumber": "001" \n  "Status": "Success" \n "BorrowerName": "Rama Krishna" \n "BorrowerEmailID": "a@b.com", \n   "BorrowerMobile": "9845098450"', function (err) {

        if (err) throw err;

        console.log('It\'s saved! in same location.');

    });

 

});

server.listen(1337,'127.0.0.1');

console.log('server running...')