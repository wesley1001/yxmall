'use strict';

import React, {
	Component,
	StyleSheet,
	View,
	Text
} from 'react-native';

export default class Details extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>产品详情页 {this.props.id}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});