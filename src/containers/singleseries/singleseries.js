import React, { Component } from 'react';
import Loader from '../../components/loader/loader.js';
import 'whatwg-fetch';

class SingleSeries extends Component {
	
	state = {
	  show: null,
	}

   componentDidMount() {
   	   //const { id } = this.props.match.params.replace(/:/g,'');
	   const { id } =this.props.match.params;	
	   console.log(id);
	   fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
	  .then((response) => response.json())
	  .then(json => this.setState({show:json}))
	  	console.log(this.state.show)
		}

	render() {
		const {show} = this.state;
		console.log(show)
		return (
			<div>
				<p>Single Series { this.props.match.params.id }</p>
				{ show===null && <Loader /> }
				{ show !==null && 
					<div>
						<p>Show has been loaded!</p>
						<p> Premer - {show.premiered} </p>
						<p>Name: {show.name}</p>
						<p>Rating: {show.rating.average}</p>
						<p><img alt="moviePoster" src={show.image.medium}/></p>
					</div>
				}
			</div>
			); 
			}

}
export default SingleSeries;