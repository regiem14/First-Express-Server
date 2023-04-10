const express = require('express');

const app = express();

app.get('/', function(request, res){
    console.log(request);
    // console.log(typeof request);
    // res.send('<h1>Hello World. This is my <em>firstSever</em> using Express</h1>')
})
app.listen(3000,function(){
    console.log('Test Port 3000')
});