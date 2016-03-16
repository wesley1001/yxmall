'use strict';

import React, {
	Component,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	PropTypes
} from 'react-native';

export default class MenuButton extends Component {

	static propTypes = {
		renderIcon: PropTypes.object.isRequired,
		showText: PropTypes.string,
		tag: PropTypes.string,
		onClick: PropTypes.func
	};

	constructor(props) {
		super(props);
		//需要在回调函数中使用this，必须使用bind(this)来绑定
		this._onClick = this._onClick.bind(this);
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this._onClick}>
				<View style={{flex: 1,alignItems: 'center'}}>
					<Image style={styles.iconImg} source={this.props.renderIcon}/>
					<Text>{this.props.showText}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	_onClick() {
		//在设置了回调函数的情况下
		if (this.props.onClick) {
			//回调title和tag
			this.props.onClick(this.props.showText, this.props.tag);
		}
	}

}

const styles = StyleSheet.create({
	iconImg: {
		width: 38,
		height: 38,
		marginBottom: 2
	}
});