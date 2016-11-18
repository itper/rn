import React ,{Component,PropTypes} from 'react';
import {View,Text,StyleSheet,Dimensions,Animated,Easing,StatusBar,ListView} from 'react-native';
import ScrollableTab from '../components/ScrollableTab';
import InfoList from '../components/InfoList';
const {height,width} = Dimensions.get('window');
const tabs = ['推荐','本地','搞笑','社会','汽车','娱乐','房产','123'];
class Home extends Component{
    componentDidMount(){
        
    }
    render(){
        const {router,user,message} =this.props;
        return (
            <View style={{flex:1}}>
                <ScrollableTab
                    ref={view=>this._scrollableTabs=view}
                    tabs = {tabs}
                    tabnavItemWidth={tabs.length>5?width/5:width/tabs.length}
                    onPageChangedAndAnimatedEnd={()=>{
                    }}
                >

                    <InfoList/>
                    <View style={{width:100,height:100,backgroundColor:'gray'}}>
                    </View>

                    <View style={{width:100,height:100,backgroundColor:'green'}}>
                        <View style={{width:50,height:100,backgroundColor:'blue'}}>
                        </View>
                        <View style={{width:10,height:100,backgroundColor:'yellow'}}>
                        </View>
                    </View>
                    <View style={{width:100,height:100,backgroundColor:'gray'}}>
                    </View>


                    <View style={{width:100,height:100,backgroundColor:'green'}}>
                        <View style={{width:50,height:100,backgroundColor:'blue'}}>
                        </View>
                        <View style={{width:10,height:100,backgroundColor:'yellow'}}>
                        </View>
                    </View>
                    <View style={{width:100,height:100,backgroundColor:'gray'}}>
                    </View>

                    <View style={{width:100,height:100,backgroundColor:'green'}}>
                        <View style={{width:50,height:100,backgroundColor:'blue'}}>
                        </View>
                        <View style={{width:10,height:100,backgroundColor:'yellow'}}>
                        </View>
                    </View>
                    <View style={{width:100,height:100,backgroundColor:'gray'}}>
                    </View>

                </ScrollableTab>
            </View>
        )
    }
}
export default Home;