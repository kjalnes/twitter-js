const express = require( 'express' );
const app = express(); // creates an instance of an express application


// THIS IS THE SERVER

app.use('/special', function(req, res, next){
    console.log('Youve reached the speacial area.');
    next();
});

app.use(function(req, res, next){
    // get all
    // queues up the request by building an array or a queue or something
    // console.log(req.method, req.url);
    // console.log(res);

    // res.on('close', function(){
    //     console.log(res.statusCode);
    // }) // console when close
    // res.on('finish', function(){
    //     console.log(res.statusCode);
    // }) // console on finish


    console.log(req.method + '/' + res.statusCode);
    next();
});


app.get('/', function(req, res, next){
   res.send('hello'); // res creates a new instance of the response object

});

app.get('/news', function(req, res, next){
    res.send('big news');
    req.url = '123';
    console.log(req.url);
});



app.use(function(error, req, res, next){
    console.log(error);
    console.log(res);
    console.log('here')
});




app.listen(3000, function(){
    console.log('server is running')

});


