var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getUser', function (req, res,next) {
  res.send('ENTRO A getUser!!!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});