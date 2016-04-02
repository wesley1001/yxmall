'use strict';

import React, {
	Component,
	StyleSheet,
	View,
	Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import ListGroupItem from '../components/ListGroupItem.js';

export default class FillInfo extends Component {

	render() {
		const BUTTOM_LIST = [
			{
				value: '头像', onPress: function(){}
			},
			{
				value: '昵称', onPress: Actions.login
			},
			{
				value: '手机号', onPress: function(event){
				}
			},
			{
				value: '性别', onPress: function(event){
				}
			},
			{
				value: '邮箱', onPress: function(event){
				}
			},
			{
				value: '楼盘名称', onPress: function(event){
				}
			},
			{
				value: '房屋面积', onPress: function(event){
				}
			},
			{
				value: '购买预算', onPress: function(event){
				}
			}
		];
		return (
			<View style={styles.container}>
				<ListGroupItem style={styles.listGroup} items={BUTTOM_LIST}/>
				<Button style={styles.footer} activeOpacity={.7} onPress={()=>console.log('保存个人信息')}>保存</Button>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	listGroup: {
		marginBottom: 40
	},
	footer: {
		position:'absolute',
		bottom:0,
		left:0,
		right:0,
		height: 40,
		paddingTop: 7,
		backgroundColor:'#f60',
		color: '#fff'
	}
});