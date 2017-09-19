import React from 'react';
import ReactDOM from 'react-dom';


export default class NoteForm extends React.Component{
	constructor(props){
		super(props);
		this.add = this.add.bind(this);
	}
	add(){
		this.props.addNote(this.refs.txt.value);
		this.refs.txt.value ="";
	}
	render(){
		return (
			<div>
					<input type="text" ref="txt" placeholder="Enter"/>
					<button onClick={this.add}>Add</button>		
			</div>
		);
	}

}

