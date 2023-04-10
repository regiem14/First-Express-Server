const express = require('express');

const app = express();

app.get('/', function(req, res){
    // console.log(request);
    // console.log(typeof request);
    res.send('<h1>Hello World. This is my <em>firstSever</em> using Express</h1>')
})

app.get('/contact',function(req,res){
    res.send("Hi, please do contact me at : lonebeginner.com");
});

app.get('/aboutMe',function(req,res){
    res.send("I'm a freelance javascript developer. I interesting code");
});

app.listen(3000,function(){
    console.log('Test Port 3000')
});