'use strict';

import React,{
	Component,
	Text,
	ListView,
	View,
	StyleSheet,
	TouchableHighlight,
	Image,
	Alert
} from 'react-native';

import { Icon } from 'react-native-icons';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import ListGroupItem from '../components/ListGroupItem.js';
import Login from './Login.js';

export default class MyIndex extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const BUTTOM_LIST = [
			{
				value: '完善个人信息', icon: 'ion|compose', onPress: Actions.fillInfo
			},
			{
				value: '绑定手机', icon: 'ion|iphone', onPress: Actions.bindPhone
			},
			{
				value: '修改密码', icon: 'ion|ios-locked', onPress: Actions.updateLoginPwd
			},
			{
				value: '我的关注', icon: 'ion|android-favorite-outline', onPress: function(event){
					Alert.alert('我的关注')
				}
			},
			{
				value: '我的足迹', icon: 'ion|ios-paw-outline', onPress: function(event){
					Alert.alert('我的足迹');
				}
			},
			{
				value: '基本设置', icon: 'ion|ios-cog-outline', onPress: function(event){
					Alert.alert('基本设置');
				}
			}
		];
		return (
			<ListGroupItem items={BUTTOM_LIST} renderHeader={this._renderHeader}/>
		);
	}

	_renderHeader() {
		var content;
		if (false) {
			content = <View style={styles.userinfo}>
				<Image style={styles.headimg_in} source={{uri:'http://qlogo3.store.qq.com/qzone/739694218/739694218/100?1394897497'}} />
				<Text style={styles.phone}>18501687134</Text>
			</View>
		} else {
			content = <View style={styles.userinfo}>
				<Icon style={styles.headimg_out} size={90} name='ion|ios-person'/>
				<View style={styles.infoContainer}>
					<Button style={styles.btn} onPress={Actions.login}>登录</Button>
					<View style={styles.seperator}></View>
					<Button style={styles.btn} onPress={Actions.register}>注册</Button>
				</View>
			</View>
		}
		return (
			<View style={styles.photoContainer}>
				{content}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	photoContainer: {
		height: 180,
		backgroundColor: '#009dd9',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userinfo:{alignItems:'center'},
	headimg_in: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: 5
	},
	headimg_out: {
		width:80,height:80,backgroundColor:'#eee',borderRadius:40,marginBottom: 5
	},
	phone: {
		color: '#fff',
		fontSize: 18
	},
	infoContainer: {
		flexDirection:'row',width:120,height:30,backgroundColor:'#eee',
		alignItems:'center',borderWidth:1,borderColor:'#eee'
	},
	seperator: {
		height:15,
		borderWidth:0.5,
		borderColor:'#666'
	},
	btn: {
		justifyContent:'center',flex:1,width:59,fontSize:14,color:'#333',
	}
});
