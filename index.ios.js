'use strict';

var React = require('react-native');

var {
	AppRegistry
} = React;

var MainScreen = require('./app/ios_src/MainScreen.js');

/**
 * app IOS 入口文件
 */
var yxmall = React.createClass({

  render() {
    return <MainScreen/>
  }

});

AppRegistry.registerComponent('yxmall', () => yxmall);
