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
		onItemPress: PropTypes.func
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
				rehderFooter={this.props.renderFooter}
			/>
		);
	}

	_renderRow(rowData, sectionId, rowIndex, highlighRow) {
		return (
			<TouchableHighlight underlayColor='#ddd' onPress={rowData.onPress}>
				<View style={styles.rowContainer}>
					<View style={[styles.cell, {flex: 1}]}>
						<Icon name={rowData.icon} size={24} color='#333' style={styles.icon} />
					</View>
					<View style={[styles.cell, {flex: 6}]}>
						<Text>{rowData.value}</Text>
					</View>
					<View style={[styles.cell, {flex: 1}]}>
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
		borderStyle: 'solid'
	},
	cell: {
		height: 50,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	icon: {
		height: 50
	}
});
