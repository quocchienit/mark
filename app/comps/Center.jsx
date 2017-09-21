
import React from 'react';
import ReactDOM from 'react-dom';


export default class Center extends React.Component{

	constructor(props){
		super(props);
		
	}

	render(){

		if (this.props.avgMark) {
			return (
				<div className="col-6 text-center mark-center">
						<div className="show-song">
							<p><span className="label-name">Tên bài hát: </span><span className="song-name">	{this.props.song} </span></p>
							<p><span className="label-name">Thí sinh: </span><span className="singer-name">{this.props.division} - {this.props.theLoai}</span> </p>
						</div>
						<div className="avgMark">
							<p> {this.props.avgMark}</p>
						</div>
				</div>
		);

		}


		return (
				<div className="col-6 text-center mark-center">
						<div className="show-song">
							<p><span className="label-name">Tên bài hát: </span><span className="song-name">	{this.props.song} </span></p>
							<p><span className="label-name">Thí sinh: </span><span className="singer-name">{this.props.division} - {this.props.theLoai}</span> </p>
						</div>
						<div className="avgMark">
							<p><img src="http://localhost:3000/lib/logo.png"/></p>
						</div>
				</div>
		);

		




	}
}




					