
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity, TouchableHighlight,
    StyleSheet, ListView, ScrollView, TextInput
} from 'react-native';


// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CustomizeTab from '../ui/CustomizeTab'
import MyCVScreen from './MyCVScreen.container'
import ReviewCV from './ReviewCVScreen.container'
import CVAdding from './CVAdding.container'
import { Item, Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import Dimensions from 'Dimensions';// lấy thông tin thiết bịimport Dimensions from 'Dimensions';// lấy thông tin thiết bị

const HEIGHT = Dimensions.get('window').height
var colorchoose = 'white';
var backgroundColorchoose = "#60819E"
var colornonchoose = 'gray';
var backgroundColornonchoose = "white"
class TabCV extends Component {
    constructor(props) {
        super(props);
        this.state = {



            tab: 0,

        };



    }
    render() {

        return (



            <Container>
                <ScrollableTabView
                    initialPage={0}
                    ref="scrolltab"
                    onChangeTab={() => {
                        this.setState({
                            tab: this.refs.scrolltab.state.currentPage
                        })
                    }}
                    renderTabBar={() => <CustomizeTab />}>
                    <View style={{ flex: 1 }} tabLabel="Tạo CV ">
                        <CVAdding ref="tabcv"></CVAdding>
                    </View>
                    <MyCVScreen tabLabel="CV của tôi"></MyCVScreen>
                </ScrollableTabView>
                {this.state.tab === 0 ?
                    <ActionButton buttonColor="#000000" offsetY={HEIGHT - 130} offsetX={5} size={52}
                        icon={<Image resizeMode='stretch' style={{ height: 30, width: 30 }} source={require('../../images/save_icon.png')} />}
                        onPress={() => {this.refs.tabcv.wrappedInstance.Requestdata()}}
                    >

                        
                    </ActionButton>
                    : null
                }


            </Container>





        )
    }

} const styles = StyleSheet.create({

});


export default TabCV;