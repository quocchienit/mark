import React from 'react';
import ReactDOM from 'react-dom';


export default class Canvas extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<div id="wrapper_canvas">
				<button id="start">start</button>
					<div id="gui"></div>		
					<div id="canvas-container">
					  <div id="mountains2"></div>
					  <div id="mountains1"></div>
					  <div id="skyline"></div>
					</div>
				</div>
			</div>
		);
	}
}


