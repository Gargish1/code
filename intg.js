// Client
'use strict';

var request = require('request');

//This is json object simulated for Data Pull
var FFOrder = {
  "FFOrderNo": "FFPHASE2004",                                             //Update the ordernumber here
  "FFProdCode": "MA001",
  "PullSeqNo": "1",
  "Datapull": "IncTax",
  "TrialNumber": "001",
  "Status": "Success",
  "GooglePath": "IntgTestArea\/datapull\/FFPHASE2004\/1\/IncTax\/001",    //Update the ordernumber here
  "BorrowerName": "Rama Krishna",
  "BorrowerEmailID": "a@b.com",
  "BorrowerMobile": "9845098450"
};



//check for the integration link before running ..... http://ffopsauto.herokuapp.com/
var saddr = 'http://ffopsauto.herokuapp.com';
//var saddr = 'http://127.0.0.1:3000/';
//var saddr = 'http://127.0.0.1:3501/';
//var saddr = 'http://127.0.0.1:3000/itauto/';

//Load the request module
var request = require('request');

request({
  url: saddr, //URL to hit
  method: 'PUT',
  json: FFOrder
}, function(error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.statusCode, body);
  }
});
