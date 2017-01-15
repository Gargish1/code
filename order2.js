var fs = require('fs');
fs.writeFile("new1.txt", '"FFOrderNo": "FFUQ100" \n "FFProdCode": "MA001" \n "PullSeqNo": "1" \n  "TrialNumber": "001" \n  "Status": "Success" \n "BorrowerName": "Rama Krishna" \n "BorrowerEmailID": "a@b.com", \n   "BorrowerMobile": "9845098450"', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 