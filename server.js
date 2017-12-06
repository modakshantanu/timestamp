// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var months = [{index:1,short:"Jan",long:"January"},
             {index:2,short:"Feb",long:"February"},
             {index:3,short:"Mar",long:"March"},
             {index:4,short:"Apr",long:"April"},
             {index:5,short:"May",long:"May"},
             {index:6,short:"Jun",long:"June"},
             {index:7,short:"Jul",long:"July"},
             {index:8,short:"Aug",long:"August"},
             {index:9,short:"Sep",long:"September"},
             {index:10,short:"Oct",long:"October"},
             {index:11,short:"Nov",long:"November"},
             {index:12,short:"Dec",long:"December"}];
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));



// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});
app.get("/:id",function(req,res){
  
  
  var query = req.params.id;
  var result = {unixtime:null,natural:null};
  console.log("12334".search(/^\d+$/));
  if(query.search(/^\d+$/)>=0){
    console.log("success");
    result.unixtime = parseInt(query,10);
  }
  res.send(result);
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
