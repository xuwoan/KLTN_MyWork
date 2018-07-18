
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';


import { Container, Icon, Button, Header, Body, Title, Left, Right, Content } from 'native-base';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
const { width } = Dimensions.get('window')
const HEIGHT = Dimensions.get('window').height
export default class MoreScreen extends Component {
    gotoInfoScreen() {
        Actions.screen_userinfo()
    }
    gotoCVPublicScreen()
    {
        this.props.onfetchUserCVPublic({userid:this.props.user.userid})
        Actions.screen_cvpublic();
     
    }
    Logout() {
        this.props.onLogout({userid:this.props.user.userid});
        Actions.login_screen();
    }
    constructor(props) {
        super(props)

        this.gotoInfoScreen = this.gotoInfoScreen.bind(this);
        this.gotoCVPublicScreen = this.gotoCVPublicScreen.bind(this);
        this.Logout = this.Logout.bind(this);

    }
    render() {

        return (
            <Container>

                <Content style={{ backgroundColor: '#DFDFDF' }}>
                    {/*{this.props.isLoading ?
                    <Spinner
                        color={commonColor.toolbarDefaultBg} /> : null}*/}

                    <View style={styles.content}>

                        <TouchableOpacity style={styles.rowContent}>
                            <Text style={styles.textContent}>Thông tin ứng dụng </Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowContent} onPress={() => this.gotoInfoScreen()}>
                            <Text style={styles.textContent}>Thông tin cá nhân</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowContent} onPress={() => this.gotoSettingScreen()}>
                            <Text style={styles.textContent}>Cài đặt thông báo</Text>

                        </TouchableOpacity >
                        <TouchableOpacity style={styles.rowContent} onPress={() => this.gotoCVPublicScreen()}>
                            <Text style={styles.textContent}>Tham gia cộng đồng tuyển dụng</Text>

                        </TouchableOpacity >
                        <TouchableOpacity style={styles.rowContent} onPress={this.Logout}>
                            <Text style={styles.textContent}>Đăng xuất</Text>

                        </TouchableOpacity>

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
    content: {
        backgroundColor: '#fff',

        margin: 5,
        height: HEIGHT - 85
    },
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

}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
