var Api = {
	/**
	 * 获取数据
	 * @param  {[type]} url [description] 请求的url
	 * @return {[type]}     [description] 返回json格式的数据
	 */
	getData(url) {
		return fetch(url).then((res) => res.json());
	}
};

module.exports = Api;