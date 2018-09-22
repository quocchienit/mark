var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(3000, function(){
	console.log('sever start');
});


var fs = require('fs')


app.get('/', function(req,res){
	res.render('home');
})


app.get('/GetExam', function(req,res){
		var data = fs.readFileSync('public/GetExam.txt', 'utf8');
		res.send(data);
})


app.get('/GetRecore', function(req,res){
		var data = fs.readFileSync('public/GetRecore.txt', 'utf8');
		res.send(data);
})