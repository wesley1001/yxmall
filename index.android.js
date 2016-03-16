'use strict';

import React,{
  AppRegistry,
  Component,
} from 'react-native';

import MainScreen from './app/android_src/MainScreen.js';

class yxmall extends Component {
  render() {
    return <MainScreen/>
  }
}

AppRegistry.registerComponent('yxmall', () => yxmall);
