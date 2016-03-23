'use strict';

import React,{
  AppRegistry,
  Component,
  View,
  Text
} from 'react-native';

class yxmall extends Component {
	render() {
		return (
			<View style={{
				flex:1,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text>你好，欢迎访问月星智慧商城。</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('yxmall', () => yxmall);
