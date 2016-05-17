'use strict';

//require('continuation-local-storage');

var kraken = require('kraken-js');
var express = require('express');
var brogan = require('brogan-paypal');
var spec = require('./lib/spec');
var app = express();
var port = 7000;
var path = require('path');
var bodyParser = require('body-parser');
var ReactDOM = require('react-dom');
app.use(kraken(spec));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/', express.static(path.join(__dirname, 'public')));

app.on('start', function onStart(argument) {
    app.listen(port, function (err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log('server started');
        }
    });
});
