'use strict';

var React = require('react-native');
var { Icon, } = require('react-native-icons');

var {
	Text,
	ListView,
	View,
	StyleSheet,
	TouchableHighlight,
	Image,
	AlertIOS,
} = React;

/**
 * 我
 */
module.exports = React.createClass({

	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows([
				{value: '全部订单', icon: 'ion|compose'},
				{value: '聊天记录', icon: 'ion|chatboxes'},
				{value: '我的收藏', icon: 'ion|heart'},
				{value: '我的足迹', icon: 'ion|ios-world-outline'},
				{value: '收货地址', icon: 'ion|help-buoy'},
				{value: '红包管理', icon: 'ion|briefcase'},
				{value: '基本设置', icon: 'ion|ios-cog-outline'},
			])
		};
	},

	render: function() {
		return (
			<ListView initialListSize={7} dataSource={this.state.dataSource} renderRow={this._renderRow} renderHeader={this._renderHeader}/>
		);
	},

	_renderHeader: function() {
		return (
			<View style={styles.photoContainer}>
				<Image
					style={styles.photo}
					source={{uri:'http://qlogo3.store.qq.com/qzone/739694218/739694218/100?1394897497'}}
				/>
				<Text style={styles.phone}>18501687134</Text>
			</View>
		);
	},

	_renderRow: function(rowData) {
		return (
			<TouchableHighlight onPress={this._onPressButton}>
				<View style={styles.rowContainer}>
					<View style={[styles.cell, {flex: 1}]}>
						<Icon name={rowData.icon} size={24} color='#666' style={{height:50}} />
					</View>
					<View style={[styles.cell, {flex: 6}]}>
						<Text>{rowData.value}</Text>
					</View>
					<View style={[styles.cell, {flex: 1}]}>
						<Icon name='ion|ios-arrow-right' size={24} color='#666' style={{height:50}} />
					</View>
				</View>
			</TouchableHighlight>
		);
	},

	_onPressButton: function() {
		AlertIOS.alert('温馨提示', '还没来得及做，不要着急哦', [{
			text: '确定',
			onPress: () => console.log('按钮按下事件!')
		}]);
	}

});

var styles = StyleSheet.create({
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
	},
	rowContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#eee',
		borderStyle: 'solid'
	},
	cell: {
		height: 50,
		justifyContent: 'center',
		backgroundColor: '#fff'
	}
});
