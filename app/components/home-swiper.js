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
			swiperImages: [
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/394.jpg'},
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/396.jpg'},
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/384.jpg'},
				{uri: 'http://www.yuexing.com/static/data/files/mall/ad/logo/320.jpg'},
			]
		}
	},

	render: function() {
		return (
			<Swiper style={styles.wrapper} height={240} autoplay={true} autoplayTimeout={3}>
				{this.state.swiperImages.map(function(item, index){
					return (<Image key={'swiper' + index} style={styles.slide} resizeMode='stretch' source={item}/>);
				})}
	        </Swiper>
		);
	}

});

var styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	slide: {
		flex: 1,
	}
});