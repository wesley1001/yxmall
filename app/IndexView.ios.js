// 'use strict';

// import React, {
// 	Component,
// 	StyleSheet,
// 	Navigator
// } from 'react-native';

// import Main from './Main.ios.js';

// export default class IndexView extends Component {

// 	render() {
// 		return (
// 			<Navigator
// 				ref='nav'
// 				style={styles.nav}
// 				initialRoute={{
// 					name: 'main',
// 					component: Main
// 				}}
// 				renderScene={(route, navigator) => {
// 					let Component = route.component;
// 					if (route.component) {
// 						return <Component {...route.params} navigator={navigator} />
// 					}
// 				}}
// 			/>
// 		);
// 	}

// }

// const styles = StyleSheet.create({
// 	nav: {
// 		flex: 1
// 	}
// });