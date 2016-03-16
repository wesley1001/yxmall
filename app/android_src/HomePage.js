'use strict';
// 首页文件，用于构建轮播图、功能按钮、特价列表等

const BANNER_IMGS = [
  require('../../images/banner/1.jpg'),
  require('../../images/banner/2.jpg'),
  require('../../images/banner/3.jpg'),
  require('../../images/banner/4.jpg'),
  require('../../images/banner/5.jpg')
]

import React, {
  Component,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import ViewPager from 'react-native-viewpager';

class HomePage extends Component {

  constructor(props) {
    super(props);
    //用于构建DataSource对象
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(BANNER_IMGS)
    }
  }

  render() {
    return (
      <ViewPager
        style={{
          height:330,
          borderStyle:'solid',
          borderWidth:1,
          borderColor:'black',
          flex:1
        }}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true}/>
    );
  }

  _renderPage(data, pageId) {
    console.log('========================_renderPage start============================');
    console.log('data=', data);
    console.log('pageId=', pageId);
    console.log('========================_renderPage end============================');
    // return (<Image source={data} style={styles.page}/>);
    return <View style={{marginTop:80}}><Text>this is _renderPage function .......</Text></View>
  }

}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: 320,
    resizeMode: 'stretch'
  }
});

module.exports = HomePage;
