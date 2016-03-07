/**
 * 公共校验
 */
var ValidateUtil = {

	isEmpty: function(value) {
		return /(^\s+)|(\s+$)/g.test(value);
	},

	isPhone: function(phone) {
		if(!this.isEmpty(phone))
			return /^(130|131|132|133|134|135|136|137|138|139|147|150|151|152|153|154|155|156|157|158|159|180|181|182|183|184|185|186|187|188|189)\d{8}$/.test(phone);
	}

};

module.exports = ValidateUtil;