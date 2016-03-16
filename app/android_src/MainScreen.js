'use strict';
//主屏幕文件，起到最外层控制作用

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Header from './components/Header';
import HomePage from './HomePage';

const HOME = 'home', HOME_TXT = '首页', HOME_NORMAL = {uri:'http://m.360buyimg.com/mobilecms/s80x80_jfs/t2275/267/2109565733/4908/6f42753f/56be05dcN94355bd6.png'}, HOME_FOCUS= {uri:'https://img.alicdn.com/tps/i2/TB1i1oXLVXXXXcPXXXXtz80OVXX-160-160.png_q30.jpg_.webp'};
const CATEGORY = 'category', CATEGORY_TXT = '分类', CATEGORY_NORMAL = {uri:'http://m.360buyimg.com/mobilecms/s80x80_jfs/t2494/111/1522569622/6459/1f1f809b/56be05fdNdb68df6a.png'}, CATEGORY_FOCUS= {uri:'https://img.alicdn.com/tps/i2/TB1FPflLVXXXXcMXpXXtz80OVXX-160-160.png_q30.jpg_.webp'};
const FAXIAN = 'faxian', FAXIAN_TXT = '发现', FAXIAN_NORMAL = {uri:'http://m.360buyimg.com/mobilecms/s80x80_jfs/t1909/34/1706299643/3956/29f28dcb/56d543d8Nd7fce807.png'}, FAXIAN_FOCUS= {uri:'https://img.alicdn.com/tps/i4/TB1ivBELFXXXXXOXpXXtz80OVXX-160-160.png_q30.jpg_.webp'};
const CART = 'cart', CART_TXT = '购物车', CART_NORMAL = {uri:'http://m.360buyimg.com/mobilecms/s80x80_jfs/t2575/81/1126081392/5354/bb2caed8/56be0620N63774172.png'}, CART_FOCUS= {uri:'https://img.alicdn.com/tps/i4/TB1RP.6LFXXXXXkXVXXtz80OVXX-160-160.png_q30.jpg_.webp'};
const PERSONAL = 'personal', PERSONAL_TXT = '我的', PERSONAL_NORMAL = {uri:'http://m.360buyimg.com/mobilecms/s80x80_jfs/t2017/363/2247275282/5267/d7e8df50/56be06c0N6a216cbd.png'}, PERSONAL_FOCUS= {uri:'https://img.alicdn.com/tps/i3/TB1aJC7LVXXXXbXaXXXtz80OVXX-160-160.png_q30.jpg_.webp'};

class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: HOME
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <TabNavigator tabBarStyle={styles.tab}>
          {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, HOME_TXT, this._createChildView(HOME))}
          {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, CATEGORY_TXT, this._createChildView(CATEGORY))}
          {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, FAXIAN_TXT, this._createChildView(FAXIAN))}
          {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, CART_TXT, this._createChildView(CART))}
          {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, PERSONAL_TXT, this._createChildView(PERSONAL))}
        </TabNavigator>
      </View>
    );
  }

  _renderTabItem(img, selectedImg, tag, tabText, childView) {
    return (
      <TabNavigator.Item
        title={tabText}
        titleStyle={styles.titleStyle}
        selectedTitleStyle={styles.selectedTitleStyle}
        selected={this.state.selectedTab === tag}
        renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
        renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
        onPress={() => this.setState({ selectedTab: tag })}>
        {childView}
      </TabNavigator.Item>
    );
  }

  _createChildView(tag) {
    return (
      <View style={{flex:1, backgroundColor:'#00baff', alignItems:'center', justifyContent:'center'}}>
        <HomePage/>
        <Text style={{fontSize:22}}>{tag}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab: {
    height: 52,
    backgroundColor: '#333333',
    alignItems: 'center'
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
    marginTop: 10
  },
  titleStyle: {
    color: '#fff'
  },
  selectedTitleStyle: {
    color: '#ff6600'
  }
});

module.exports = MainScreen;
