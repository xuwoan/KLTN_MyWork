
import React, { Component } from 'react';
import {
    View,

    StyleSheet, Image, TouchableOpacity, TouchableHighlight
} from 'react-native';


import {
    Header, Title,
    Container, Text,
    Body, Item, ListItem, Row, Col,
    Input, Button, Content, Card, CardItem,
    Icon, Left, Right
} from "native-base";

// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import ModalDropdown from 'react-native-modal-dropdown';
import CheckBox from 'react-native-check-box';
import Modal from 'react-native-modal';
import AppConstants from '../../constants/application.constants';
//import Autocomplete from '../ui/AutoCompleteInput'
import Autocomplete from '../ui/AutoCompleteInput'
import DatePicker from 'react-native-datepicker';

//import AutoComplete from 'react-native-autocomplete'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const t1 = 1;
const t2 = 2;
const MARGIN = 40;
export default class CandidateInfoScreen extends Component {

    renderRowDropdownCity(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 25 }}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    renderRowDropdownMajor(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 200, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 10 }}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
    renderDialog() {
        return (
            <Modal
                style={{
                    backgroundColor: 'white',
                    padding: 22,
                    marginTop: 150,
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}
                isVisible={this.state.showDialog}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ flex: 1, color: '#60819E', fontSize: 18, fontWeight: 'bold' }}>ĐỔI MẬT KHẨU</Text>
                <View style={styles.containeritem}>
                    <Item fixedLabel style={{

                        paddingBottom: 5,

                        flex: 1,
                        borderBottomWidth: 0,
                    }} >
                        <Text font-medium style={{ marginLeft: 5 }}>Mật khẩu cũ:</Text>
                        <Input
                            placeholder={"Nhập mật khẩu"}
                            placeholderTextColor='#BEBEBE'
                            secureTextEntry={true}
                            style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                            // value={user.company.name}
                            value={this.state.params2.password}

                            onChangeText={(text) => {
                                this.setState(prevState => ({

                                    params2: {
                                        ...prevState.params2,
                                        password: text

                                    }

                                }))
                            }}

                        />
                    </Item>

                </View>
                <View style={styles.containeritem}>
                    <Item fixedLabel style={{

                        paddingBottom: 5,

                        flex: 1,
                        borderBottomWidth: 0,
                    }} >
                        <Text font-medium style={{ marginLeft: 5 }}>Mật khẩu mới:</Text>
                        <Input
                            placeholder={"Nhập mật khẩu"}
                            placeholderTextColor='#BEBEBE'
                            secureTextEntry={true}
                            style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                            value={this.state.params2.newpassword}

                            onChangeText={(text) => {
                                this.setState(prevState => ({

                                    params2: {
                                        ...prevState.params2,
                                        newpassword: text

                                    }

                                }))
                            }}

                        />
                    </Item>
                </View>
                <View style={styles.containeritem}>
                    <Item fixedLabel style={{

                        paddingBottom: 5,

                        flex: 1,
                        borderBottomWidth: 0,
                    }} >
                        <Text font-medium style={{ marginLeft: 5 }}>Xác nhận mật khẩu:</Text>
                        <Input
                            placeholder={"Nhập mật khẩu"}
                            placeholderTextColor='#BEBEBE'
                            secureTextEntry={true}
                            style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                            // value={user.company.name}
                            value={this.state.confirmpassword}

                            onChangeText={(text) => {
                                this.setState({

                                    confirmpassword: text

                                })
                            }}


                        />
                    </Item>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity onPress={this.onSubmitUpdatePassword} >
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onHideDialog}>
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: '#60819E', fontWeight: 'bold', }}>Hủy bỏ</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>);
    }

    renderDialogChangeUserName() {
        return (
            <Modal
                style={{
                    backgroundColor: 'white',
                    padding: 22,
                    marginTop: 150,
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}
                isVisible={this.state.showDialogChangeUserName}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ flex: 1, color: '#60819E', fontSize: 18, fontWeight: 'bold' }}>THAY ĐỔI TÊN USER</Text>
                <View style={styles.containeritem}>


                    <Input
                        placeholder={"Nhập tên user"}
                        placeholderTextColor='#BEBEBE'

                        style={{ textAlign: 'right', flex: 1, fontSize: 18 }}
                        // value={user.company.name}
                        value={this.state.params1.detail.name}

                        onChangeText={(text) => {
                            this.setState(prevState => ({
                                user: {
                                    ...prevState.user,
                                    detailcandidate: {
                                        ...prevState.user.detailcandidate,
                                        name: text

                                    }

                                },
                                params1: {
                                    ...prevState.params1,
                                    detail: {
                                        ...prevState.params1.detail,
                                        name: text
                                    }

                                }, change: text !== this.props.user.detailcandidate.name ? true : false

                            }))
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity onPress={() => { this.setState({ showDialogChangeUserName: false }) }} >
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState(prevState => ({
                            user: {
                                ...prevState.user,
                                detailcandidate: {
                                    ...prevState.user.detailcandidate,
                                    name: this.props.user.detailcandidate.name

                                }

                            },
                            params1: {
                                ...prevState.params1,
                                detail: {
                                    ...prevState.params1.detail,
                                    name: this.props.user.detailcandidate.name
                                }

                            }, change: this.state.params1.detail.name !== this.props.user.detailcandidate.name ? true : false,
                            showDialogChangeUserName: false

                        }))
                    }}>
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: '#60819E', fontWeight: 'bold', }}>Hủy bỏ</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>);
    }
    render() {
        console.log("IM", this.state.imagedata)
        return (
            <Container>
                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => this.goBack()}>
                            <Image resizeMode='stretch' style={styles.image}
                                source={require('../../images/arrow_icon.png')}

                            />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title>Thông tin cá nhân  </Title>
                    </Body>

                </Header>

                <Content style={{ backgroundColor: '#DFDFDF' }}>

                    {this.renderDialog()}
                    {this.renderDialogChangeUserName()}

                    <View style={{ margin: 7, backgroundColor: 'white', height: height - 100, marginBottom: 57 }}>
                        <View style={styles.itemavatarstyle}>
                            <View  >
                                <Image
                                    source={this.state.params1.changeimage === false ? { uri: AppConstants.URL + this.props.user.detailcandidate.avatar } : this.state.imagedata}

                                    style={{ height: 120, width: 120, margin: 5, marginTop: 15, marginLeft: 5, borderRadius: 59 }} />

                            </View>
                            <View style={{ width: width / 2 + 10, alignItems: 'center' }} >
                                <TouchableOpacity onPress={() => { this.setState({ showDialogChangeUserName: true }) }}>
                                    <Text style={{
                                        fontSize: 22,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        paddingTop: 5
                                        , height: 80,
                                        margin: 10


                                    }}>{this.state.user.detailcandidate.name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onSelectPicture} >
                                    <View style={{ width: 120, height: 35, backgroundColor: '#DDDDDD', borderRadius: 20, marginLeft: 5, marginRight: 5 }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#3D3D3D',
                                            textAlign: 'center',
                                            padding: 5,

                                        }}>Đổi avatar</Text>
                                    </View>
                                </TouchableOpacity>


                            </View>
                        </View>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#60819E',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 16 , fontStyle:'italic' }}>Ngày sinh:</Text>
                            <View style={{ marginRight: 10, marginLeft: 110 }}>
                                <DatePicker
                                    style={{ height: 38 }}
                                    date={this.state.user.detailcandidate.birthday}
                                    mode="date"
                                    placeholder={"Chọn ngày "}
                                    format="DD-MM-YYYY"
                                    confirmBtnText={"Chọn"}
                                    cancelBtnText={"Hủy bỏ"}
                                    onDateChange={(date) => this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            detailcandidate: {
                                                ...prevState.user.detailcandidate,
                                                birthday: date
                                            }
                                        },
                                        params1: {
                                            ...prevState.params1,
                                            detail: {
                                                ...prevState.params1.detail,
                                                birthday: date
                                            }

                                        }, change: date !== this.props.user.detailcandidate.birthday ? true : false

                                    }))}
                                    showIcon={false}
                                    customStyles={{

                                        dateText: { paddingBottom: 5, color: "#60819E", fontSize: 17, fontWeight: 'bold', textAlign: 'right' },


                                    }}
                                />
                            </View>

                        </Item>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#60819E',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 16 , fontStyle:'italic' }}>Email:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"Email"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}
                                    style={{ textAlign: 'right', flex: 1, fontSize: 16 ,padding:0 , paddingLeft:5}}
                                    value={this.state.user.detailcandidate.email}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailcandidate: {
                                                    ...prevState.user.detailcandidate,
                                                    email: text
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    email: text
                                                }

                                            }, change: text !== this.props.user.detailcandidate.email ? true : false

                                        }))
                                    }}

                                />

                            </View>

                        </Item>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#60819E',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 16 , fontStyle:'italic' }}>Số điện thoại:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"SĐT"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}
                                    keyboardType='numeric'
                                    style={{ textAlign: 'right', flex: 1, fontSize: 16,padding:0 , paddingLeft:5 }}
                                    value={this.state.user.detailcandidate.phone}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailcandidate: {
                                                    ...prevState.user.detailcandidate,
                                                    phone: text
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    phone: text
                                                }

                                            }, change: text !== this.props.user.detailcandidate.phone ? true : false
                                        }))
                                    }}

                                />

                            </View>

                        </Item>
                        <Item style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#60819E',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}  >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 16 , fontStyle:'italic' }} >Tỉnh/ Thành phố:</Text>
                            <ModalDropdown style={{ flex: 1, marginLeft: 45 }}
                                options={this.props.listprovince}
                                //defaultValue={this.state.city}
                                onSelect={(idx, value) => this.onSelectDropdownCity(idx, value)}

                                renderRow={this.renderRowDropdownCity.bind(this)}

                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 5 }}>
                                    <Text style={{ textAlign: 'right' }}>{this.state.user.detailcandidate.address.city.name}</Text>
                                    <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                </View>
                            </ModalDropdown>

                        </Item>

                        <Item style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#60819E',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}  >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 16 , fontStyle:'italic' }} >Ngành:</Text>
                            <ModalDropdown style={{ flex: 1, marginLeft: 45 }}
                                options={this.props.listdepartment}
                                //defaultValue={this.state.city}
                                onSelect={(idx, value) => this.onSelectDropdownMajor(idx, value)}

                                renderRow={this.renderRowDropdownMajor.bind(this)}

                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 5 }}>
                                    <Text style={{ textAlign: 'right' }}>{this.state.user.detailcandidate.major.key ? this.state.user.detailcandidate.major.name : ""}</Text>
                                    <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                </View>
                            </ModalDropdown>

                        </Item>
                        <Item style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#60819E',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}  >

                            <TouchableOpacity style={{ flex: 1 }} onPress={this.onShowDialog}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text font-medium style={{ color: '#3D3D3D', fontSize: 16 , fontStyle:'italic', width: width - width / 4 }} >Đổi mật khẩu</Text>
                                    <Image source={require('../../images/edit_icon.png')} style={{ height: 25, width: 25, marginLeft: 30 }} />


                                </View>
                            </TouchableOpacity>


                        </Item>
                        <View style={styles.containersavebutton}>
                            <TouchableOpacity onPress={this.onSubmitUpdate}  >
                                <View style={{ height: 40, width: width - (40 - 20), borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                                    <Text style={{ color: 'white' }}>
                                        Lưu thay đổi
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>


                    </View>

                </Content>
            </Container>
        );
    }

}

const CustomCell = ({ data }) => (
    <View style={{ height: 30, width: 150 }} >

        <Text >{data.job}</Text>
    </View>
);
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    containersavebutton: {

        height: 50,
        marginLeft: 15,

        marginRight: 15,
        marginTop: 10,


        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10
    },
    autocomplete: {
        alignSelf: 'stretch',
        height: 40,
        //margin: 10,
        width: 100,
        backgroundColor: '#FFF',
        borderColor: 'lightblue',
        borderWidth: 1,
    },
    itemavatarstyle: {
        flexDirection: 'row',

        height: 160,

        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: "#60819E",





        // borderTopColor: variables.ColorGray77,
        // borderTopWidth: variables.borderWidth,
    },
    autocompleteContainer: {
        flex: 0.7,
        left: 50,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    contentcheck: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    containeritem: {
        height: 40,
        width: DEVICE_WIDTH - 50,
        borderRadius: 4,
        borderColor: "#60819E",
        borderWidth: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2





    },
    textavatar: {
        fontSize: 15,
        color: 'white',

        textAlign: 'center',
        padding: 5
    },
    textusername: {
        fontSize: 22,
        color: '#60819E',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
    },
    image: {
        height: 30,
        width: 30,
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

});
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
