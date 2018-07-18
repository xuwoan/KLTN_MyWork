
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';


import { Container, Icon, Button, Header, Body, Title, Left, Right, Content, Item } from 'native-base';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import Switch from 'react-native-material-switch';
const { width } = Dimensions.get('window')

const HEIGHT = Dimensions.get('window').height
export default class Candidate_Setting extends Component {

    constructor(props) {
        super(props)



    }
    goBack() {
        Actions.pop()
    }
    render() {

        return (
            <Container>
                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => this.goBack()}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/arrow_icon.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title>Cài đặt thông báo</Title>
                    </Body>

                </Header>

                <Content style={{ backgroundColor: 'white' }}>



                    <View style={{ backgroundColor: '#DFDFDF', marginLeft: 5, marginRight: 5, height: HEIGHT }}>
                        <Item fixedLabel style={{

                            paddingBottom: 5,
                            height: 50,



                            margin: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ACACAC'
                        }} >
                            <Text style={{ marginLeft: 5, fontSize: 17, color: 'black', fontStyle: 'italic' }}>Nhà tuyển dụng đăng tin:</Text>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <Switch
                                    ref='switch'
                                    activeBackgroundColor='rgba(96, 129, 158,0.74)'
                                    inactiveBackgroundColor='rgba(193,193,193,0.74))'
                                    activeButtonColor='#60819E'
                                    activeButtonPressedColor='#60819E'
                                    inactiveButtonColor='#ACACAC'
                                    inactiveButtonPressedColor='#ACACAC'
                                    switchHeight={28}
                                    switchWidth={50}
                                    active={this.props.user.detailcandidate.setting.recruimentposted_noti}
                                    onActivate={() => {
                                      
                                        this.props.onfetchSettingNoti({ userid: this.props.user.userid, notitype: 0, data: true });
                                    }
                                    }
                                    onDeactivate={() => {
                                       
                                        this.props.onfetchSettingNoti({ userid: this.props.user.userid, notitype: 0, data: false });
                                    }
                                    }


                                />
                            </View>

                        </Item>
                    </View>


                </Content>
            </Container>
        )
    }
}

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#255005',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//   }
// })


const styles = {

    rowContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#DFDFDF',
        height: 40,


        marginHorizontal: 5,
        paddingVertical: 5,
    },
    title: {

    },
    titleText: {
        fontSize: 14,
        padding: 5
    },
    textContent: {
        color: "#9a9a9a",

        fontSize: 17
    },
    image: {
        height: 30,
        width: 30,
    }

}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
