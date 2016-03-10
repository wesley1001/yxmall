'use strict';

var React = require('react-native');
// var {Checkbox, Radio} = require('react-icheck/lib/Checkbox.js');
// import 'icheck/skins/all.css';
import {Checkbox, Radio} from 'react-icheck';

var {
	StyleSheet,
	ListView,
	View,
	Text,
} = React;

var MyShopcar = React.createClass({

	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var rows = [
			{
				shopname: 'Happy Home（家得乐居家生活超市）',
				productList: [
					{
						name: '韩国KOMAX(高美斯)环保TRITAN 时尚水杯550ml',
						img: 'http://webserver1.b0.upaiyun.com/static/mall/default/images/315/gift02.jpg',
						price: '¥39.90',
						count: 1
					}
				]
			},
			{
				shopname: 'MPE上海澳门路店',
				productList: [
					{
						name: 'MPE  B2028智能睡床',
						img: 'http://webserver1.b0.upaiyun.com/static/mall/default/images/315/gift06.jpg',
						price: '¥52800.00',
						color: '褐色',
						size: '200*180',
						count: 2
					},
					{
						name: '意大利NATUZZI沙发S907088',
						img: 'http://webserver1.b0.upaiyun.com/static/mall/default/images/315/gift03.jpg',
						price: '¥58500.00',
						color: '黑色',
						size: '默认',
						count: 1
					}
				]
			}
		];
		return {
			dataSource: ds.cloneWithRows(rows)
		};
	},

	render: function() {
		return (<ListView
			dataSource={this.state.dataSource}
			renderRow={this._renderRow}
			style={styles.listViewContainer}
		/>);
	},

	_renderRow: function(rowData) {
		return (
			<View style={styles.rowContainer}>
				<View style={styles.rowHeader}>
					<Text></Text>
				</View>
				<View style={styles.rowBody}>
					<Text>这里是主体</Text>
				</View>
			</View>
		);
	}

});

const styles = StyleSheet.create({
	listViewContainer: {
		backgroundColor: '#f5f5f5'
	},
	rowContainer: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		borderStyle: 'solid',
		marginBottom: 10,
	},
	rowHeader: {
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		borderStyle: 'solid',
		height: 40,
		justifyContent: 'center'
	},
	rowBody: {
		backgroundColor:'#fafafa',
		height:90,
	}
});

module.exports = MyShopcar;