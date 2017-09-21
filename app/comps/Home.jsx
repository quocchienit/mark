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
			list:[],
			avgMark: 0,
			song:'Tên bài hát',
			singer:'Ca sĩ',
			song_id:'',
			division:'Khối',
			theLoai:'Thể Loại ',
			show:0, //Hiển thị điểm

		}

		 this.show = 1; //Hiển thị điểm
		 this.current_id = 1; //Bài hát hiện tại
	}


	componentDidMount(){
		setInterval(function(){

			axios.get('http://192.168.23.2:88/Api/GetExam').then(res => {
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
		 			
		     });
			
			axios.get('http://192.168.23.2:88/Api/GetRecore').then(res => {
					var sum = 0;
					this.show = 1; //Hiển thị điểm
					for( var i = 0; i < res.data.length; i++ ){
					    sum += parseInt( res.data[i].Diem, 10 ); 
					    res.data[i].class_animated = 'animated flip';

					    if (res.data[i].Diem == 0) { //Tồn tại 1 người chưa chấm điểm thì tắt hiển thị điểm
					    	this.show = 0; 
					    }

					}

					var avg = sum/res.data.length;
    				var avgFixed = 0;

    				if (this.show) { //Nếu chưa hiển thị điểm thì không hiển thị tổng điểm
    					var avgFixed = avg.toFixed(2)
    				}

			 		this.setState({
			 				list: res.data,
			 				avgMark:avgFixed,
			 				show:this.show,
			 			});

			 		//Bắn pháo hoa khi show điểm
			 		if (this.show && this.firework) {
			 			$("#start").click();
			 			this.firework = false;
			 		}
			 		
		     });
		}.bind(this), 5000);
	}

	render(){
		return (
				<section className="container-fluid">
					<div className="row">
		                <Side  show={this.state.show}    supervisorArray={this.state.list.slice(0, 5)}  />
						<Center avgMark={this.state.avgMark}  theLoai={this.state.theLoai}     division={this.state.division}   song={this.state.song}    singer={this.state.singer}    song_id={this.state.song_id}    />
						<Side show={this.state.show}   supervisorArray={this.state.list.slice(5, 10)}/>
					</div>
				</section>
		);
	}
}


 