var express = require('express');
var app = express();
var routes = require('./route');

app.use('/',routes);
app.listen('9000',()=>console.log('Server on at 9000'));