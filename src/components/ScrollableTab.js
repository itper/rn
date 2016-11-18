import React ,{Component,PropTypes} from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform,
    ScrollView,
    Animated,
    ViewPageAndroid
} from 'react-native';

const {height,width} = Dimensions.get('window');
class ScrollableTab extends Component{
    static propTypes = {

    };
    static defaultProps = {

    };
    constructor(props){
        super(props);
        this.index=0;
        this.contentLength = props.tabnavItemWidth*props.tabs.length;
        this.state={x:new Animated.Value(0),index:0};
        this.tabs = [];
        this.originColor = [66,145,26];
    }
    render(){

        console.log(this.state.x);
        return(
            <View style={[styles.container,this.props.style]}>
                <View style={[styles.navWrapper]}>
                    <View style={styles.line}/>
                    {this._renderNavs()}
                    <View style={styles.line}/>
                </View>
                {this._renderPageScroll()}
            </View>
        )
    }
    _onScroll(e){
        const {contentSize={}} = e.nativeEvent;
        if(contentSize.height===0 && contentSize.width===0)return;
        const {x} = e.nativeEvent.contentOffset;
        var currentPage = parseInt(x/width);
        var currentView = this.tabs[currentPage];
        let targetView = null;
        let p = (x-(currentPage*width))/width;
        if(currentPage!==this.tabs.length-1){
            let  targetColor = this.originColor.map((t)=>t*p);
            targetView = this.tabs[currentPage+1];
            targetView.setNativeProps({style:{color:'rgb('+targetColor.join(',')+')'}});
        }
        let currentColor = this.originColor.map((t)=>t*(1-p));
        currentView.setNativeProps({style:{color:'rgb('+currentColor.join(',')+')'}});

        Animated.event([{a:this.state.x}])({a:this.props.tabnavItemWidth*x/width});
    }
    _onMomentumScrollEnd(e){
        const page = parseInt(e.nativeEvent.contentOffset.x/width,10);
        let tabwidth = this.props.tabnavItemWidth;
        if(page!=this.index){
            typeof this.props.onPageChanged === 'function' && this.props.onPageChanged(page,false);
        }
        this.index = page;
        this.setState({...this.state,index:page});
        let x = tabwidth*(page+1)-width/2-tabwidth/2;
        if(x<0)x=0;
        if(x+width>this.contentLength) x = this.contentLength-width;
        this.nav.scrollTo({x:x,y:0,animated:true});
    }
    _renderPageScroll(){
        return (
            <ScrollView
                horizontal
                pagingEnabled
                directionalLockEnabled
                removeChippedSubviews
                scrollEnabled
                ref={view=>this.scrollView=view}
                contentOffset={{x:this.index * width,y:0}}
                alwaysBounceVertical={false}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollsToTop={false}
                scrollEventThrottle={16}
                onScroll={this._onScroll.bind(this)}
                onMomentumScrollBegin={()=>{}}
                onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                keyboardDismissMode="on-drag"
            >
                {
                    this.props.children.map((pageContent,index)=>{
                        return (
                            <View key={index} style={{width,backgroundColor:'white'}}>
                                {pageContent}
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
    _onNavItemPress(index){
        this.scrollView.scrollTo({x:width*index,y:0,animated:true});
    }
    _renderNavs(){
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ref={view=>this.nav=view}
            >
                {
                    this.props.tabs.map((item,index)=>{
                        let activeStyle={};
                        if(index===this.state.index)  activeStyle = {'color':'rgb('+this.originColor.join(',')+')'}
                        return (
                            <TouchableOpacity key={index} onPress={this._onNavItemPress.bind(this,index)}>
                                <View key={index} style={[styles.navItem,{width:this.props.tabnavItemWidth},]}>
                                    <Text style={[styles.itemText,activeStyle]}
                                    ref={view=>this.tabs[index]=view}>
                                        {item}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <Animated.View style={[styles.cursor,{width:this.props.tabnavItemWidth},{transform:[{translateX:this.state.x}]}]}/>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:64
    },
    navItem:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    itemText:{
        textAlign:'center',
        height:20,
    },
    cursor:{
        backgroundColor:'#55ba21',
        height:10,
        position:'absolute',
        left:0,
        top:36,
        bottom:0
    },
    line:{
        height:1,
        width,
        backgroundColor:'gray'
    },
    navWrapper:{
        height:40,
        width,
    }
})

export default ScrollableTab;