'use strict';

import React, {
	Component,
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	TextInput
} from 'react-native';

var ValidateUtil = require('./utils/ValidateUtils.js');

/**
 * 免费设计
 */
class Design extends Component {

	constructor(props) {
		super(props);
		this.state = {
			phone: '',
			code: '',
			isPhoneCorrect: false,
			isCodeCorrect: false,
			codeText: '验证'
		};
	}

	_phoneChangeText(text) {
		var code = this.refs.code._getText();
		this.setState({
			phone: text,
			isPhoneCorrect: ValidateUtil.isCellphone(text),
			isCodeCorrect: ValidateUtil.isVertify(code)
		});
	}

	_onChange(value) {
		console.log('onChange ', value);
	}

	_clearForm() {
		this.setState({value:null});
	}

	_getCode(event) {
		//倒计时
		var countdown = 30;
		this.timer = setInterval(function(){
			this.setState({
				codeText: countdown--
			});
		}.bind(this), 1000);
	}

	_onPress(event) {
		var phone = this.refs.phone._getText();
		var code = this.refs.code._getText();
		console.log('phone ' + phone + ', code ' + code);
		debugger;
	}

	_vertifyChangeText(text) {
		var phone = this.refs.phone._getText();
		this.setState({
			code: text,
			isPhoneCorrect: ValidateUtil.isCellphone(phone),
			isCodeCorrect: ValidateUtil.isCode(text)
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>月星免费软装设计</Text>
				<Text style={styles.subtitle}>暂仅限上海，其他城市陆续开放</Text>
				<View style={styles.formContainer}>
					<View style={styles.row1}>
						<TextInput ref='phone'
							style={[styles.baseInput, styles.phoneInput]}
							maxLength={11}
							keyboardType='numeric'
							onChangeText={this._phoneChangeText}
							placeholder='输入您的手机号码'
							value={this.state.phone}
						/>
						<TouchableHighlight
							ref='codeBtn'
							style={[styles.codeBtn, this.state.isPhoneCorrect ? styles.available : null]}
							onPress={this._getCode}
							accessible={false}
							underlayColor='#ff6633'>
							<Text style={styles.codeText}>{this.state.codeText}</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.row2}>
						<TextInput ref='code'
							style={[styles.baseInput, styles.codeInput]}
							maxLength={4}
							keyboardType='numeric'
							onChangeText={this._vertifyChangeText}
							placeholder='手机上收到的短信'
							value={this.state.code}
						/>
					</View>
				</View>
				<TouchableHighlight
					style={[styles.button, this.state.isCodeCorrect ? styles.available : null]}
					onPress={this._onPress}
					underlayColor='#ff6633'>
					<Text style={styles.buttonText}>立即预约</Text>
				</TouchableHighlight>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    padding: 20,
	    paddingTop: 100,
	    backgroundColor: '#ffffff',
	},
	title: {
		fontSize: 26,
		alignSelf: 'center',
		color: '#333',
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 16,
		alignSelf: 'center',
		color: '#888888',
	},
	formContainer: {
		marginTop:20
	},
	row1: {
		flex:1,
		flexDirection:'row',
		height:40
	},
	row2: {
		flex:1,
		height:40,
		marginBottom:7,
		marginTop:7
	},
	baseInput: {
		borderColor:'#ddd',
		borderWidth:1,
		borderStyle:'solid',
		borderRadius:7,
	},
	phoneInput: {
		flex:3
	},
	codeBtn: {
		flex:1,
		backgroundColor:'#ddd',
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5,
		marginLeft:7
	},
	codeText: {
		fontSize:18,color:'#fff'
	},
	codeInput: {
		flex:1,
	},
	button: {
		height: 40,
		backgroundColor: '#ddd',
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	available: {
		backgroundColor: '#ff6600'
	}
});

module.exports = Design;