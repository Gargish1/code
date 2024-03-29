
'use strict';

require('dotenv').config({path: __dirname + '/../.env'});
const API_KEY = process.env.NEXMO_API_KEY;
const API_SECRET = process.env.NEXMO_API_SECRET;
const FROM_NUMBER = process.env.EXAMPLE_FROM_NUMBER;

const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(process.env.PORT || 3000);

const nexmo = new Nexmo({
  apiKey:  834b2d32,
  apiSecret: 852d87e6a631a16e,
}, {debug: true});

app.post('/send', (req, res) => {
  // Sending SMS via Nexmo
  nexmo.message.sendSms(
    FROM_NUMBER, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}}
  );
});

    Contact GitHub API Training Shop Blog About 

    © 2016 GitHub, Inc. Terms Privac