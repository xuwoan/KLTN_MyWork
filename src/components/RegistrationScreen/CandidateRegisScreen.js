
import React, { Component } from 'react';
import {
    View,

    StyleSheet, Image, TouchableOpacity, TouchableHighlight
} from 'react-native';


import {
    Header, Title,
    Container,
    Body, Item, Text, ListItem, Row, Col,
    Input, Button, Content, Card, CardItem,
    Icon, Left, Right
} from "native-base";
import DatePicker from 'react-native-datepicker';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import ModalDropdown from 'react-native-modal-dropdown';

const { width } = Dimensions.get('window');
const DEMO_OPTIONS_2 = [
    { "city": "Hà Nội", "id": 1 },
    { "city": "TP HCM", "id": 2 },
    { "city": "Bình Dương", "id": 3 },
    { "city": "Đồng Nai", "id": 4 },
    { "city": "Vũng Tàu", "id": 5 },
    { "city": "Nghệ An", "id": 6 },
    { "city": "Cà Màu", "id": 7 },
    { "city": "Đà Nẵng", "id": 8 },
    { "city": "Lâm Đồng", "id": 9 },
    { "city": "Huế", "id": 10 },
    { "city": "Quảng Ninh", "id": 11 },
];
const DEMO_OPTIONS_3 = [
    { "province": "Q1", "id": 1 },
    { "province": "Q2", "id": 2 },
    { "province": "Q3", "id": 3 },
    { "province": "Q4", "id": 4 },
    { "province": "Q5", "id": 5 },
    { "province": "Q6", "id": 6 },
    { "province": "Q7", "id": 7 },
    { "province": "Q8", "id": 8 },
    { "province": "Q9", "id": 9 },
    { "province": "Q10", "id": 10 },
    { "province": "Q11", "id": 11 },
    { "province": "Q12", "id": 12 },
    { "province": "Q.Tân Bình", "id": 13 },
    { "province": "Q.Bình Tân", "id": 14 },
    { "province": "Q.Tân Phú", "id": 15 },
    { "province": "Q.Bình Thạnh", "id": 16 },
    { "province": "Q.Gò Vấp", "id": 17 },
    { "province": "Q.Thủ Đức", "id": 18 },
    { "province": "Q.Phú Nhuận", "id": 19 },
    { "province": "H.Bình Chánh", "id": 20 },
    { "province": "H.Cần Giờ", "id": 21 },
    { "province": "H.Nhà Bè", "id": 22 },
    { "province": "H.Củ Chi", "id": 23 },
    { "province": "H.Hóc Môn", "id": 24 },
];
const MARGIN = 40;
export default class CandidateRegisScreen extends Component {
    
    onCancel() {
        Actions.pop();
    }
  
   

    renderRowDropdownCity(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue' >
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 25 }}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
   

    render() {
        return (
            <Container>

                <Content style={{ backgroundColor: 'white' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#60819E', marginTop: 20, marginBottom: 10 }}> ĐĂNG KÝ </Text>
                    <Text style={{ fontSize: 16, marginLeft: 10, textDecorationLine: 'underline', marginRight: 10, color: '#60819E', fontStyle: 'italic' }}> Ứng Viên </Text>
                    <View style={styles.containeritem}>
                        <Item fixedLabel style={styles.itemstyle} >
                            <Text font-medium style={{fontStyle:'italic'}} >Tài Khoản:</Text>
                            <Input
                                placeholder={"Nhập tên tài khoản"}
                                placeholderTextColor='#BEBEBE'

                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                value={this.state.user.username}
                                onChangeText={(text) => {
                                    this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            username: text
                                        }
                                    }))
                                }}
                            // value={user.company.name}

                            />
                        </Item>
                    </View>
                    <View style={styles.containeritem}>
                        <Item fixedLabel style={styles.itemstyle} >
                            <Text font-medium style={{fontStyle:'italic'}} >Mật khẩu:</Text>
                            <Input
                                placeholder={"Nhập mật khẩu"}
                                placeholderTextColor='#BEBEBE'
                                secureTextEntry={true}
                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                value={this.state.user.password}
                                onChangeText={(text) => {
                                    this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            password: text
                                        }
                                    }))
                                }}

                            />
                        </Item>
                    </View>
                    <View style={styles.containeritem}>
                        <Item fixedLabel style={styles.itemstyle} >
                            <Text font-medium style={{fontStyle:'italic'}} >Xác nhận mật khẩu:</Text>
                            <Input
                                placeholder={"Nhập lại  mật khẩu"}
                                placeholderTextColor='#BEBEBE'
                                secureTextEntry={true}
                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                value={this.state.confirmpassword}
                                onChangeText={(text) => {
                                    this.setState({
                                            confirmpassword: text
                                        
                                    })
                                }}

                            />
                        </Item>
                    </View>
                    <View style={styles.containeritem}>
                        <Item fixedLabel style={styles.itemstyle} >
                            <Text font-medium style={{fontStyle:'italic'}}>Họ Tên:</Text>
                            <Input

                                placeholder={"Nhập Họ tên "}
                                placeholderTextColor='#BEBEBE'
                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                value={this.state.user.detail.name}
                                onChangeText={(text) => {
                                    this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            detail: {
                                                ...prevState.user.detail,
                                                name: text
                                            }
                                        }
                                    }))
                                }}

                            />
                        </Item>
                    </View>
                    <View style={styles.containeritem}>
                        <Item fixedLabel style={styles.itemstyle} >
                            <Text font-medium style={{fontStyle:'italic'}}>Ngày sinh:</Text>
                            <View style={{ flex: 1 }}>
                                <DatePicker
                                    style={{ alignSelf: 'flex-end', height: 40 }}
                                    date={this.state.user.detail.birthday}
                                    mode="date"
                                    placeholder={"Chọn ngày "}
                                    format="DD-MM-YYYY"
                                    confirmBtnText={"Chọn"}
                                    cancelBtnText={"Hủy bỏ"}
                                    onDateChange={(date) => this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            detail: {
                                                ...prevState.user.detail,
                                                birthday: date
                                            }
                                        }
                                    }))}
                                    showIcon={false}
                                    customStyles={{

                                        dateText: { color: "#60819E", fontSize: 14, fontWeight: 'bold', textAlign: 'right' },


                                    }}
                                />
                            </View>

                        </Item>
                    </View>
                    <View style={styles.containeritem}>
                        <Item fixedLabel style={{ ...styles.itemstyle }} >
                            <Text font-medium style={{fontStyle:'italic'}}>Email:</Text>
                            <Input
                                placeholder={"Nhập Email"}
                                placeholderTextColor='#BEBEBE'
                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                // value={user.company.name}
                                value={this.state.user.detail.email}
                                onChangeText={(text) => {
                                    this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            detail: {
                                                ...prevState.user.detail,
                                                email: text
                                            }
                                        }
                                    }))
                                }}

                            />
                        </Item>
                    </View>


                    <View style={styles.containeritem}>
                        <Item fixedLabel style={{ ...styles.itemstyle }} >
                            <Text font-medium style={{ width: 140,fontStyle:'italic' }} >Tỉnh/ Thành phố:</Text>
                            <ModalDropdown style={{ flex: 1, marginLeft: 45 }}
                                options={this.props.listprovince}
                                //defaultValue={this.state.city}
                                onSelect={(idx, value) => this.onSelectDropdownCity(idx, value)}

                                renderRow={this.renderRowDropdownCity.bind(this)}

                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Text style={{ textAlign: 'right' }}>{this.state.user.detail.address.city.name}</Text>
                                    <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                </View>
                            </ModalDropdown>

                        </Item>
                    </View>

                    <View style={styles.containeritem}>
                        <Item fixedLabel style={styles.itemstyle} >
                            <Text font-medium style={{fontStyle:'italic'}}>Mã đăng kí:</Text>
                            <Input
                                placeholder={"Nhập mã đăng kí"}
                                placeholderTextColor='#BEBEBE'
                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                            // value={user.company.name}
                                value={this.state.user.code}
                                onChangeText={(text) => {
                                    this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            code: text
                                        }
                                    }))
                                }}

                            />
                        </Item>
                    </View>
                    <View style={styles.containerregis}>
                        <TouchableOpacity  onPress={this.onRegister}>
                            <View style={{ height: MARGIN, width: 160, borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                                <Text style={{ color: 'white' }}>Đăng ký</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onCancel}>
                            <View style={{ height: MARGIN, width: 160, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                                <Text style={{ color: '#60819E' }}>Hủy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Content>
            </Container>
        );
    }

}


const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = {
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10
    },
    itemstyle: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 36,
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,



        // borderTopColor: variables.ColorGray77,
        // borderTopWidth: variables.borderWidth,
    },
    title: {

    },
    containeritem: {
        // flex: 0.5,

        borderRadius: 4,
        borderColor: "#60819E",
        borderWidth: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2





    },
    titleText: {
        fontSize: 14,
        padding: 5
    },
    containerregis: {

        height: 50,
        marginLeft: 5,
        marginTop: 50,
        marginRight: 5,

        flexDirection: 'row',
        justifyContent: 'space-around',
    },

}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
