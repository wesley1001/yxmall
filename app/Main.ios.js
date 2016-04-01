'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    NavigatorIOS,
    Text
} from 'react-native';

import { TabBarIOS } from 'react-native-icons';
var TabBarItemIOS = TabBarIOS.Item;

import Home from './Home.ios.js';
import MyIndex from './my/MyIndex.ios.js';
import Wiki from './wiki/Wiki.ios.js';
import Model from './Model.ios.js';

const TAB1 = 'tab1';
const TAB2 = 'tab2';
const TAB3 = 'tab3';
const TAB4 = 'tab4';

/**
 * 主界面
 */
export default class MainScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: TAB1,
      };
  }

  render() {
      return (
          <View style={styles.container}>
              <TabBarIOS selectedTab={this.state.selectedTab} tintColor='#ff6600' barTintColor='#fff' style={styles.tabBar}>
                  {this._renderTabItem(TAB1, 'ion|ios-home-outline', 'ion|ios-home', '首页', Home)}
                  {this._renderTabItem(TAB2, 'ion|ios-compose-outline', 'ion|ios-compose', '样板间', Model)}
                  {this._renderTabItem(TAB3, 'ion|ios-cart-outline', 'ion|ios-cart', '家居百科', Wiki)}
                  {this._renderTabItem(TAB4, 'ion|ios-person-outline', 'ion|ios-person', '我', MyIndex)}
              </TabBarIOS>
          </View>
      );
  }

  _renderTabItem(name, iconName, selectedIconName, title, component) {
      return (
          <TabBarItemIOS name={name} iconName={iconName} selectedIconName={selectedIconName} title={title} iconSize={28} selectedIconSize={28} selected={this.state.selectedTab === name} onPress={() => this.setState({ selectedTab: name })} style={styles.tabBarItem}>
              <NavigatorIOS
                  style={styles.container}
                  initialRoute={{
                    title:title,
                    navigationBarHidden: true,
                    name: name,
                    component: component,
                    backButtonTitle: '返回'
                  }}
                  configureScene={(route) => {
                      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                  }}
                  renderScene={(route, navigator) => {
                     let Component = route.component;
                     if (route.component) {
                        return <Component {...route.params} navigator={navigator} />
                     }
                  }}
              />
          </TabBarItemIOS>
      );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar: {
    },
    tabBarItem: {
    }
});

