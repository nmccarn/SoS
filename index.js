/* global process __dirname*/
var express = require('express');
var app = express();
var options = require('./options.js');
var userRouter = require('./src/routes/userRoutes.js');
var port = process.env.PORT || options.PORT;

app.use(express.static('public'));
// To enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');

    next();
});

// routes
app.use('/user', userRouter);

app.set('views', './public/app/views');

app.get('/', function(req, res) {
    //res.render('index.html', options.options);
    res.sendFile(__dirname + '/public/app/views/index.html',options.options);
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
