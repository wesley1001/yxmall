'use strict';

import React, {
	Component,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	PropTypes
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class Button extends Component {

	static propTypes = {
		//组件的ref属性
		ref: PropTypes.string,
		//图标
		iconName: PropTypes.string,
		//图标，文字颜色
		color: PropTypes.string,
		//图标尺寸
		iconSize: PropTypes.number,
		//按钮文字
		btnText: PropTypes.string,
		//按钮样式
		style: PropTypes.object.isRequired,
		//图标样式
		iconStyle: PropTypes.object,
		//文字样式
		textStyle: PropTypes.object,
		//按钮单击事件
		onPress: PropTypes.func
	};

	constructor(props) {
		super(props);
	}

	render() {
		//图标默认尺寸
		var size = this.props.iconSize || 24;
		var icon = this.props.iconName ? <Icon name={this.props.iconName} size={size} color={this.props.color} style={this.props.iconStyle}/> : null;
		//如果设置了flexDirection，则使用设置的值，否则默认 'row'
		var style = this.props.style.flexDirection ?  this.props.style : [this.props.style, {flexDirection : 'row'}];
		return (
			<TouchableOpacity
				activeOpacity={.7}
				onPress={this._onClick}
				ref={this.props.ref}
				onPress={this.props.onPress}
				accessible={false}
				underlayColor='#fff'
				style={[styles.btnContent, style]}>
				{icon}
				<Text style={[styles.textStyle, {color:this.props.color}]}>{this.props.btnText}</Text>
			</TouchableOpacity>
		);
	}

}

const styles = StyleSheet.create({
	btnContent: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});