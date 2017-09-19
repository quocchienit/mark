import React from 'react';
import ReactDOM from 'react-dom';

import NoteForm from './NoteForm.jsx';
import King from './King.jsx';



export default class List extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			"mang" : ["123","chien", "789"],
		}
		this.del = this.del.bind(this);
		this.add = this.add.bind(this);

	}

	del(index){
		this.state.mang.splice(index,1);
		this.setState(this.state);

	}

	add(text){
		this.state.mang.push(text);
		this.setState(this.state);
	}

	render(){
		return (
			<div>
				<NoteForm  addNote={this.add}/>
				{this.state.mang.map((item, i) =>
                <King key={i} remove={this.del} index={i}>{item}</King>
              	)}
				
			</div>
		);
	}
}