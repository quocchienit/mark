
import React from 'react';
import ReactDOM from 'react-dom';


export default class Center extends React.Component{

	constructor(props){
		super(props);
		
	}

	render(){
		return (
				<div className="col-6 text-center">
						<div>
						<h1> HỘI THI VĂN NGỆ </h1>
						</div>
							<div className="">
							<p>{this.props.song} </p>
							<p>{this.props.singer} </p>
							
							<div>
							<p> {this.props.avgMark}</p>
							</div>

							
							
							
							
							</div>
				</div>
		);
	}
}




					