'use strict';

var React = require('react-native');
var { TabBarIOS } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var Home = require('./Home.js');
var MyIndex = require('./my/MyIndex.js');
var Cart = require('./my/Cart.js');
var Design = require('./Design.js');
var D3 = require('./D3.js');
var SearchBar = require('./components/SearchBar.js');

var {
  StyleSheet,
  View,
  Text
} = React;

/**
 * 首页
 */
var MainScreen = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'home',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <TabBarIOS selectedTab={this.state.selectedTab} tintColor='#ff6600' barTintColor='#fff' style={styles.tabBar}>
            {this._renderTabItem('home', 'ion|ios-home-outline', 'ion|ios-home', '首页', <Home/>)}
            {this._renderTabItem('d3', 'ion|ios-location-outline', 'ion|ios-location', '3d商城', <D3/>)}
            {this._renderTabItem('design', 'ion|ios-compose-outline', 'ion|ios-compose', '免费设计', <Design/>)}
            {this._renderTabItem('cart', 'ion|ios-cart-outline', 'ion|ios-cart', '购物车', <Cart/>)}
            {this._renderTabItem('myself', 'ion|ios-person-outline', 'ion|ios-person', '我', <MyIndex/>)}
        </TabBarIOS>
      </View>
    );
  },

  _renderTabItem: function(name, iconName, selectedIconName, title, component) {
    return (
      <TabBarItemIOS name={name} iconName={iconName} selectedIconName={selectedIconName} title={title} iconSize={28} selectedIconSize={28} selected={this.state.selectedTab === name} onPress={() => this.setState({ selectedTab: name })}>
        {component}
      </TabBarItemIOS>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
  }
});

module.exports = MainScreen;

