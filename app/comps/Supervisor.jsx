import React from 'react';
import ReactDOM from 'react-dom';

export default class Supervisor extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		if (this.props.supervisorMark == -1) {
				return (
				<div className="supervisor text-center ">
						<div className="mark_wrapper">
						<p className={this.props.classAnimated} ><img src="http://localhost:3000/lib/logo.png"/>	</p>
						</div>
						<div className="name_wrapper">
							<p>{this.props.jobTitle}</p>
							<p>{this.props.supervisorName}</p>
						</div>
						
			
				</div>
				);

		}
		else if (this.props.supervisorMark == -2) {
			return (
				<div className="supervisor text-center ">
						<div className="mark_wrapper">
						<p className="wait_show" ><img src="http://localhost:3000/lib/logo-number1.png"/>	</p>
						</div>
						<div className="name_wrapper">
							<p>{this.props.jobTitle}</p>
							<p>{this.props.supervisorName}</p>
						</div>
						
			
				</div>
				);

		}
		else
		{
				return (
				<div className="supervisor text-center ">
						<div className="mark_wrapper">
						<p className={this.props.classAnimated} >{this.props.supervisorMark}</p>
						</div>
						<div className="name_wrapper">
						<p>{this.props.jobTitle}</p>
						<p>{this.props.supervisorName}</p>
						</div>
						
			
				</div>
				);
		}



	




	}
}




					

