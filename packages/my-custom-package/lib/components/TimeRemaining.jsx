// time remaining component
// calculates and displays the time remaining until a post "dies" (posts "live" for 24 hourss)

// add React
import React, { PropTypes, Component } from 'react';

// create component
// export const TimeRemaining = (props) => (
// export const TimeRemaining = (props) => (
// 	<div>
// 		{props.createdAt.toString()}
// 	</div>
// )


export const TimeRemaining = (props) => {
	const currentTime = new Date();
	const timeRemaining = new Date();
	timeRemaining.setTime(currentTime.getTime()-props.postedAt.getTime() );
	return(
		<div>
			{timeRemaining.toString()}
		</div>
	)
}


// export component
// any files that *import* the file TimeRemaining.js, will get the "TimeRemaining" component by *default*
// export default TimeRemaining;




// create component
// var TimeRemaining = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			secondsRemaining: 0
// 		};
// 	},
// 	tick: function() {
// 		this.setState({secondsRemaining: this.state.secondsRemaining - 1});
// 		if (this.state.secondsRemaining <= 0) {
// 			clearInterval(this.interval);
// 		}
// 	},
// 	componentDidMount: function() {
// 		this.setState({ secondsRemaining: this.props.secondsRemaining });
// 		this.interval = setInterval(this.tick, 1000);
// 	},
// 	componentWillUnmount: function() {
// 		clearInterval(this.interval);
// 	},
// 	render: function() {
// 		return (
// 			<div>Seconds Remaining: {this.state.secondsRemaining.toString()}</div>
// 		);
// 	}
// });

// make this module's properties and functions (above) available to other files
// module.exports = TimeRemaining;
// export default TimeRemaining;