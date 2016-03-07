'use strict';

var React = require('react-native');
var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var Home = require('./home.js');
var MyIndex = require('./my/index.js');
var ShopCar = require('./my/shopcar.js');
var FreeDesign = require('./freedesign.js');
var ThreeD = require('./threeD.js');

var {
  StyleSheet,
  View,
  Text
} = React;

/**
 * 首页
 */
var Index = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'freedesign',
    };
  },

  render: function() {
    return (
        <TabBarIOS selectedTab={this.state.selectedTab} tintColor='#ff6600' barTintColor='#fff' style={styles.tabBar}>
          <TabBarItemIOS name='home' iconName='ion|ios-home-outline' selectedIconName='ion|ios-home' title={'首页'} iconSize={28} selectedIconSize={30} accessibilityLabel='Home Tab' selected={this.state.selectedTab === 'home'} onPress={() => this.setState({selectedTab:'home'})}>
            <Home/>
          </TabBarItemIOS>
          <TabBarItemIOS name='threed' iconName='ion|ios-location-outline' selectedIconName='ion|ios-location' title='3d商城' iconSize={28} selectedIconSize={30} accessibilityLabel='3D Tab' selected={this.state.selectedTab === 'threed'} onPress={() => this.setState({selectedTab:'threed'})}>
            <ThreeD/>
          </TabBarItemIOS>
          <TabBarItemIOS name='freedesign' iconName='ion|ios-compose-outline' selectedIconName='ion|ios-compose' title='免费设计' iconSize={28} selectedIconSize={30} accessibilityLabel='FreeDesign Tab' selected={this.state.selectedTab === 'freedesign'} onPress={() => this.setState({selectedTab:'freedesign'})}>
            <FreeDesign/>
          </TabBarItemIOS>
          <TabBarItemIOS name='shopcar' iconName='ion|ios-cart-outline' selectedIconName='ion|ios-cart' title='购物车' iconSize={28} selectedIconSize={30} accessibilityLabel='ShopCar Tab' selected={this.state.selectedTab === 'shopcar'} onPress={() => this.setState({selectedTab:'shopcar'})}>
            <ShopCar/>
          </TabBarItemIOS>
          <TabBarItemIOS name='my' iconName='ion|ios-person-outline' selectedIconName='ion|ios-person' title='我' iconSize={28} selectedIconSize={30} accessibilityLabel='My Tab' selected={this.state.selectedTab === 'my'} onPress={() => this.setState({selectedTab:'my'})}>
            <MyIndex/>
          </TabBarItemIOS>
        </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = Index;

