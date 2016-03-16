'use strict';
//主屏幕文件，起到最外层控制作用

import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';

var Header = require('./components/Header');

class MainScreen extends Component {

  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }

}

module.exports = MainScreen;
