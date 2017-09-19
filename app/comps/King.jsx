import React from 'react';
import ReactDOM from 'react-dom';


export default class King extends React.Component{
	constructor(props){
		super(props);
		this.del = this.del.bind(this);
	}

	del(){
		this.props.remove(this.props.index);
	}

	render(){
		return (
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.del}> Delete</button>
			</div>
		);
	};
}
