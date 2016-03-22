'use strict';

import React,{
	Component,
	Text,
	ListView,
	View,
	StyleSheet,
	TouchableHighlight,
	Image,
	AlertIOS
} from 'react-native';

import { Icon } from 'react-native-icons';

import ListGroupItem from '../components/ListGroupItem.js';

class MyIndex extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var items = [
			{
				value: '全部订单',
				icon: 'ion|compose',
				onPress: function(event){
					console.log('全部订单')
				}
			},
			{
				value: '聊天记录',
				icon: 'ion|chatboxes',
				onPress: function(event){
					console.log('聊天记录')
				}
			},
			{
				value: '我的收藏',
				icon: 'ion|heart',
				onPress: function(event){
					console.log('我的收藏')
				}
			},
			{
				value: '我的足迹',
				icon: 'ion|ios-world-outline',
				onPress: function(event){
					console.log('我的足迹', event);
				}
			},
			{
				value: '收货地址',
				icon: 'ion|help-buoy',
				onPress: function(event){
					console.log('收货地址', event);
				}
			},
			{
				value: '红包管理',
				icon: 'ion|briefcase',
				onPress: function(event){
					console.log('红包管理', event);
				}
			},
			{
				value: '基本设置',
				icon: 'ion|ios-cog-outline',
				onPress: function(event){
					console.log('基本设置', event);
				}
			},
		]
		return (
			<ListGroupItem items={items} renderHeader={this._renderHeader} onItemPress={this._onItemPress}/>
		);
	}

	_renderHeader() {
		return (
			<View style={styles.photoContainer}>
				<Image style={styles.photo} source={{uri:'http://qlogo3.store.qq.com/qzone/739694218/739694218/100?1394897497'}} />
				<Text style={styles.phone}>18501687134</Text>
			</View>
		);
	}

	// _onPressHandler() {
	// 	AlertIOS.alert('温馨提示', '还没来得及做，不要着急哦', [{
	// 		text: '确定',
	// 		onPress: () => console.log('按钮按下事件!')
	// 	}]);
	// }

}

const styles = StyleSheet.create({
	photoContainer: {
		height: 150,
		backgroundColor: '#009dd9',
		justifyContent: 'center',
		alignItems: 'center',
	},
	photo: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	phone: {
		color: '#fff',
		fontSize: 12,
		marginTop: 7,
	}
});

module.exports = MyIndex;
