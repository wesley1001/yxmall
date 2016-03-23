'use strict';

import React, {
	Component,
	StyleSheet,
	Image,
	PropTypes
} from 'react-native';

import ViewPager from 'react-native-viewpager';

export default class Banner extends Component {

	static propTypes = {
		slides: PropTypes.array.isRequired,
		onChangePage: PropTypes.func
	};

	constructor(props) {
		super(props);
		this._onChangePage = this._onChangePage.bind(this);

		var ds = new ViewPager.DataSource({
			pageHasChanged: (p1, p2) => p1 !== p2
		});
		this.state = {
			dataSource: ds.cloneWithPages(this.props.slides)
		}
	}

	render() {
		return (
			<ViewPager style={styles.wrapper}
				dataSource={this.state.dataSource}
				renderPage={this._renderPage}
				isLoop={true}
				autoPlay={true}
				onChangePage={this._onChangePage}
			/>
		);
	}

	_renderPage(data, pageId) {
		return <Image source={data} style={styles.slide}/>;
	}

	_onChangePage(index) {
		//在设置了回调函数的情况下
		if (this.props.onChangePage) {
			//回调index
			this.props.onChangePage(index);
		}
	}

}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	slide: {
		flex:1,
		height:250,
		resizeMode:'stretch'
	}
});