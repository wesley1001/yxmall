'use strict';

var React = require('react-native');
var ValidateUtil = require('../utils/validateUtils.js');
var t = require('tcomb-form-native');
var Form = t.form.Form;

var {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
} = React;

var Cellphone = t.subtype(t.String, function(value){
	return ValidateUtil.isCellphone(value);
});

Cellphone.getValidationErrorMessage = function(value, path, context) {
	return context.options.error = '手机号码有误';
}

var Vertify = t.subtype(t.String, (value) => {return value.length == 4});

Vertify.getValidationErrorMessage = function(value, path, context) {
	return context.options.error = '验证码有误';
}

var options = {
	fields: {
		phone: {
			label: '',
			placeholder: '手机号码',
			maxLength: 11,
			error: '请输入手机号码',
		},
		vertify: {
			label: '',
			placeholder: '手机上收到的验证码',
			maxLength: 4,
			error: '请输入验证码'
		}
	},
	auto: 'none'
}

var Reserve = t.struct({
	phone: Cellphone,
	vertify: Vertify,
});

/**
 * 免费设计
 */
var FreeDesign = React.createClass({

	getInitialState: function() {
		return { };
	},

	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>月星免费软装设计</Text>
				<Text style={styles.subtitle}>暂仅限上海，其他城市陆续开放</Text>
				<Form
					ref='form'
					type={Reserve}
					options={options}
					value={this.state.value}
					onChange={this._onChange}
				/>
				<TouchableHighlight style={styles.button} onPress={this._onPress} underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>立即预约</Text>
				</TouchableHighlight>
			</View>
		);
	},

	_onChange: function(value) {
		console.log('onChange ', value);
		// if(ValidateUtil.isEmpty(value.phone)) {
		// 	options.fields.phone.error = '请输入手机号码';
		// }
	},

	_clearForm: function() {
		this.setState({value:null});
	},

	_onPress: function(event) {
		var value = this.refs.form.getValue();
		if (value) {
			console.log('vlaue ', value);
			// _clearForm();
		}
	}

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
		marginBottom: 20,
	},
	button: {
		height: 36,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	}
});

module.exports = FreeDesign;