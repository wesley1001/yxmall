'use strict';

var React = require('react-native');
var { TabBarIOS, } = require('react-native-icons');
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
              <TabBarItemIOS name='home' iconName='ion|ios-home-outline' selectedIconName='ion|ios-home' title={'首页'} iconSize={28} selectedIconSize={30} accessibilityLabel='Home Tab' selected={this.state.selectedTab === 'home'} onPress={() => this.setState({selectedTab:'home'})}>
                <Home/>
              </TabBarItemIOS>
              <TabBarItemIOS name='threed' iconName='ion|ios-location-outline' selectedIconName='ion|ios-location' title='3d商城' iconSize={28} selectedIconSize={30} accessibilityLabel='3D Tab' selected={this.state.selectedTab === 'threed'} onPress={() => this.setState({selectedTab:'threed'})}>
                <D3/>
              </TabBarItemIOS>
              <TabBarItemIOS name='freedesign' iconName='ion|ios-compose-outline' selectedIconName='ion|ios-compose' title='免费设计' iconSize={28} selectedIconSize={30} accessibilityLabel='FreeDesign Tab' selected={this.state.selectedTab === 'freedesign'} onPress={() => this.setState({selectedTab:'freedesign'})}>
                <Design/>
              </TabBarItemIOS>
              <TabBarItemIOS name='shopcar' iconName='ion|ios-cart-outline' selectedIconName='ion|ios-cart' title='购物车' iconSize={28} selectedIconSize={30} accessibilityLabel='ShopCar Tab' selected={this.state.selectedTab === 'shopcar'} onPress={() => this.setState({selectedTab:'shopcar'})}>
                <Cart/>
              </TabBarItemIOS>
              <TabBarItemIOS name='my' iconName='ion|ios-person-outline' selectedIconName='ion|ios-person' title='我' iconSize={28} selectedIconSize={30} accessibilityLabel='My Tab' selected={this.state.selectedTab === 'my'} onPress={() => this.setState({selectedTab:'my'})}>
                <MyIndex/>
              </TabBarItemIOS>
            </TabBarIOS>
        </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = MainScreen;

