'use strict';

var React = require('react-native');

var {
	WebView,
	AlertIOS,
} = React;

/**
 * 3D商城
 */
module.exports = React.createClass({

	render: function() {
		return (
			<WebView
				ref='webview'
				automaticallyAdjustContentInsets={false}
				url='http://3d.yuexing.com'
				renderError={this._renderError}
				renderLoading={() => this._renderLoading}
				scalesPageToFit={true}
			/>
		);
	},

	_renderError: function() {
		AlertIOS.alert('温馨提示', '网络实在是太慢了！', [{
			text: '确定',
			onPress: () => console.log('按钮按下事件!')
		}]);
	},

	_renderLoading: function() {
		AlertIOS.alert('温馨提示', '加载中...！', [{
			text: '确定',
			onPress: () => console.log('按钮按下事件!')
		}]);
	}

});
