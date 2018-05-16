import React, { Component } from 'react';
class PersonSearch extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<h2>PersonSearch</h2>
				<button onClick={this.props.handleClick}>Search</button>
			</div>
		)
	}
}

export default PersonSearch;