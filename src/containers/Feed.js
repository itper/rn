import React, {Component} from 'react';
import {View,Text} from 'react-native';

class Feed extends Component{
    render(){
        return(
            <View style={{
           flex:1,
           backgroundColor:'green'
           }}>
                <Text style={{
               flex:1,
               width:100,
               backgroundColor:'yellow'
               }} onPress={()=>{
                    this.props.navigator.pop();
                }}>
                    tap
                </Text>
            </View>
        )
    }
}


export default Feed;