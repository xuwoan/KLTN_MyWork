
import React, { Component } from 'react';
import {
    View,
    Text, ScrollView,
    StyleSheet, Image, TouchableOpacity, ListView, ToastAndroid
} from 'react-native';


import { Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import AppConstants from '../../constants/application.constants';
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
export default class ChooseDept extends Component {



    constructor(props) {
        super(props)



    }

    renderListCV() {

        return (

            <View style={{ height: HEIGHT - 180, marginBottom: 50 }}>

                {

                    //         this.props.listcvte ?
                    <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listqueryCV)}
                        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                        enableEmptySections={true}
                        onEndReached={() => {
                            if (this.props.listqueryCV.length > 4) {
                                //   ToastAndroid.show("Dsa", 50)
                                this.setState(prevState => ({
                                    param: {
                                        ...prevState.param,
                                        page: this.state.param.page + (this.state.param.page < this.props.amountCV ? 1 : 0),
                                        firstrequest: false

                                    }
                                }))

                                setTimeout(() => {
                                    console.log("Page CV", this.state.param.page)
                                    this.props.onfetchFindCVPublic(this.state.param)
                                }, 200);
                            }
                        }}
                        onEndReachedThreshold={50}
                        renderFooter={() => this.props.isNextLoading ===true ?  <View style={{ height: 50, width: WIDTH, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 35, width: 35 }} source={require('../../images/loading_app.gif')} />
                        </View>: null}
                        renderRow={(row) =>
                            // onPress={() => this.gotoDetailCV(row.id)}
                            <TouchableOpacity onPress={() => this.onGotoReviewCV(row.cvid)}>

                                <View style={styles.container1}>
                                    {/* <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, margin: 3 }} onPress={() => this.gotoAskDetele(this.props.recruimentid, row.candidateid)}>
                                            <Image Image source={require('../../images/delete_icon.png')} style={{ height: 20, width: 20 }} resizeMode='stretch' />
                                        </TouchableOpacity> */}

                                    <Image source={{ uri: AppConstants.URL + row.image }} style={styles.avatar} resizeMode='stretch' />

                                    <View style={styles.columcon}>
                                        <Text style={styles.textcandidatename} numberOfLines={2}>{row.username}</Text>

                                        <Text style={{ fontSize: 13, textAlign: 'center', flex: 1 }} numberOfLines={4} > {row.job}</Text>

                                    </View>

                                </View>

                            </TouchableOpacity>
                        }
                    >
                    </ListView>
                    //             :
                    //             null
                }
            </View>
        );
    }
    render() {

        return (
            <Container>
                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => { Actions.pop() }}>
                            <Image resizeMode='stretch' style={styles.imagearrow}
                                source={require('../../images/arrow_icon.png')}

                            />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title>{this.props.department}</Title>
                    </Body>

                </Header>

                <View style={{ backgroundColor: '#DFDFDF', flex: 1 }}>

                    <View
                        style={
                            styles.top
                        }
                    >


                        <Image source={require('../../images/find_icon.png')} style={{ width: 25, height: 25, margin: 5 }} />

                        <Input
                            placeholder={"Tìm kiếm vị trí tuyển dụng"}

                            onChangeText={(text) => {
                                this.setState(prevState => ({
                                    param: {
                                        ...prevState.param,
                                        job: text,
                                        page: 1,
                                        firstrequest:true
                                    }
                                }))
                                console.log(this.state.param)
                                setTimeout(() => { this.props.onfetchFindCVPublic(this.state.param) }, 500)
                            }
                            }
                            value={this.state.param.job}
                            style={{
                                borderColor: '#2E4053', margin: 5, borderWidth: 0.5, flex: 1, fontSize: 15,
                                borderRadius: 3, backgroundColor: 'white', paddingTop: 10,
                                height: 40
                            }}
                        >
                        </Input>



                    </View>
                    <ScrollView style={{ marginTop: 50 }}>
                        {!this.props.isLoading ?

                            this.renderListCV()
                            :
                            <View style={{ height: HEIGHT - 150, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                            </View>
                        }



                    </ScrollView>




                </View>
            </Container>
        )
    }
}



const styles = {


    top: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,

        width: WIDTH,

        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#2E4053',

        flexDirection: 'row'


    },
    imagearrow: {
        height: 30,
        width: 30,
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
        marginLeft: 5,
        marginRight: 5,


    },
    container1: {
        // flex: 0.5,
        margin: 10, width: WIDTH / 2 - 20,
        borderRadius: 0,
        borderColor: "#2E4053",
        borderWidth: 0.5,
        height: 200,
        elevation: 4,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'


    },

    textcandidatename: {

        fontStyle: 'italic',
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 16,
        color: "#60819E",


        textAlign: 'center',
        height: 35
        //  position: 'absolute',
        // right: 0,
    }









}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
