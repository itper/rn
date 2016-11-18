import React ,{Component} from 'react';
import {View,StyleSheet,Text,ListView,Dimensions,RefreshControl,ActivityIndicator} from 'react-native';
import InfoRow from './InfoRow';
class InfoList extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {ds:ds.cloneWithRows([])}
        this.refresh();
    }
    async refresh(){
       let list =  await fetch('http://mobds.ganji.cn/api/v1/msc/v1/common/information/v2/list?scene=category&category_id=9&from=appindex&tabid=recomm&city_id=12',{
            headers:{
                contentformat:'json2',
                customerId:801,
                'GjData-Version':'6.0.0',
                mac:'8A4F3DB8-F71E-4343-95B8-E249E790DDE3',
                model:'Generic/iphone',
                token:'5170554a5868544d69564e6c2b35387351704c356a4d5559',
                userId:'AB2CF15DC6A693DCC4BC3416F6B8F1EB',
                versionId:'6.0.0',
                'X-Ganji-ClientAgent':'samsung/GT-I9500#1080*1920#3.0#4.4.2',
                'X-Ganji-CustomerId':801,
                'X-Ganji-InstallId':'BE83217369A16664CD7828E24D1485A0',
                'X-Ganji-Token':'30346d523130345572664d2f433231313034542f32656a77',
                'X-Ganji-VersionId':'6.0.0'
            }
        });
        list = await list.json();
        this.setState({ds:this.state.ds.cloneWithRows(list.data.idlist[0])})
    }
    render(){

        return(
            <ListView
                showsVerticalScrollIndicator
                removeClippedSubviews
                enableEmptySections
                initialListSize={10}
                pagingEnabled={false}
                dataSource={this.state.ds}
                renderRow={this.renderRow.bind(this)}
                onEndReachedThreshold={30}
                onEndReached={this._onEndReached.bind(this)}
                renderFooter={this._renderFooter.bind(this)}
                refreshControl={
                    <RefreshControl
                        ref={view=>this.refreshControl=view}
                        refreshing={false}
                        onRefresh={()=>{
                            this.refresh();
                        }}
                    />
                }
            >
            </ListView>
        )
    }
    _renderFooter(){
        const {reachedEndPending} = this.props;
        if(reachedEndPending){
            return (
                <View style={styles.reachedEndLoading}>
                    <ActivityIndicator animating={true} color="rgb(0,0,0)"/>
                </View>
            )
        }
    }
    _onEndReached(){

    }
    renderRow(info,index,row,onRowHighighted){
        return(
            <InfoRow info={info}>

            </InfoRow>
        )
    }
}
export default InfoList;