const express = require('express');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application


const people = [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
];

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
// THIS IS THE SERVER

app.use('/special', function(req, res, next) {
    console.log('Youve reached the speacial area.');
    next();
});

/*app.use(function(req, res, next) {
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
*/

app.get('/', function(req, res, next) {
    //let nunjuckMagic = nunjucks.render('index.html', { people, title: 'An Example' });
    //res.send(nunjuckMagic); // res creates a new instance of the response object
    res.render('index.html', { people, title: 'An Example' });
});

app.get('/news', function(req, res, next) {
    res.send('big news');
    req.url = '123';
});

app.listen(3000, function() {
    console.log('server is running');
});
