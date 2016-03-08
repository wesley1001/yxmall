'use strict';

var React = require('react-native');

var {
	View,
	Text
} = React;

var MyShopcar = React.createClass({

	render: function() {

		return (
			<View style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Text>你还没有选购商品，马上去选购商品</Text>
			</View>
		);
	}

});

module.exports = MyShopcar;