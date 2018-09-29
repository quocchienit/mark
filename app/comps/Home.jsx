import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Side from './Side.jsx';
import Center from './Center.jsx';

import $ from "jquery";

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list:[
						{GiamKhao:"TGĐ Ts. Trần Quí Thanh", Diem: 0, ChucDanh:''},
						{GiamKhao:"PTGĐ Trần Uyên Phương", Diem: 0, ChucDanh:''},
						{GiamKhao:"Nguyễn Văn Tư", Diem: 0, ChucDanh:'GĐK R&D kiêm Dự án'},
						{GiamKhao:"Ca sĩ Thu Hồng", Diem: 0, ChucDanh:''},
						{GiamKhao:"Ca sĩ – nhạc sĩ Sỹ Luân", Diem: 0, ChucDanh:''},
						{GiamKhao:"NSƯT Thy Phương", Diem: 0, ChucDanh:''},
						{GiamKhao:"Ca sĩ Khánh Phương", Diem: 0, ChucDanh:''},
						{GiamKhao:"Phan Hồng Sơn", Diem: 0, ChucDanh:'Nhạc sĩ – NSƯT'},
						{GiamKhao:"Ca sĩ A Tuân", Diem: 0, ChucDanh:''},

			],
			avgMark: 0,
			song:'-',
			singer:'-',
			song_id:'',
			division:'-',
			theLoai:'-',
			show:0, //Hiển thị điểm
			animated_avgMark:"", 


		}

		 this.show = 1; //Hiển thị điểm
		 this.current_id = 1; //Bài hát hiện tại

		 this.getExam.bind(this);
		 this.getRecore.bind(this);

	}


	//Lấy bài hát mới
	getExam(res) {
		this.setState({
			song:res.data.Name,
			singer:res.data.UserName,
			song_id:res.data.Id,
			division:res.data.Division,
			theLoai:res.data.TheLoai,
		});

		//Nếu chuyển bài mới mở lại chức năng bắn pháo hoa
		if (this.current_id != res.data.Id) {
			this.firework = true;
			this.current_id = res.data.Id;
		}
	}

	//Lấy điểm chấm từ ban giám khảo
	getRecore(res){
				var sum = 0;
					this.show = 1; //Hiển thị điểm
					for( var i = 0; i < res.data.length; i++ ){
					    sum += parseFloat( res.data[i].Diem); 

					    res.data[i].class_animated = 'animated flip';

					    if (res.data[i].Diem == 0) { //Tồn tại 1 người chưa chấm điểm thì tắt hiển thị điểm
					    	this.show = 0; 
					    }

					}

					var avg = sum/res.data.length;
    				var avgFixed = 0;
    				var edit_animated_avgMark ="";

    				if (this.show) { //Nếu chưa hiển thị điểm thì không hiển thị tổng điểm
    					avgFixed = avg.toFixed(2);
    					edit_animated_avgMark = 'animated jackInTheBox';
    				}

			 		this.setState({
			 				list: res.data,
			 				avgMark:avgFixed,
			 				show:this.show,
			 				animated_avgMark: edit_animated_avgMark,

			 			});

			 		//Bắn pháo hoa khi show điểm
			 		if (this.show && this.firework) {
			 			$("#start").click();
			 			this.firework = false;
			 		}
	}

	readTextFile(file){
			var rawFile = new XMLHttpRequest();
			rawFile.open("GET", file, false);
			rawFile.onreadystatechange = function ()
			{
				if(rawFile.readyState === 4)
				{
					if(rawFile.status === 200 || rawFile.status == 0)
					{
						var allText = rawFile.responseText;
						alert(allText);
					}
				}
			}
			rawFile.send(null);
	}

	componentDidMount(){

		setInterval(function(){

			var url_string = window.location.href;
			var url = new URL(url_string);
			var isFile = url.searchParams.get("isFile");

			if(isFile)
			{
				axios.get('http://localhost:3000/GetExam').then(res => {
					this.getExam(res);
				 });
				 
				axios.get('http://localhost:3000/GetRecore').then(res => {
					this.getRecore(res);
				});
			}
			else{
			axios.get('http://192.168.0.12:88/Api/GetExam').then(res => {
					this.getExam(res);
		     });
			
			axios.get('http://192.168.0.12:88/Api/GetRecore').then(res => {
					this.getRecore(res);
			 });
			}

		}.bind(this), 3000);
	}


	converSupervisorArray  (supervisorArray)  {
		let leftArray = [];
		let rightArray = [];

		for (let index = 0; index < supervisorArray.length; index++) {
			const element = supervisorArray[index];
			if(index%2){
				rightArray.push(element);
			}
			else{
				leftArray.push(element);
			}
			
		}

		return {
			leftArray: leftArray,
			rightArray: rightArray,
		};


	}

	render(){
		let supervisorArray = this.converSupervisorArray(this.state.list);

		var classWrapper = "row four";

		if(supervisorArray.leftArray.length > 4)
		{
			var classWrapper = "row five";
		}

		return (
				<section className="container-fluid">
					<div className={classWrapper}>
		                <Side  show={this.state.show}    supervisorArray={supervisorArray.leftArray}  />
						<Center    animated_avgMark={this.state.animated_avgMark}  avgMark={this.state.avgMark}  theLoai={this.state.theLoai}     division={this.state.division}   song={this.state.song}    singer={this.state.singer}    song_id={this.state.song_id}    />
						<Side show={this.state.show}   supervisorArray={supervisorArray.rightArray}/>
					</div>
				</section>
		);
	}
}


 