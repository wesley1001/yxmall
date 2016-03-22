'use strict';

import React,{
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { TabBarIOS } from 'react-native-icons';
var TabBarItemIOS = TabBarIOS.Item;

import Home from './Home.ios.js';
import MyIndex from './my/MyIndex.ios.js';
import Cart from './my/Cart.ios.js';
import Design from './Design.ios.js';
import D3 from './D3.ios.js';

const HOME = 'home';
const THREED = 'd3';
const DESIGN = 'design';
const CART = 'cart';
const MYSELF = 'myself';

/**
 * 首页
 */
export default class MainScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: HOME,
      };
  }

  render() {
      return (
          <View style={styles.container}>
              <TabBarIOS selectedTab={this.state.selectedTab} tintColor='#ff6600' barTintColor='#fff' style={styles.tabBar}>
                  {this._renderTabItem(HOME, 'ion|ios-home-outline', 'ion|ios-home', '首页', <Home/>)}
                  {this._renderTabItem(THREED, 'ion|ios-location-outline', 'ion|ios-location', '3d商城', <D3/>)}
                  {this._renderTabItem(DESIGN, 'ion|ios-compose-outline', 'ion|ios-compose', '免费设计', <Design/>)}
                  {this._renderTabItem(CART, 'ion|ios-cart-outline', 'ion|ios-cart', '购物车', <Cart/>)}
                  {this._renderTabItem(MYSELF, 'ion|ios-person-outline', 'ion|ios-person', '我', <MyIndex/>)}
              </TabBarIOS>
          </View>
      );
  }

  _renderTabItem(name, iconName, selectedIconName, title, component) {
      return (
          <TabBarItemIOS name={name} iconName={iconName} selectedIconName={selectedIconName} title={title} iconSize={28} selectedIconSize={28} selected={this.state.selectedTab === name} onPress={() => this.setState({ selectedTab: name })}>
              {component}
          </TabBarItemIOS>
      );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar: {
    }
});

