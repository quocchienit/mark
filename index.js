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
						{GiamKhao:"haha1", Diem: 4},
						{GiamKhao:"haha2", Diem: 7.25},
						{GiamKhao:"haha3", Diem: 9.75},
						{GiamKhao:"haha4", Diem: 84},
						{GiamKhao:"king5", Diem: 2},
						{GiamKhao:"hunter6", Diem: 3},
						{GiamKhao:"hehe7", Diem: 14},
						{GiamKhao:"hehe8", Diem: 8},
					]

		res.send(a);
})