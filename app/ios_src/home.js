'use strict';

var React = require('react-native');
var { Icon } = require('react-native-icons');

var HomeSwiper = require('./components/Home-swiper.js');

var {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TouchableOpacity,
} = React;

/**
 * home页
 */
module.exports = React.createClass({

	getInitialState: function() {
		return {
			menuList: [
				{
					icon: 'ion|ios-location-outline',
					bgc: '#8dc21f',
					txt: '3D逛商场'
				},
				{
					icon: 'ion|ios-compose-outline',
					bgc: '#9669dc',
					txt: '免费设计'
				},
				{
					icon: 'ion|ios-pricetags',
					bgc: '#f39800',
					txt: '家居百科'
				},
				{
					icon: 'ion|android-favorite-outline',
					bgc: '#e60012',
					txt: '收藏'
				},
			]
		}
	},

	render: function() {
		// debugger;
		return (
	      <ScrollView contentContainerStyle={{}} style={styles.container}>
	        <HomeSwiper/>

	        {this._renderServices()}

	        <Image
	        	source={{
	        		uri:'http://www.yuexing.com/static/data/files/mall/ad/logo/384.jpg'
	        	}}
	        	style={{
	        		height:280
	        	}}
	        />

	      </ScrollView>
		);
	},

	/**
	 * 轮播图下的导航
	 */
	_renderMenu: function() {
		return (
			<View style={styles.menuContainer}>
				{this.state.menuList.map(function(item, index){
					return (
						<TouchableOpacity key={'menu' + index} activeOpacity={.7} style={styles.menuCell}>
			        		<Icon name={item.icon} size={28} width={40} height={40} color='#fff' style={[styles.menuIcon, {backgroundColor:item.bgc}]}/>
			        		<Text style={styles.menuText}>{item.txt}</Text>
			        	</TouchableOpacity>
					);
				})}
	        </View>
		);
	},

	/**
	 * 服务块
	 */
	_renderServices: function() {
		var opacity = .7;
		return (
			<View style={{padding:5}}>
				<View style={{height:90,flexDirection:'row',marginBottom:5}}>
					<Image
						source={{
							uri: 'http://www.yuexing.com/static/mobile/images_new/address.jpg'
						}}
						style={{flex:2,height:90,resizeMode:'stretch'}}
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
				<View style={{flexDirection:'row'}}>
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

});

var styles = StyleSheet.create({
	container: {
	},
	menuContainer: {
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
		marginBottom: 5
	},
	menuText: {
		fontSize: 12
	}
});