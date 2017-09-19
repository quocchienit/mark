import React from 'react';
import ReactDOM from 'react-dom';

export default class Supervisor extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
				<div className="supervisor text-center">
						
						<div className="mark_wrapper">
						<p>{this.props.supervisorMark}</p>
						</div>
						<div className="name_wrapper">
						<p>{this.props.supervisorName}</p>
						</div>
						
				</div>
		);
	}
}




					

