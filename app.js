const express = require( 'express' );
const app = express(); // creates an instance of an express application


// THIS IS THE SERVER

app.use('/', function(req, res, next){
    // queues up the request by building an array or a queue or something
    console.log(req.method, req.url);
    console.log(res.statusCode);

    next();
});


app.get('/', function(req, res, next){
   res.send('hello'); // res creates a new instance of the response object
   next();
});

app.get('/news', function(req, res, next){
    res.send('big news');
    req.url = '123';
    next();
});








app.listen(3000, function(){
    console.log('server is running')

});


