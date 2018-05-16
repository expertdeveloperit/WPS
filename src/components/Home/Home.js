import React, { Component } from 'react';
import PersonSearch from '../personSearch/PersonSearch';
import SearchResults from '../personSearch/SearchResults';

class Home extends Component{
	constructor(props){
	super(props);
	this.state={results:false}
	this.showResults=this.showResults.bind(this);
	}
	showResults(){
		console.log('test')
		this.setState({results:true})
	}
	render(){
		return(
			<div>
				<PersonSearch handleClick={this.showResults}/>
				{this.state.results && 
					<SearchResults />
				}
			</div>
		)
	}
}

export default Home;