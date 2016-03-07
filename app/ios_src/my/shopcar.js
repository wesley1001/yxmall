'use strict';

var React = require('react-native');

var {
	View,
	Text,
	WebView,
} = React;

/**
 * 购物车
 */
module.exports = React.createClass({
	render: function() {
		return (
			<WebView
				ref='ref'
				url='http://m.yuexing.com/my/?mod=cart'
				renderError={this._renderError}
			/>
		);
	},

	_renderError: function() {
		AlertIOS.alert('温馨提示', '网络实在是太慢了！', [{
			text: '确定',
			onPress: () => console.log('按钮按下事件!')
		}]);
	},
});
