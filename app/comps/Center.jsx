
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
						<div className="show-song row" >
							<div className="col-2">
								<p><span className="label-name col">Tiết mục: </span></p>
							</div>
							<div className="col-10">
								<p><span className="song-name col">	{this.props.song} </span></p>
							</div>
							<p><span className="label-name">Khối: </span><span className="singer-name">{this.props.division} - {this.props.theLoai}</span> </p>
						</div>

						<div className="avgMark ">
							<p className={this.props.animated_avgMark}> {this.props.avgMark}</p>
						</div>
				</div>
		);
		}

		return (
				<div className="col-6 text-center mark-center">
						<div className="show-song row" >
							<div className="col-2">
								<p><span className="label-name col">Tiết mục: </span></p>
							</div>
							<div className="col-10">
								<p><span className="song-name col">	{this.props.song} </span></p>
							</div>
							<div className="col-2">
								<p><span className="label-name col">Khối: </span></p>
							</div>
							<div className="col-10">
								<p><span className="singer-name col">	{this.props.division} - {this.props.theLoai} </span></p>
							</div>

						</div>





						<div className="avgMark">
							<p></p>
						</div>
				</div>
		);

		




	}
}




					