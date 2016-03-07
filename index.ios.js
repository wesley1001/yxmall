'use strict';

var React = require('react-native');
var Index = require('./app/ios_src/index.js');

var {
  AppRegistry
} = React;

/**
 * app 入口文件
 */
var yxmall = React.createClass({

  render: function() {
    return (<Index/>);
  }

});

AppRegistry.registerComponent('yxmall', () => yxmall);
