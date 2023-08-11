import React, { Component } from "react";
import SeriesList from '../../components/SeriesList/serieslist.js';
import Loader from '../../components/loader/loader.js';

class Series extends Component {
	state = {
    series: [],
    seriesName: '',
    isFetching: false
  }


onSeriesInputChange = e => {
  this.setState({ seriesName: e.target.value, isFetching: true})

  fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
  .then((response) => response.json() )
  .then(json => this.setState({series:json, isFetching: false}))

}

	render() {
		const { series, seriesName, isFetching } = this.state;

		return (
			<div>
			<div>
		Number of film/series available are {series.length}
		<input value={seriesName} 
		type="text" onChange={this.onSeriesInputChange} />
			</div>
			{
				series.length === 0 && seriesName.trim() ==='' 
				&& 
				<p>Please enter a film title in the text box</p>
			}
			{
				!isFetching && series.length === 0 && seriesName.trim() !==''
				&&
				<p>No TV film or series is available for this name</p>
			}

			{
				isFetching && <Loader />
			}

			{
				!isFetching && <SeriesList list={this.state.series} />
			}
			</div>
			)
	}

}

export default Series;