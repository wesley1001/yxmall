'use strict';
//用于构建头部搜索栏

import React, {
    Component,
    Image,
    TextInput,
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

var { Icon, } = require('react-native-icons');

class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon name='ion|beer' size={24} color='#666' style={styles.genre}/>
          <Text>分类</Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput keyboardType='web-search' placeholder='搜索商品/店铺' style={styles.inputText}/>
          <Icon name='ion|ios-world-outline' size={24} color='#666' style={styles.genre}/>
        </View>
        <View>
          <Icon name='ion|briefcase' size={24} color='#999' style={styles.info}/>
          <Text>信息</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', //水平排列
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0, //处理IOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48, //处理IOS状态栏
    backgroundColor: '#d74047',
    alignItems: 'center' //使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  genre: {
    height: 24,
    width: 24
  },
  searchBox: {
    height: 30,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 12
  },
  info: {
    height: 26.7,
    width: 26.7
  },
  searchIcon: {
    marginLeft: 6,
    marginRight: 6,
    width: 16.7,
    height: 16.7
  },
  inputText: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 14
  }
});

module.exports = Header;
