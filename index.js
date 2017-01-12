'use strict'

//====================================================================================================
// Libralies
//====================================================================================================
var express = require('express');
var path = require('path');

//====================================================================================================
// Configuration
//====================================================================================================
var app = express();
app.set('port', (process.env.PORT || 5000));

//====================================================================================================
// Served Contents
//====================================================================================================
app.use(express.static(__dirname + '/angular1/dist'));

app.use('/angular1', express.static(path.join(__dirname, 'angular1/dist')));
app.use('/angular2', express.static(path.join(__dirname, 'angular2/dist')));
app.use('/react-redux', express.static(path.join(__dirname, 'react-redux/dist')));

//====================================================================================================
// Start Server
//====================================================================================================
app.listen(app.get('port'), function() {
  console.log('Served: http://localhost:' + app.get('port'));
});

app.get('/', function(request, response) {
  response.redirect('/angular1');
});
