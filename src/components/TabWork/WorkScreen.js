
import React, { Component } from 'react';
import {
    Animated,
    Platform,
    View,
    Text,
    StatusBar,
    Image, TouchableOpacity,
    StyleSheet, ListView, ScrollView, ToastAndroid
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import AppConstants from '../../constants/application.constants';
import ParallaxView from 'react-native-parallax-view'
var workdata = require('../../data/data1.json')
const HEADER_MAX_HEIGHT = 30;

const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT;
export default class WorkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            scrollY: new Animated.Value(0),

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            param: {

                experience: null,
                gender: null,
                job: null,
                typejob: null,
                major: null,
                city: null,
                salarymax: null,
                salarymin: null,
                query: "",
                page: 1,
                firstrequest: true
            },
            
            rootparam: {

                experience: null,
                gender: null,
                job: null,
                typejob: null,
                major: null,
                city: null,
                salarymax: null,
                salarymin: null,
                query: "",
                page: 1,
                firstrequest: true
            },
        };
        this.onScroll = this.onScroll.bind(this);
        this.gotoFilter = this.gotoFilter.bind(this);
        this.gotoQuickFilter = this.gotoQuickFilter.bind(this);
        this.gotoDetailRecruitment = this.gotoDetailRecruitment.bind(this)
        this.gotoDefault = this.gotoDefault.bind(this)
        this.offset = 0;
    }



    renderScrollViewContent() {

        return (
            <View style={{ marginTop: 78, margin: 1, marginBottom: 40, height: HEIGHT - 153 }}>

                {/* { console.log("RE  ",this.props.listrecruiment)} */}
                {

                    this.props.listrecruiment ?
                        <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listrecruiment)}
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            enableEmptySections={true}


                            onEndReached={() => {
                                if (this.props.listrecruiment.length > 4) {
                                    this.setState(prevState => ({
                                        param: {
                                            ...prevState.param,
                                            page: this.state.param.page+ (this.state.param.page<this.props.amountRecruiment ? 1:0),
                                            firstrequest: false

                                        }
                                    }))
                                    setTimeout(() => {
                                        console.log("Page", this.state.param.page)
                                        this.props.onFetchFilterRecruiment(this.state.param)
                                    }, 200);
                                }
                            }}
                            onEndReachedThreshold={50}
                            renderFooter={() => this.props.isNextLoading === true ? <View style={{ height: 50, width: WIDTH, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 35, width: 35 }} source={require('../../images/loading_app.gif')} />
                            </View> : null}
                            renderRow={(row) =>
                                <TouchableOpacity onPress={() => this.gotoDetailRecruitment(row)}>

                                    <View style={styles.container1}>
                                        {console.log("ROW", row)}
                                        <Image source={{ uri: AppConstants.URL + row.image }} style={styles.photo} resizeMode='stretch' />
                                        <View style={styles.columcon}>

                                            <Text style={styles.text1} numberOfLines={3}>{row.title}</Text>
                                            <Text style={styles.text2} numberOfLines={1}>{row.companyname} </Text>
                                            {/*<Text style={styles.text3} ><Text style={styles.text4} >Công Việc :</Text> {row.Work}</Text>
                                    <Text style={styles.text3} numberOfLines={1}><Text style={styles.text4} >Lương :</Text> {row.Minsalary}-{row.Maxsalary} $</Text>*/}
                                            <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5, }}>
                                                <Image style={{ resizeMode: 'stretch', height: 17, width: 17, marginTop: 1, marginBottom: 1 }} source={require('../../images/job_icon.png')}></Image>
                                                <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12, width: width / 2 - 50 }} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}>:</Text> {row.job}</Text>

                                            </View>
                                            <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5, }}>
                                                <Image style={{ resizeMode: 'stretch', height: 17, width: 17, marginTop: 1, marginBottom: 1 }} source={require('../../images/salary_icon.png')}></Image>
                                                <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 }} numberOfLines={1}><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold', marginLeft: 1 }} numberOfLines={1}>:</Text > {row.salary}{row.salary > 0 ? '$' : ''} </Text>

                                            </View>
                                            <View style={{
                                                flexDirection: 'row', marginLeft: 25, marginRight: 5,
                                            }}>
                                                <Image style={{ resizeMode: 'stretch', height: 17, width: 17, marginTop: 1, marginBottom: 1 }} source={require('../../images/location_icon.png')}></Image>
                                                <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12, width: width / 2 - 50 }} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}  >:</Text> {row.location}</Text>

                                            </View>
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
    onScroll(event) {
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.offset ? null : event.nativeEvent.contentOffset.y = this.state.scrollY + this.offset;
        this.offset = currentOffset;
        console.log(direction);
    }
    gotoFilter() {
        Actions.filter_screen();
    }
    gotoQuickFilter() {
        Actions.quickfilter_screen({ typeuser: 1 });
    }
    gotoDetailRecruitment(info) {

        this.props.fetchdetailRecruiment({ id: info.id })
        this.props.onfetchListComment({ recruimentid: info.id })
        Actions.tab_detailjob({ reid: info.id });
    }
    render() {
        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });





        return (

            // <View style={{ flex: 1 }}>
            //     <View style={{ flex: 1, backgroundColor: '#BB0000', alignItems: 'center', flexDirection: 'row', }}>
            //         <TouchableOpacity style={{ flex: 1,margin:10 }}>
            //             <Image
            //                 style={{ width: 25, height: 35, }}
            //                 source={require('../../images/ic_location.png')}
            //             />
            //         </TouchableOpacity>
            //         <TouchableOpacity style={{ flex:10 }}>
            //             <Text style={{ fontWeight: 'bold', fontSize: 19, color: '#222333'}}> HỒ CHÍ MINH</Text>
            //         </TouchableOpacity>
            // <TouchableOpacity style={{ flex: 1 ,margin:10}}>
            //     <Image
            //         style={{ width: 30, height: 30, }}
            //         source={require('../../images/ic_search.png')}
            //     />
            // </TouchableOpacity>
            <Container>

                {/*<Content style={{ backgroundColor: '#EDD4AC' }}>*/}

                <View style={{ flex: 1 }}>

                    <Animated.ScrollView
                        style={styles.fill}
                        scrollEventThrottle={1}

                    >

                        {this.props.isLoading === false ? this.renderScrollViewContent()
                            : <View style={{ height: HEIGHT - 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 50, width: 50 }} source={require('../../images/loading_app.gif')} />

                            </View>
                        }

                    </Animated.ScrollView>
                    <View
                        style={
                            styles.top
                        }
                    >


                        <Image source={require('../../images/search_white_icon.png')} style={{ width: 25, height: 25, margin: 5 }} />

                        <Input
                            placeholder={"Tìm Kiếm"}
                            onChangeText={(text) => {
                                this.setState(prevState => ({
                                    param: {
                                        ...prevState.param,
                                        query: text,
                                        firstrequest: true,
                                        page: 1

                                    }
                                }))
                                setTimeout(() => { this.props.onFetchFilterRecruiment(this.state.param) }, 500)
                            }
                            }
                            value={this.state.param.query}
                            style={{
                                borderColor: '#2E4053', margin: 5, borderWidth: 0.5, flex: 1, fontSize: 15,
                                borderRadius: 3, backgroundColor: 'white',
                                height: 30, padding: 0, paddingLeft: 5
                            }}
                        >
                        </Input>



                    </View>
                    <Animated.View
                        style={[
                            styles.header,
                            { transform: [{ translateY: headerTranslate }] },
                        ]}
                    >
                        <TouchableOpacity style={{ marginBottom: 5, marginRight: 5, marginLeft: 5, marginTop: 2, flex: 0.5 }} onPress={this.gotoQuickFilter}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Image source={require('../../images/quick_find_icon.png')} style={{ width: 22, height: 22, marginTop: 3 }} />
                                <Text style={{ fontSize: 13, color: "#2E4053", margin: 4 }}>TÌM NHANH </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginBottom: 5, marginRight: 5, marginLeft: 5, marginTop: 2, flex: 0.5 }} onPress={this.gotoFilter}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Image source={require('../../images/filter_icon.png')} style={{ width: 22, height: 22, marginTop: 3 }} />
                                <Text style={{ fontSize: 13, color: "#2E4053", margin: 4 }}>LỌC</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginBottom: 5, marginRight: 5, marginLeft: 5, marginTop: 2, flex: 0.5 }} onPress={this.gotoDefault}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../images/reset_icon.png')} style={{ width: 22, height: 22, marginTop: 3 }} />
                                <Text style={{ fontSize: 13, color: "#2E4053", margin: 4 }}>MẶC ĐỊNH</Text>
                            </View>
                        </TouchableOpacity>

                    </Animated.View>


                </View>

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
    photo: {
        marginTop: 2,
        height: 75,
        width: 135,
        resizeMode: 'stretch'
    },
    columcon: {
        flex: 1,
        marginLeft: 10,
        marginRight: 5,


    },
    container1: {
        // flex: 0.5,
        margin: 2, width: width / 2 - 5,
        borderRadius: 0,
        borderColor: "#2E4053",
        borderWidth: 0.5,
        height: 210,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'


    },
    text1: {
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 4,
        height: 47,
        width: width / 2 - 20,
        fontWeight: 'bold',
        fontSize: 13,
        color: '#2E4053',

    }
    ,
    text2: {
        marginLeft: 15,
        fontStyle: 'italic',
        marginRight: 5,
        fontSize: 13,
        color: "#60819E"

        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    }
    ,
    text3: {
        marginLeft: 15,

        marginRight: 5,
        fontSize: 12,
        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    },
    text4: {
        marginLeft: 15,

        marginRight: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: "#3D3D3D"
        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    },
    slide: {
        height: 250,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    wrapper: {
    },
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    top: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,

        width: WIDTH,

        alignItems: 'center',
        backgroundColor: '#2E4053',
        flexDirection: 'row'


    },
    header: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        flexDirection: 'row',
        borderTopColor: "white",
        borderRightColor: "white",
        borderLeftColor: "white",

        backgroundColor: 'white',
        borderBottomColor: "#2E4053",

        borderWidth: 0.5,
        // overflow: 'hidden',
        height: HEADER_MAX_HEIGHT + 5,
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
const mapStateToProps = (state) => {

    return {


    }
}
