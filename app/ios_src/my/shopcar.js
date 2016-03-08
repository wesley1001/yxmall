'use strict';

var React = require('react-native');

var MyShopcar = require('../components/MyShopcar.js')

var {
	View,
	Text,
	NavigatorIOS,
} = React;

/**
 * 购物车
 */
module.exports = React.createClass({

	getInitialState: function() {
		return {
			dataList: []
		};
	},

	render: function() {
		var initialRoute = {
			component: MyShopcar,
			title: '我的购物车',
			passProps: {...this.props}
		};
		return (
			<NavigatorIOS
				ref='shopcarNav'
				initialRoute={initialRoute}
				style={{
					flex: 1
				}}
			/>
		);
	},

});
