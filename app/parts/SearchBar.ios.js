'use strict';

var React = require('react-native');

var {
	Component,
	TextInput,
	View,
	StyleSheet,
	Text
} = React;

var { Icon } = require('react-native-icons');

class SearchBar extends Component {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.iconBox}>
					<Icon name='ion|navicon' size={28} style={styles.genre} color='#333'/>
					<Text style={styles.iconTxt}>分类</Text>
				</View>
				<View style={styles.searchBox}>
					<TextInput placeholder='搜索商品/店铺' style={styles.inputText}/>
					<Icon name='ion|ios-search' size={20} style={styles.searchIcon} color='#333'/>
				</View>
				<View style={styles.iconBox}>
					<Icon name='ion|chatbox-working' size={20} style={styles.msg} color='#333'/>
					<Text style={styles.iconTxt}>消息</Text>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		height: 48,
		backgroundColor: '#F5F5F5',
		alignItems: 'center',
		marginTop: 20
	},
	searchBox: {
		height: 36,
		flexDirection: 'row',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginLeft: 8,
		marginRight: 8,
		borderWidth: 1,
		borderColor: '#ddd',
		borderStyle: 'solid'
	},
	searchIcon: {
		marginLeft: 6,
		marginRight: 6,
		width: 16.7,
		height: 16.7
	},
	inputText: {
		flex: 1,
		backgroundColor: 'transparent',
		fontSize: 14,
		paddingLeft: 5
	},
	iconBox: {
		alignItems: 'center',
		height: 48,
		paddingTop: 5
	},
	genre: {
		height: 24,
		width: 30
	},
	msg: {
		height: 24,
		width: 30
	},
	iconTxt: {
		fontSize: 12
	}
});

module.exports = SearchBar;