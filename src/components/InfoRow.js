import React ,{Component} from 'react';

import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';

class InfoRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableHighlight
                onPress={()=>{
                    this.props.onPress(topic)
                }}
                underlayColor='#300000'
            >
                <View style={styles.row}>
                    <Text>{this.props.info.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}


var styles = StyleSheet.create({
    row:{
        height:90,
        flexDirection:'row',
        borderBottomColor:'rgba(0,0,0,0.02)',
        borderBottomWidth:1,
        paddingTop:25,
        paddingRight:0,
        paddingBottom:25,
        paddingLeft:20,
    }
});

export default InfoRow;