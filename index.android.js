'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Component,
  View,
  Text
} = React;

// var Index = require('./app/android_src/index.js');

var yxmall = React.createClass({
  render: function() {
    return <View>
      <Text>您当前的环境是：android</Text>
    </View>
  }
});

AppRegistry.registerComponent('yxmall', () => yxmall);
