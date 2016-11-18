import React,{Component,PropTypes} from 'react';
import {Navigator,StyleSheet,View,Text,Image,Dimensions} from 'react-native';
import Welcome from './Welcome';
import Feed from './Feed';
import Home from './Home';
class Navigation extends Component{
    constructor(props){
        super(props);
        this.ids = [];
    }
    render(){
        return (
            <Image
                source={{uri:'../images/logo.png'}}
                style={styles.bg}
            >
                <Navigator
                    ref={view=>this.navigator=view}
                    initialRoute={{name:'home'}}
                    configureScene={
                        route=>{
                            return Navigator.SceneConfigs.FloatFromRight;
                        }
                    }
                    navigationBar={
                        <Navigator.NavigationBar
                            routeMapper={{
                                LeftButton:(route,navigator,index,navState)=>{
                                    return (
                                        <View
                                            style={styles.navigationBarItem}
                                        >
                                            <Text style={
                                                {
                                                    paddingLeft:10,
                                                }
                                            }>Cancel</Text>

                                        </View>
                                    );
                                },
                                RightButton:(route,navigator,index,navState)=>{
                                    return (
                                        <View
                                            style={styles.navigationBarItem}
                                        >
                                            <Text style={{
                                                paddingRight:10
                                            }}>Done</Text>
                                        </View>
                                    );
                                },
                                Title:(route,navigator,index,navState)=>{
                                    return (
                                        <View
                                            style={styles.navigationBarItem}
                                        >
                                            <Text>Awesome Nav Bar</Text>
                                        </View>
                                    )
                                },
                            }}
                            style={{
                                backgroundColor:'white'
                            }}
                        />
                    }
                    renderScene={
                        (router,navigator)=>{
                            var Component = null;
                            switch(router.name){
                                case "welcome":
                                    Component = Welcome;
                                    break;
                                case "feed":
                                    Component = Feed;
                                    break;
                                case "home":
                                    Component = Home;
                            }
                            return <Component navigator={navigator}/>
                        }
                    }
                />
            </Image>
        )
    }
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    navigationBarItem:{
        height:48,
        justifyContent:'center',
    }
});

export default Navigation;