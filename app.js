var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

const port = 3000;


app.use (express.static('public'));


app.get ('/', (req,res) => {
    console.log("index")
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || port, () => console.info('listening on port ' + port))
