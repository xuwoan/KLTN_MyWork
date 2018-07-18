
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
import MyPostScreen from './MyPostScreen.container'
import PostScreen from './PostScreen.container'
import { Item, Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
var colorchoose = 'white';
var backgroundColorchoose = "#60819E"
var colornonchoose = 'gray';
var backgroundColornonchoose = "white"
class TabRecruiment extends Component {
    constructor(props) {
        super(props);
        this.state = {



            tab:this.props.noti_type ===undefined ? 0 :1,
            colorPost: colorchoose,
            colorSee: colornonchoose,
            backgroundColorPost: backgroundColorchoose,
            backgroundColorSee: backgroundColornonchoose
        };



    }
    render() {

        return (



            <Container>
                <ScrollableTabView
                initialPage={this.props.noti_type ===undefined ? 0 :1}
               
                renderTabBar={() =>  <CustomizeTab/>}>
                    <PostScreen tabLabel="Đăng tin"></PostScreen>
                    <MyPostScreen tabLabel="Tin của tôi"></MyPostScreen>
                </ScrollableTabView>
            </Container>





        )
    }
   
} const styles = StyleSheet.create({
   
});
export default TabRecruiment;