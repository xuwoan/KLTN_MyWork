
import React, { Component } from 'react';
import {
    Animated,
    Platform,
    View,
    Text,
    StatusBar,
    Image, TouchableOpacity,
    StyleSheet, ListView, ScrollView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Container, Icon, Button, Header, Body, Title, Left, Right, Content } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
import AppConstants from '../../constants/application.constants';
import ParallaxView from 'react-native-parallax-view'
var workdata = require('../../data/data1.json')
const HEADER_MAX_HEIGHT = 40;

const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT;
export default class CVinPost extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };

    }

    goBack() {
        Actions.pop()
    }
    renderListJob(data) {
        let listcolor = ['#AE89BF', '#60BB72', '#E9B365']
        let views = [];
        for (var i = 0; i < data.length; i++) {

            if (data.length !== 0)
                views.push(
                    <Text style={[styles.textposition,{color:listcolor[i]}]} numberOfLines={1}>{data[i]}</Text>
                );
        }
        return views;
    }
    renderListCV() {

        return (
            <View style={{ margin: 1 }}>

                {

                    this.props.listcvte ?
                        <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listcvte)}
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            renderRow={(row) =>
                                <TouchableOpacity onPress={() => this.gotoDetailCV(row.id)}>

                                    <View style={styles.container1}>
                                        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, margin: 3 }} onPress={() => this.gotoAskDetele(this.props.recruimentid, row.candidateid)}>
                                            <Image Image source={require('../../images/delete_icon.png')} style={{ height: 20, width: 20 }} resizeMode='stretch' />
                                        </TouchableOpacity>

                                        <Image source={{ uri: AppConstants.URL + row.image }} style={styles.avatar} resizeMode='stretch' />

                                        <View style={styles.columcon}>
                                            <Text style={styles.textcandidatename} numberOfLines={2}>{row.candidatename}</Text>
                                            {this.renderListJob(row.position)}
                                            <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 13, textAlign: 'center' }} numberOfLines={1} > {row.date}</Text>
                                            {/* <Text style={styles.text1} numberOfLines={3}>{row.title}</Text>
                                    
                                    
                                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5, }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/job_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 ,width:width/2-50}} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}>:</Text> {row.job}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5, }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/salary_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 }} numberOfLines={1}><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold',marginLeft:1 }} numberOfLines={1}>:</Text > {row.salary }{row.salary>0?'$':''} </Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5,
                                     }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/location_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 ,width:width/2-50 }} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}  >:</Text> {row.location }</Text>

                                    </View> */}
                                        </View>

                                    </View>

                                </TouchableOpacity>
                            }
                        >
                        </ListView> :
                        null
                }
            </View>
        );
    }


    render() {






        return (


            <Container>

                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => this.goBack()}>
                            <Image resizeMode='stretch' style={styles.imagearrow}
                                source={require('../../images/arrow_icon.png')}

                            />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title>CV ứng tuyển </Title>
                    </Body>

                </Header>

                <Content style={{ flex: 1, backgroundColor: 'white' }}>



                    {this.renderListCV()}


                    <View style={{ height: 50 }} />

                </Content>

            </Container>

        )
    }
    componentDidMount() {
        console.log("USEEEEEEEEEEE", this.props.user)

    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcb05',
    },
    image: {
        width,
        backgroundColor: 'transparent',

    },
    avatar: {
        marginTop: 2,
        height: 90,
        width: 90,
        borderRadius: 48,
        resizeMode: 'stretch'
    },
    columcon: {
        flex: 1,
        marginLeft: 10,
        marginRight: 5,


    },
    container1: {
        // flex: 0.5,
        margin: 10, width: width / 2 - 30,
        borderRadius: 0,
        borderColor: "#2E4053",
        borderWidth: 0.5,
        height: 203,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'


    },
    textposition: {
        marginLeft: 5,
        marginRight: 5,

        textAlign: 'center',
        height: 19,

        fontWeight: 'bold',
        fontSize: 15,


    }
    ,
    textcandidatename: {

        fontStyle: 'italic',
        marginRight: 5,
        fontSize: 15,
        color: "#60819E",


        textAlign: 'center',
        height: 35
        //  position: 'absolute',
        // right: 0,
    }
    ,
    imagearrow: {
        height: 30,
        width: 30,
    },

    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',

        left: 0,
        right: 0,
        flexDirection: 'row',
        borderTopColor: "white",
        borderRightColor: "white",
        borderLeftColor: "white",

        backgroundColor: 'white',
        borderBottomColor: "#60819E",

        borderWidth: 0.5,
        // overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

