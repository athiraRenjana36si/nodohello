var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(4000, function(){
  console.log('Magic is happening on port 4000')
});
