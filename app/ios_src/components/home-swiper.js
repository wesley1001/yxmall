'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');

var {
	StyleSheet,
	Image,
	Text,
	View,
} = React;

module.exports = React.createClass({

	getInitialState: function() {
		return {
			sliderImgs: [
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/394.jpg'},
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/396.jpg'},
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/384.jpg'},
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/320.jpg'},
			]
		}
	},

	render: function() {
		var slides = this.state.sliderImgs.map(function(item, index){
			return <Image key={'swiper' + index} style={styles.slide} source={item}/>;
		});
		return (
			<Swiper style={styles.wrapper} height={240} autoplay={true} autoplayTimeout={3}>
				{slides}
	        </Swiper>
		);
	}

});

var styles = StyleSheet.create({
	wrapper: {
	},
	slide: {
		flex: 1,
		resizeMode: 'stretch'
	}
});