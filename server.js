var express = require("express");

var app = express();

app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })



 app.get('/public/js/fakepeople.json', (req, res) => {
  res.sendFile( __dirname + "/public/js/" + "fakepeople.json" );
 });

var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:", port);
});


  