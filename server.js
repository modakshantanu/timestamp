// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var months = [{index:1,short:"jan",long:"january"},
             {index:2,short:"feb",long:"february"},
             {index:3,short:"mar",long:"march"},
             {index:4,short:"apr",long:"april"},
             {index:5,short:"may",long:"may"},
             {index:6,short:"jun",long:"june"},
             {index:7,short:"jul",long:"july"},
             {index:8,short:"aug",long:"august"},
             {index:9,short:"sep",long:"september"},
             {index:10,short:"oct",long:"october"},
             {index:11,short:"nov",long:"november"},
             {index:12,short:"dec",long:"december"}];
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
  if(query.search(/^\d+$/)>=0){
    var date = new Date(parseInt(query,10));
    
    result.unixtime = parseInt(query,10);
    
    result.natural = months[date.getMonth()].long + " "+date.getDate()+","+date.getFullYear();
  }else if(query.search(/^(\w+) (\w{1,2})[ ,](\w{4})$/)>=0){
    var match = query.match(/^(\w+) (\w{1,2})[ ,](\w{4})$/);
    
    var month = 0;
    var date = 0;
    var year = 0;
    
    months.forEach(function(e){
      if(match[1].toLowerCase()==e.short||match[1].toLowerCase()==e.long){
         month = e.index;
      }
    })
    
    date = parseInt(match[2],10);
    year = parseInt(match[3],10);
    
    var date = new Date(year,month-1,date);
    result.unixtime= date.getTime();
    result.natural = match[0];
  }
  res.send(result);
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
