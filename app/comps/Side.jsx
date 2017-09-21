import React from 'react';
import ReactDOM from 'react-dom';

import Supervisor from './Supervisor.jsx';



export default class Side extends React.Component{

	constructor(props){
		super(props);
		this.showMark = this.showMark.bind(this);
	}

	componentWillReceiveProps(nextProps) {

		// console.log(nextProps);
  }


  	showMark(Diem, show){
  		if (show) {
  			return Diem
  		}

  		var showLogo = -2; 

		if (Diem) {
			showLogo = -1; //nếu có điểm thì hiển thị logo. Để -1 vì để không trùng với điểm trả về.
			return  showLogo;
		}
		
		return showLogo
	
	}

	render(){
		return (
				<div className="col text-center">
				{this.props.supervisorArray.map((item, i) =>
		                	<Supervisor key={i} classAnimated={item.class_animated}  jobTitle={item.ChucDanh}  supervisorName={item.GiamKhao} supervisorMark={this.showMark(item.Diem,this.props.show)}  /> 
		        )}
				</div>
		);
	}
}




					