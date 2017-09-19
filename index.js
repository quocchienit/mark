var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(3000, function(){
	console.log('sever start');
});

app.get('/', function(req,res){
	res.render('home');
})


app.get('/update', function(req,res){
		var a =			[
						{name:"haha1", mark: 51},
						{name:"haha2", mark: 62},
						{name:"haha3", mark: 73},
						{name:"haha4", mark: 84},
						{name:"king5", mark: 95},
						{name:"hunter6", mark: 14},
						{name:"hehe7", mark: 14},
						{name:"hehe8", mark: 15},
					]

		res.send(a);
})