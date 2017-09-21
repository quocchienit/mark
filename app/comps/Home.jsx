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
			list:
					[
						{GiamKhao:"haha1", Diem: 9.75,},
						{GiamKhao:"haha2", Diem: 10},
						{GiamKhao:"haha3", Diem: 6.75},
						{GiamKhao:"haha4", Diem: 5.75},
						{GiamKhao:"king5", Diem: 10},
						{GiamKhao:"hunter6", Diem: 10},
						{GiamKhao:"hehe7", Diem: 8.25},
						{GiamKhao:"hehe8", Diem: 7.50},
						{GiamKhao:"hehe7", Diem: 6.00},
						{GiamKhao:"hehe8", Diem: 9.00},
					],
			avgMark: 0,
			song:'Tên bài hát siêu dài Tên bài hát s dài Tên bài hát siêu dài ',
			singer:'Tên bài hát siêu dài Tên bài hát siêu d bài hát siêu dài ',
			song_id:'',
			division:'Tên bài hát  ',
			theLoai:'Thể Loại ',

			show:0,

		}


		 this.show = 1;
		 this.current_id = 1;

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


					if (this.current_id != res.data.Id) {
						this.firework = true;

					}

					console.log(this.current_id);
					console.log(res.data.Id);
					console.log(this.firework);



		 			this.current_id = res.data.Id;
		     });
			
			axios.get('http://192.168.23.2:88/Api/GetRecore').then(res => {

					var sum = 0;
					this.show = 1;
					for( var i = 0; i < res.data.length; i++ ){
					    sum += parseInt( res.data[i].Diem, 10 ); 
					    res.data[i].class_animated = 'animated flip';
					    if (res.data[i].Diem == 0) {
					    	this.show = 0;
					    	res.data[i].class_animated = 'animated zoomInLeft';
					    }
					}

					var avg = sum/res.data.length;
    				var avgFixed = avg.toFixed(2)


			 		this.setState({
			 				list: res.data,
			 				avgMark:avgFixed,
			 				show:this.show,
			 			});

			 		if (this.show && this.firework) {
			 			$("#start").click();
			 			this.firework = false;
			 		}
			 		this.firework = false;
		     });
		}.bind(this), 5000);


	}

	render(){
		return (
				<section className="container-fluid">
					<div className="row">
		                <Side  show={this.state.show}    supervisorArray={this.state.list.slice(0, 4)}  />
						<Center avgMark={this.state.avgMark}  theLoai={this.state.theLoai}     division={this.state.division}   song={this.state.song}    singer={this.state.singer}    song_id={this.state.song_id}    />
						<Side show={this.state.show}   supervisorArray={this.state.list.slice(4, 8)}/>
					</div>
				</section>
		);
	}
}


 