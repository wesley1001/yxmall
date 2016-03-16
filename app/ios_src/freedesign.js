'use strict';

var React = require('react-native');
var ValidateUtil = require('../utils/ValidateUtils.js');

var {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	TextInput,
} = React;

/**
 * 免费设计
 */
var FreeDesign = React.createClass({

	getInitialState: function() {
		return {
			phone: '',
			vertify: '',
			isPhoneCorrect: false,
			isVertifyCorrect: false,
			vertifyText: '验证'
		};
	},

	_phoneChangeText: function(text) {
		var code = this.refs.vertify._getText();
		this.setState({
			phone: text,
			isPhoneCorrect: ValidateUtil.isCellphone(text),
			isVertifyCorrect: ValidateUtil.isVertify(code)
		});
	},

	_onChange: function(value) {
		console.log('onChange ', value);
	},

	_clearForm: function() {
		this.setState({value:null});
	},

	_getCode: function(event) {
		//倒计时
		var countdown = 30;
		this.timer = setInterval(function(){
			this.setState({
				vertifyText: countdown--
			});
		}.bind(this), 1000);
	},

	_onPress: function(event) {
		var phone = this.refs.phone._getText();
		var vertify = this.refs.vertify._getText();
		console.log('phone ' + phone + ', vertify ' + vertify);
		debugger;
	},

	_vertifyChangeText: function(text) {
		var phone = this.refs.phone._getText();
		this.setState({
			vertify: text,
			isPhoneCorrect: ValidateUtil.isCellphone(phone),
			isVertifyCorrect: ValidateUtil.isVertify(text)
		});
	},

	render: function() {
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
							style={[styles.vertifyBtn, this.state.isPhoneCorrect ? styles.available : null]}
							onPress={this._getCode}
							accessible={false}
							underlayColor='#ff6633'>
							<Text style={styles.vertifyText}>{this.state.vertifyText}</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.row2}>
						<TextInput ref='vertify'
							style={[styles.baseInput, styles.vertifyInput]}
							maxLength={4}
							keyboardType='numeric'
							onChangeText={this._vertifyChangeText}
							placeholder='手机上收到的短信'
							value={this.state.vertify}
						/>
					</View>
				</View>
				<TouchableHighlight
					style={[styles.button, this.state.isVertifyCorrect ? styles.available : null]}
					onPress={this._onPress}
					underlayColor='#ff6633'>
					<Text style={styles.buttonText}>立即预约</Text>
				</TouchableHighlight>
			</View>
		);
	},

});

var styles = StyleSheet.create({
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
	formContainer: {marginTop:20},
	row1: {flex:1,flexDirection:'row',height:40},
	row2: {flex:1,height:40,marginBottom:7,marginTop:7},
	baseInput: {
		borderColor:'#ddd',
		borderWidth:1,
		borderStyle:'solid',
		borderRadius:7,
	},
	phoneInput: {flex:3},
	vertifyBtn: {
		flex:1,
		backgroundColor:'#ddd',
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5,
		marginLeft:7
	},
	vertifyText: {fontSize:18,color:'#fff'},
	vertifyInput: {
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

module.exports = FreeDesign;