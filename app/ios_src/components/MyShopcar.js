'use strict';

var React = require('react-native');

var {
	StyleSheet,
	ListView,
	View,
	Text,
	Image,
} = React;

var MyShopcar = React.createClass({

	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var rows = [
			{
				shopname: 'Happy Home（家得乐居家生活超市）',
				productList: [
					{
						id: '1',
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
						id: '2',
						name: 'MPE  B2028智能睡床',
						img: 'http://webserver1.b0.upaiyun.com/static/mall/default/images/315/gift06.jpg',
						price: '¥52800.00',
						color: '褐色',
						size: '200*180',
						count: 2
					},
					{
						id: '3',
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
		var productList = rowData.productList.map(function(item, index){
			return (
				<View key={item.id} style={styles.rowBody}>
					<View style={{width: 35,justifyContent:'center',alignItems:'center'}}>
						<View style={{
							borderWidth:1,
							borderColor:'#999',
							borderStyle:'solid',
							borderRadius:50,
							width:18,
							height:18,
						}}/>
					</View>
					<View style={{justifyContent:'center',width:85}}>
						<Image source={{
							uri:item.img
						}}
						style={{
							borderWidth:1,
							borderColor:'#eee',
							width:80,
							height:80
						}}/>
					</View>
					<View style={{flex:1,paddingTop:10}}>
						<Text numberOfLines={1} style={{flex:1}}>{item.name}</Text>
						<Text style={{flex:1}}>
							{item.color ? '颜色：' + item.color : ''}  {item.size ? '尺寸：' + item.size : ''}
						</Text>
						<Text style={{flex:1,color:'#df0000'}}>{item.price}</Text>
					</View>
					<View style={{justifyContent:'flex-end',alignItems:'center',width:40,marginBottom:20}}>
						<Text>X1</Text>
					</View>
				</View>
			);
		});
		return (
			<View style={styles.rowContainer}>
				<View style={styles.rowHeader}>
					<View style={{width:35,justifyContent:'center',alignItems:'center'}}>
						<View style={{
							borderWidth:1,
							borderColor:'#999',
							borderStyle:'solid',
							borderRadius:50,
							width:18,
							height:18,
						}}/>
					</View>
					<View style={{flex:1,justifyContent:'center'}}>
						<Text style={{}}>{rowData.shopname}</Text>
					</View>
					<View style={{width: 40,justifyContent:'center',alignItems:'center'}}>
						<Text style={{}}>编辑</Text>
					</View>
				</View>
				{productList}
			</View>
		);
	}

});

const styles = StyleSheet.create({
	listViewContainer: {
		backgroundColor: '#f1f1f1'
	},
	rowContainer: {
		marginBottom: 10,
		flexDirection: 'column',
	},
	rowHeader: {
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		borderStyle: 'solid',
		height: 40,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	rowBody: {
		backgroundColor:'#f5f5f5',
		height:100,
		justifyContent: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#ddd',
		borderStyle: 'solid',
	}
});

module.exports = MyShopcar;