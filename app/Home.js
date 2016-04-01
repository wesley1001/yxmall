'use strict';

import React, {
	Component,
	View,
	Text,
	ScrollView,
	StyleSheet,
	ListView,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	Alert,
	Navigator,
	PropTypes
} from 'react-native';

import { Icon } from 'react-native-icons';

import SearchBar from './parts/SearchBar.js'
import Banner from './components/Banner.js';
import MenuButtom from './components/MenuButton.js';
import Button from './components/Button.js';
import Details from './product/Details.js';

var productData = [
	{
		id: 3132,
		name: 'MPE B2028智能睡床',
		price: '¥52,800',
		canDiscount: true,
		img: 'http://www.yuexing.com/static/mobile/images_new/goods/goods01_1.jpg'
	},
	{
		id: 1234,
		name: '顾家家居休闲沙发1753',
		price: '¥7,280',
		canDiscount: true,
		img: 'http://www.yuexing.com/static/mobile/images_new/goods/goods02_1.jpg'
	},
	{
		id: 4523,
		name: '慕思V6系列VB-010套床',
		price: '¥10,236',
		canDiscount: true,
		img: 'http://www.yuexing.com/static/mobile/images_new/goods/goods03.jpg'
	},
	{
		id: 3092,
		name: 'NATUZZI  沙发S907088',
		price: '¥58,500',
		canDiscount: false,
		img: 'http://www.yuexing.com/static/mobile/images_new/goods/goods04.jpg'
	},
	{
		id: 8723,
		name: '舒曼2207榻榻米床',
		price: '¥12,880',
		canDiscount: false,
		img: 'http://www.yuexing.com/static/mobile/images_new/goods/goods05.jpg'
	},
	{
		id: 4242,
		name: 'MPE B2028智能睡床',
		price: '¥4,300',
		canDiscount: true,
		img: 'http://www.yuexing.com/static/mobile/images_new/goods/goods06.jpg'
	}
];

/**
 * home页
 */
class Home extends Component {

	//默认属性值
	static defaultProps = {
		slides: [
			require('../images/banner/1.jpg'),
			require('../images/banner/2.jpg'),
			require('../images/banner/3.jpg'),
			require('../images/banner/4.jpg'),
			require('../images/banner/5.jpg')
		]
	};

	static propTypes = {
		slides : PropTypes.array.isRequired
	};

	constructor(props) {
		super(props);
		var productList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			productList: productList.cloneWithRows(productData)
		}
	}

	render() {
		return (
			<View style={styles.container}>
		        <SearchBar/>
				<ScrollView contentContainerStyle={{}} automaticallyAdjustContentInsets={false}>
					<Banner slides={this.props.slides}/>

					{this._renderMenu()}

					{this._renderServices()}

					{this._renderProductList()}
				</ScrollView>
			</View>
		);
	}

	_onMenuClick(showTxt) {
		Alert.alert('提示', showTxt);
	}

	// 轮播图下的导航
	_renderMenu() {
		return (
			<View style={styles.menuView}>
				<MenuButtom onClick={this._onMenuClick} icon='ion|ios-location-outline' bgColor='#8dc21f' showText='3D逛商场'/>
				<MenuButtom onClick={this._onMenuClick} icon='ion|ios-compose-outline' bgColor='#9669dc' showText='免费设计'/>
				<MenuButtom onClick={this._onMenuClick} icon='ion|ios-pricetags' bgColor='#f39800' showText='家居百科'/>
				<MenuButtom onClick={this._onMenuClick} icon='ion|android-favorite-outline' bgColor='#e60012' showText='收藏'/>
	        </View>
		);
	}

	// 服务块
	_renderServices() {
		var opacity = .7;
		return (
			<View style={styles.serviceContainer}>
				<View style={styles.serviceLeft}>
					<Image
						source={{
							uri: 'http://www.yuexing.com/static/mobile/images_new/address.jpg'
						}}
						style={styles.address}
					/>
					<TouchableOpacity activeOpacity={opacity} style={{flex:4,marginLeft:5}}>
						<Image
							source={{
								uri: 'http://www.yuexing.com/static/mobile/images_new/freelunch.jpg'
							}}
							style={{height:90,resizeMode:'stretch'}}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.serviceRight}>
					<TouchableOpacity activeOpacity={opacity} style={{flex:2}}>
						<Image
							source={{
								uri: 'http://www.yuexing.com/static/mobile/images_new/design.jpg'
							}}
							style={{height:185,resizeMode:'stretch'}}
						/>
					</TouchableOpacity>
					<View style={{flex:4,marginLeft:5}}>
						<TouchableOpacity activeOpacity={opacity}>
							<Image
								source={{
									uri: 'http://www.yuexing.com/static/mobile/images_new/art.jpg'
								}}
								style={{height:90,resizeMode:'stretch'}}
							/>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={opacity} style={{marginTop:5}}>
							<Image
								source={{
									uri: 'http://www.yuexing.com/static/mobile/images_new/service.jpg'
								}}
								style={{height:90,resizeMode:'stretch'}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}

	//产品列表
	_renderProductList() {
		return <ListView
			dataSource={this.state.productList}
			renderRow={this._renderProductRow.bind(this)}
			contentContainerStyle={styles.productView}
		/>
	}

	_renderProductRow(rowData, sectionId, rowId) {
		var canDiscount = rowData.canDiscount ? '（可议）' : null;
		return (
			<TouchableHighlight onPress={() => this._pressProduct(rowData.id)} underlayColor='rgba(0,0,0,0)'>
				<View style={styles.productBox}>
					<Image source={{uri: rowData.img}} style={styles.pImg}/>
					<View style={styles.pDesc}>
						<Text numberOfLines={3} style={styles.pName}>{rowData.name}</Text>
						<Text style={styles.pPrice}>{rowData.price}{canDiscount}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	_pressProduct(productId) {
		var { navigator } = this.props;
		navigator.push({
			name: 'details',
			component: Details,
			params: {
				id: productId
			}
		});
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	},
	menuView: {
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	menuCell: {
		flex: 1,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
	},
	menuIcon: {
		borderRadius: 20,
		marginBottom: 5,
		width: 40,
		height: 40
	},
	menuText: {
		fontSize: 12
	},
	serviceContainer: {
		padding: 5,
		paddingBottom: 2.5
	},
	serviceLeft: {
		height: 90,
		flexDirection: 'row',
		marginBottom: 5
	},
	address: {
		flex: 2,
		height: 90,
		resizeMode: 'stretch'
	},
	serviceRight: {
		flexDirection: 'row'
	},
	productView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 2.5
	},
	productBox: {
		backgroundColor: '#FFF',
		height: 280,
		width: 180,
		marginHorizontal:2.5,
		marginVertical: 2.5
	},
	pImg: {
		height: 200
	},
	pDesc: {
		marginTop: 5,
		alignItems: 'center'
	},
	pName: {
		fontWeight: 'bold',
		height:45
	},
	pPrice: {
		color: '#FF6600',
		marginTop: 5
	}
});

module.exports = Home;