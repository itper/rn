import React,{Component} from 'react';
import {Dimensions,View,ScrollView,Text} from 'react-native';
const {height,width} = Dimensions.get('window');
const SettingItem = [
    {
        title:'123',
        desc:'123123',
    },
    {
        title:'123',
        desc:'123123'
    }
];
class Welcome extends Component{
    render(){
        return (
            <View
                style={{
                    height,
                    paddingTop:64
                }}
            >
                <Text onPress={()=>{
                    this.props.navigator.push({name:'feed'})
                }}>
                    123123
                </Text>
                <View
                    style={{
                    height:200,
                    width,
                }}
                >

                    <ScrollView
                        style={{backgroundColor:'red'}}
                    >
                        {
                            SettingItem.map(function(item,index){
                                return (
                                    <View
                                        key={index}
                                    >
                                        <Text
                                            style={styles.item}

                                            onPress={()=>{
                                        console.log(1);
                                        alert();
                                    }}
                                        >
                                            {item.title}
                                        </Text>
                                        <View style={styles.cutline}/>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}


export default Welcome;

const styles = {
    item:{
        height:30,
        backgroundColor:'yellow',
        lineHeight:30
    },
    cutline:{
        height:1,
        backgroundColor:'gray'
    }
};