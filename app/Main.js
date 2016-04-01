'use strict';

import React, { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-icons';

import Home from './Home.js';
import Register from './my/Register.js';
import Login from './my/Login.js';
import MyIndex from './my/Index.js';
import FillInfo from './my/FillInfo.js';
import UpdateLoginPwd from './my/UpdateLoginPwd.js';
import BindPhone from './my/BindPhone.js';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:'transparent', justifyContent: 'center', alignItems: 'center', },
    iconView: {flex:1, alignItems:'center'},
    iconImg: {width:24,height:24}
});

class TabIcon extends React.Component {
    render() {
    	var icons;
    	switch(this.props.name) {
    		case 'tab1':
    			icons = {
    				name: 'ion|ios-home-outline',
    				selectedName: 'ion|ios-home'
    			};
    		break;
    		case 'tab2':
    			icons = {
    				name: 'ion|ios-bookmarks-outline',
    				selectedName: 'ion|ios-bookmarks'
    			};
    		break;
    		case 'tab3':
    			icons = {
    				name: 'ion|social-buffer-outline',
    				selectedName: 'ion|social-buffer'
    			};
    		break;
    		case 'tab4':
    			icons = {
    				name: 'ion|ios-person-outline',
    				selectedName: 'ion|ios-person'
    			};
    		break;
    		default:
    			icons = {
    				name: 'ion|ios-sunny-outline',
    				selectedName: 'ion|ios-sunny'
    			};
    		break;
    	}
    	var color, name;
    	if (this.props.selected) {
    		color = '#f60';
    		name = icons.selectedName;
    	} else {
    		color = '#666';
    		name = icons.name;
    	}
        return (
        	<View style={styles.iconView}>
	        	<Icon name={name} size={24} color={color} style={styles.iconImg}/>
	            <Text style={{color: color}}>{this.props.title}</Text>
            </View>
        );
    }
}

class Right extends React.Component {
    render(){
        return <Text style={{
        width: 80,
        height: 37,
        position: 'absolute',
        bottom: 4,
        right: 2,
        padding: 8,
    }}>Right</Text>
    }
}

export default class Main extends React.Component {
    render() {
        return <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
            <Scene key="modal" component={Modal} >
                  <Scene key="root" hideNavBar={true}>
                    <Scene key="echo" clone component={Register} />

                    <Scene key="register" direction="vertical" component={Register} title="Register"/>
                    <Scene key="register2" component={Register} hideNavBar={false} title="Register2" duration={1}/>
                    
                    <Scene key="home" component={Home} title="Replace" type="replace"/>
                    <Scene key="launch" component={Register} title="Launch" style={{flex:1, backgroundColor:'transparent'}}/>
                    <Scene key="login" >
                        <Scene key="loginModal" component={Login} title="Login"/>
                    </Scene>
                    <Scene key="tabbar" initial={true} tabs={true} default="tab1">
                        <Scene key="tab1" component={Home} title="首页" hideNavBar={true} icon={TabIcon}/>
                        <Scene key="tab2" title="样板间" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                            <Scene key="tab1_1" component={Register} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                            <Scene key="tab1_2" component={Register} title="Tab #1_2" titleStyle={{color:'black'}}/>
                        </Scene>
                        <Scene key="tab3" title="家居百科" icon={TabIcon}>
                            <Scene key="tab2_1" component={Register} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                            <Scene key="tab2_2" component={Register} title="Tab #2_2" duration={1} panHandlers={null}/>
                        </Scene>
                        <Scene key="tab4" title="我" icon={TabIcon} initial={true} hideNavBar={false}>
                            <Scene key='my' component={MyIndex} hideNavBar={true}/>
                            <Scene key="fillInfo" component={FillInfo} hideNavBar={false} hideTabBar={true} title="完善个人信息"/>
                            <Scene key="updateLoginPwd" component={UpdateLoginPwd} hideNavBar={false} hideTabBar={true} title="修改登录密码"/>
                            <Scene key="bindPhone" component={BindPhone} hideNavBar={false} hideTabBar={true} title="绑定手机"/>
                        </Scene>
                    </Scene>
                </Scene>
                <Scene key="error" component={Error}/>
            </Scene>
        </Router>;
    }
}