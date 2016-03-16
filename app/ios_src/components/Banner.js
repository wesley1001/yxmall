'use strict';

const BANNER_IMGS = [
	require('../../../images/banner/1.jpg'),
	require('../../../images/banner/2.jpg'),
	require('../../../images/banner/3.jpg'),
	require('../../../images/banner/4.jpg'),
	require('../../../images/banner/5.jpg')
]

var React = require('react-native');
var ViewPager = require('react-native-viewpager');

var {
	StyleSheet,
	Image,
	Text,
	View,
} = React;

module.exports = React.createClass({

	getInitialState: function() {
		var ds = new ViewPager.DataSource({
			pageHasChanged: (p1, p2) => p1 !== p2
		});
		return {
			dataSource: ds.cloneWithPages(BANNER_IMGS)
		}
	},

	render: function() {
		return (
			<ViewPager style={styles.wrapper}
				dataSource={this.state.dataSource}
				renderPage={(data, pageId) => {
					return <Image source={data} style={styles.slide}/>
				}}
				isLoop={true}
				autoPlay={true}/>
		);
	}

});

var styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	slide: {
		flex:1,
		height:250,
		resizeMode:'stretch'
	}
});