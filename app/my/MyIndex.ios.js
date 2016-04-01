'use strict';

import React,{
	Component,
	Text,
	ListView,
	View,
	StyleSheet,
	TouchableHighlight,
	NavigatorIOS,
	Image,
	Alert
} from 'react-native';

import { Icon } from 'react-native-icons';

import ListGroupItem from '../components/ListGroupItem.js';
import Login from './Login.ios.js';

const BUTTOM_LIST = [
	{
		value: '全部订单',
		icon: 'ion|compose',
		onPress: function(event){
			Alert.alert('全部订单');
		}
	},
	{
		value: '聊天记录',
		icon: 'ion|chatboxes',
		onPress: function(event){
			Alert.alert('聊天记录');
		}
	},
	{
		value: '我的收藏',
		icon: 'ion|heart',
		onPress: function(event){
			Alert.alert('我的收藏')
		}
	},
	{
		value: '我的足迹',
		icon: 'ion|ios-world-outline',
		onPress: function(event){
			Alert.alert('我的足迹');
		}
	},
	{
		value: '收货地址',
		icon: 'ion|help-buoy',
		onPress: function(event){
			Alert.alert('收货地址');
		}
	},
	{
		value: '红包管理',
		icon: 'ion|briefcase',
		onPress: function(event){
			Alert.alert('红包管理');
		}
	},
	{
		value: '基本设置',
		icon: 'ion|ios-cog-outline',
		onPress: function(event){
			Alert.alert('基本设置');
		}
	}
]

export default class MyIndex extends Component {

	constructor(props) {
		super(props);
		this.state = {
			logined: false
		}
	}

	render() {
		return (
			<ListGroupItem items={BUTTOM_LIST} renderHeader={this._renderHeader}/>
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
