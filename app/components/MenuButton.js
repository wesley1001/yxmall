'use strict';

import React, {
	Component,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	PropTypes
} from 'react-native';

import { Icon } from 'react-native-icons';

/**
 * 按钮组件
 */
export default class MenuButton extends Component {

	static propTypes = {
		icon: PropTypes.string.isRequired,
		showText: PropTypes.string,
		bgColor: PropTypes.string,
		onClick: PropTypes.func
	};

	constructor(props) {
		super(props);
		//需要在回调函数中使用this，必须使用bind(this)来绑定
		this._onClick = this._onClick.bind(this);
	}

	render() {
		var bgColor = this.props.bgColor || '#eee';
		return (
			<TouchableOpacity activeOpacity={.7} style={styles.buttonBox} onPress={this._onClick}>
				<Icon name={this.props.icon} size={28} color='#fff' style={[styles.icon, {backgroundColor:bgColor}]}/>
				<Text style={styles.txt}>{this.props.showText}</Text>
			</TouchableOpacity>
		);
	}

	_onClick() {
		//在设置了回调函数的情况下
		if (this.props.onClick) {
			//回调showText
			this.props.onClick(this.props.showText);
		}
	}

}

const styles = StyleSheet.create({
	buttonBox: {
		flex: 1,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		borderRadius: 20,
		marginBottom: 5,
		width: 40,
		height: 40
	},
	txt: {
		fontSize: 12
	}
});