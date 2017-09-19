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
						{GiamKhao:"haha1", Diem: 0},
						{GiamKhao:"haha2", Diem: 0},
						{GiamKhao:"haha3", Diem: 0},
						{GiamKhao:"haha4", Diem: 0},
						{GiamKhao:"king5", Diem: 0},
						{GiamKhao:"hunter6", Diem: 0},
						{GiamKhao:"hehe7", Diem: 0},
						{GiamKhao:"hehe8", Diem: 0},
					],
			avgMark: 0,
			song:'',
			singer:'',
			song_id:'',
		}
	}

	

	componentDidMount(){
		setInterval(function(){
			axios.get('http://10.86.18.166:81/Api/GetRecore?ExamId=8').then(res => {
				
				if (res.data[0].Diem) {
					var sum = 0;
					for( var i = 0; i < res.data.length; i++ ){
					    sum += parseInt( res.data[i].Diem, 10 ); 
					}

					var avg = sum/res.data.length;

			 		this.setState({
			 				list:res.data,
			 				avgMark:avg,

			 			});
			 		// $("#start").click();
				}
		     });

			axios.get('http://10.86.18.166:81/Api/GetExam').then(res => {


				this.setState({
			 				song:res.data.Name,
			 				singer:res.data.UserName,
			 				song_id:res.data.Id
			 			});
				
		     });


		}.bind(this), 3000);


	}

	render(){
		return (
				<section className="container-fluid">
					<div className="row">
		                <Side  supervisorArray={this.state.list.slice(0, 4)}  />
						<Center avgMark={this.state.avgMark}    song={this.state.song}    singer={this.state.singer}    song_id={this.state.song_id}    />
						<Side supervisorArray={this.state.list.slice(4, 8)}/>
					</div>
				</section>
		);
	}
}


 