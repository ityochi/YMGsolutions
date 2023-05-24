var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

const port = 3000;


app.use (express.static('public'));


app.get ('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get ("/*", (req, res) => {
    res.status(404).send("page not found")
}) 


app.listen(process.env.PORT || port, () => console.info('listening on port ' + port))
