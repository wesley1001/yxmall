'use strict';

import React,{
	Component,
	Text,
	ListView,
	View,
	StyleSheet,
	TouchableHighlight,
	PropTypes
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class MyIndex extends Component {

	static propTypes = {
		items: PropTypes.array.isRequired,
		renderHeader: PropTypes.func,
		renderFooter: PropTypes.func,
		style: ListView.propTypes.style
	};

	constructor(props) {
		super(props);

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.items)
		};
	}

	render() {
		return (
			<ListView
				initialListSize={this.state.dataSource.getRowCount()}
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				renderHeader={this.props.renderHeader}
				renderFooter={this.props.renderFooter}
				style={this.props.style}
			/>
		);
	}

	_renderRow(rowData, sectionId, rowIndex, highlighRow) {
		var leftIcon = null;
		if(rowData.icon) {
			leftIcon = <View style={styles.left}>
				<Icon name={rowData.icon} size={24} color='#333' style={styles.icon} />
			</View>
		} else {
			leftIcon = <View style={[styles.left,{width:10}]}></View>
		}
		return (
			<TouchableHighlight underlayColor='#ddd' onPress={rowData.onPress}>
				<View style={styles.rowContainer}>
					{leftIcon}
					<View style={styles.center}>
						<Text>{rowData.value}</Text>
					</View>
					<View style={styles.right}>
						<Icon name='ion|ios-arrow-right' size={24} color='#333' style={styles.icon} />
					</View>
				</View>
			</TouchableHighlight>
		);
	}

}

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#eee',
		borderStyle: 'solid',
		height: 50
	},
	left: {
		width: 40,
		backgroundColor: '#fff'
	},
	center: {
		flex: 1,
		height: 49,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	right: {
		width: 40,
		backgroundColor: '#fff'
	},
	icon: {
		height: 50
	}
});
