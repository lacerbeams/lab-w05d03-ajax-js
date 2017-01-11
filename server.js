var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static Routes
// GET '/' => '/public/index.html'
app.use(express.static(__dirname + '/public'));

// Data
var challenges = require('./lib/challenges');
// GET '/challenges' =>
// Dynamic Routes


app.get('/challenges', function(req, res) {
  if (req.query.next === 'true') {
    var fiveSix = challenges.splice(0, 2);
    res.json(fiveSix);
  } else {
  var firstFour = challenges.splice(0, 4);
  res.json(firstFour);
  }
});




var port = 3000;
app.listen(port, function(){
  console.log("listening on port " + port);
});
