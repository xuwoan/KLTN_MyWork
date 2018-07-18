
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
import AppConstants from '../../constants/application.constants';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import ModalDropdown from 'react-native-modal-dropdown';
import CheckBox from 'react-native-check-box';
//import Autocomplete from '../ui/AutoCompleteInput'
import Autocomplete from '../ui/AutoCompleteInput'
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modal';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const t1 = 1;
const t2 = 2;
const MARGIN = 40;
export default class EmployerInfoScreen extends Component {
   
    goBack() {
        Actions.pop()
    }
    
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
                            value={this.state.params2.password}

                            onChangeText={(text) => {
                                this.setState(prevState => ({

                                    params2: {
                                        ...prevState.params2,
                                        password: text

                                    }

                                }))
                            }}
                        // value={user.company.name}

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
                    <TouchableOpacity onPress={this.onSubmitUpdatePassword}  >
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
    renderDialogCompanyName() {
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
                isVisible={this.state.showDialogCompanyname}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ flex: 1, color: '#60819E', fontSize: 18, fontWeight: 'bold' }}>TÊN CÔNG TY</Text>
                <View style={{ width: 300, borderColor: '#60819E', height: 150, borderRadius: 5, borderWidth: 1, justifyContent: 'space-between' }}>

                  

                    <Input
                        placeholder={"Nhập tên công ty"}
                        placeholderTextColor='#BEBEBE'
                        multiline={true}
                        style={{ textAlign: 'left', flex: 1, fontSize: 15, textAlignVertical: 'top' }}
                        value={this.state.params1.detail.company.name}
                        onChangeText={(text) => {
                            this.setState(prevState => ({
                                user: {
                                    ...prevState.user,
                                    detailemployer: {
                                        ...prevState.user.detailemployer,
                                        company: {
                                            ...prevState.user.detailemployer.company,
                                            name: text
                                        }
                                    }

                                },
                                params1: {
                                    ...prevState.params1,
                                    detail: {
                                        ...prevState.params1.detail,
                                        company: {
                                            ...prevState.params1.detail.company,
                                            name: text
                                        }
                                    }

                                }, change: text !== this.props.user.detailemployer.company.name ? true : false

                            }))
                        }}

                    />


                </View>


                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity onPress={this.onHideDialogCompanyName} >
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onCancelDialogCompanyName}>
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: '#60819E', fontWeight: 'bold', }}>Hủy bỏ</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>);
    }
    renderDialogCompanyIntro() {
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
                isVisible={this.state.showDialogCompanyintro}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ flex: 1, color: '#60819E', fontSize: 18, fontWeight: 'bold' }}>GIỚI THIỆU CÔNG TY</Text>
                <View style={{ width: 300, borderColor: '#60819E', height: 170, borderRadius: 5, borderWidth: 1, justifyContent: 'space-between' }}>

                  

                    <Input
                        placeholder={"Nhập lời giới thiệu về công ty"}
                        placeholderTextColor='#BEBEBE'
                        multiline={true}
                        style={{ textAlign: 'left', flex: 1, fontSize: 15, textAlignVertical: 'top' }}
                        value={this.state.params1.detail.company.intro}
                        onChangeText={(text) => {
                            this.setState(prevState => ({
                                user: {
                                    ...prevState.user,
                                    detailemployer: {
                                        ...prevState.user.detailemployer,
                                        company: {
                                            ...prevState.user.detailemployer.company,
                                            intro: text
                                        }
                                    }

                                },
                                params1: {
                                    ...prevState.params1,
                                    detail: {
                                        ...prevState.params1.detail,
                                        company: {
                                            ...prevState.params1.detail.company,
                                            intro: text
                                        }
                                    }

                                }, change: text !== this.props.user.detailemployer.company.intro ? true : false

                            }))
                        }}

                    />


                </View>


                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity onPress={this.onHideDialogCompanyIntro} >
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onHideDialogCompanyIntro}>
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: '#60819E', fontWeight: 'bold', }}>Hủy bỏ</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>);
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
                        <Title>Thông tin tài khoản </Title>
                    </Body>

                </Header>

                <Content style={{ backgroundColor: '#DFDFDF' }}>
                    {this.renderDialog()}
                    {this.renderDialogCompanyName()}
                    {this.renderDialogCompanyIntro()}

                    <View style={{ margin: 7, backgroundColor: 'white', flex: 1, marginBottom: 57 }}>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomWidth: 0,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}>
                            <Image source={require('../../images/personal_icon.png')} style={{ height: 25, width: 20, margin: 5 }} />
                            <Text style={{
                                fontSize: 17,
                                color: '#60819E',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginLeft: 5,
                                paddingTop: 5
                            }}>Thông tin cá nhân </Text>

                        </Item>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17,fontStyle:'italic' }}>Người đại diện:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"Tên người đại diện"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}
                                    style={{ textAlign: 'right', flex: 1, fontSize: 17 ,padding:0 , paddingLeft:5}}
                                    value={this.state.user.detailemployer.name}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailemployer: {
                                                    ...prevState.user.detailemployer,
                                                    name: text
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    name: text
                                                }

                                            }, change: text !== this.props.user.detailemployer.name ? true : false

                                        }))
                                    }}

                                />

                            </View>

                        </Item>
                        {/* <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17, paddingBottom: 5 }}>Email:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"Email"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}
                                    style={{ textAlign: 'right', flex: 1, fontSize: 17 }}
                                // value={user.company.name}

                                />

                            </View>

                        </Item> */}
                        <Item style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}  >

                            <TouchableOpacity style={{ flex: 1 }} onPress={this.onShowDialog}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text font-medium style={{ color: '#3D3D3D', fontSize: 17,  width: width - width / 4,fontStyle:'italic' }} >Đổi mật khẩu</Text>
                                    <Image source={require('../../images/edit_icon.png')} style={{ height: 25, width: 25, marginLeft: 25 }} />

                                </View>
                            </TouchableOpacity>


                        </Item>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 0,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}>
                            <Image source={require('../../images/company_icon.png')} style={{ height: 25, width: 25, margin: 5 }} />
                            <Text style={{
                                fontSize: 17,
                                color: '#60819E',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginLeft: 5,
                                paddingTop: 5
                            }}>Thông tin công ty </Text>

                        </Item>
                        <View style={styles.itemavatarstyle}>
                            <View >
                                <Image source={this.state.params1.changeimage === false ? { uri: AppConstants.URL + this.props.user.detailemployer.company.logo } : this.state.imagedata} style={{ height: 110, width: 110, margin: 15 }} />
                                
                            </View>
                            <View style={{ width: width / 2 + 10, alignItems:'center' }} >
                                <TouchableOpacity onPress={this.onShowDialogCompanyName}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: '#2E4053',
                                        textDecorationLine: 'underline',
                                        textAlign: 'center',
                                        paddingTop: 5 ,
                                        height:90,
                                    }}>{this.state.user.detailemployer.company.name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onSelectPicture}>
                                    <View style={{ width: 120, height: 35, backgroundColor: '#60819E', borderRadius: 18, marginLeft: 5, marginRight: 5 }}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: 'white',
                                            textAlign: 'center',
                                            padding: 5
                                        }}>Đổi Logo</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Item style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}  >

                            <TouchableOpacity style={{ flex: 1 }} onPress={this.onShowDialogCompanyIntro}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text font-medium style={{ color: '#3D3D3D', fontSize: 17,  width: width - width / 4 ,fontStyle:'italic'}} >Giới thiệu công ty</Text>
                                    <Image source={require('../../images/edit_icon.png')} style={{ height: 25, width: 25, marginLeft: 25 }} />
                                </View>
                            </TouchableOpacity>


                        </Item>

                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17,fontStyle:'italic'}}>Số nhà:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"Số nhà"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}

                                    style={{ textAlign: 'right', flex: 1, fontSize: 17,padding:0 , paddingLeft:5  }}
                                    value={this.state.user.detailemployer.company.address.street}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailemployer: {
                                                    ...prevState.user.detailemployer,
                                                    company: {
                                                        ...prevState.user.detailemployer.company,
                                                        address: {
                                                            ...prevState.user.detailemployer.company.address,
                                                            street: text

                                                        }
                                                    }
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    company: {
                                                        ...prevState.params1.detail.company,
                                                        address: {
                                                            ...prevState.params1.detail.company.address,
                                                            street: text

                                                        }
                                                    }
                                                }

                                            }, change: text !== this.props.user.detailemployer.company.address.address ? true : false

                                        }))
                                    }}

                                />

                            </View>

                        </Item>

                        <Item style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }}  >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17,fontStyle:'italic' }} >Tỉnh/ Thành phố:</Text>
                            <ModalDropdown style={{ flex: 1, marginLeft: 45 }}
                                options={this.props.listprovince}
                                //defaultValue={this.state.city}
                                onSelect={(idx, value) => this.onSelectDropdownCity(idx, value)}

                                renderRow={this.renderRowDropdownCity.bind(this)}

                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Text style={{ textAlign: 'right' }}>{this.state.user.detailemployer.company.address.city.name}</Text>
                                    <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                </View>
                            </ModalDropdown>

                        </Item>

                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17 ,fontStyle:'italic'}}>Website:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"Website"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}

                                    style={{ textAlign: 'right', flex: 1, fontSize: 17,padding:0 , paddingLeft:5 }}
                                    value={this.state.user.detailemployer.company.website}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailemployer: {
                                                    ...prevState.user.detailemployer,
                                                    company: {
                                                        ...prevState.user.detailemployer.company,
                                                        website: text
                                                    }
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    company: {
                                                        ...prevState.params1.detail.company,
                                                        website: text
                                                    }
                                                }

                                            }, change: text !== this.props.user.detailemployer.company.website ? true : false

                                        }))
                                    }}

                                />

                            </View>

                        </Item>
                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17 ,fontStyle:'italic'}}>Email:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"Email"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}
                                    style={{ textAlign: 'right', flex: 1, fontSize: 17,padding:0 , paddingLeft:5 }}
                                    value={this.state.user.detailemployer.company.email}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailemployer: {
                                                    ...prevState.user.detailemployer,
                                                    company: {
                                                        ...prevState.user.detailemployer.company,
                                                        email: text
                                                    }
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    company: {
                                                        ...prevState.params1.detail.company,
                                                        email: text
                                                    }
                                                }

                                            }, change: text !== this.props.user.detailemployer.company.email ? true : false

                                        }))
                                    }}
                                // value={user.company.name}

                                />

                            </View>

                        </Item>

                        <Item fixedLabel style={{

                            height: 40,
                            marginLeft: 15,
                            marginRight: 10,
                            marginBottom: 2,
                            borderBottomWidth: 1,
                            borderBottomColor: '#DFDFDF',
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        }} >
                            <Text font-medium style={{ color: '#3D3D3D', fontSize: 17,fontStyle:'italic' }}>Số điện thoại:</Text>
                            <View style={{ marginRight: 10, flex: 1 }}>
                                <Input
                                    placeholder={"SĐT"}
                                    placeholderTextColor='#BEBEBE'
                                    secureTextEntry={false}
                                    keyboardType='numeric'
                                    style={{ textAlign: 'right', flex: 1, fontSize: 17,padding:0 , paddingLeft:5 }}
                                    value={this.state.user.detailemployer.company.phone}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                detailemployer: {
                                                    ...prevState.user.detailemployer,
                                                    company: {
                                                        ...prevState.user.detailemployer.company,
                                                        phone: text
                                                    }
                                                }
                                            },
                                            params1: {
                                                ...prevState.params1,
                                                detail: {
                                                    ...prevState.params1.detail,
                                                    company: {
                                                        ...prevState.params1.detail.company,
                                                        phone: text
                                                    }
                                                }

                                            }, change: text !== this.props.user.detailemployer.company.phone ? true : false

                                        }))
                                    }}
                                // value={user.company.name}

                                />

                            </View>



                        </Item>
                        <View style={styles.containersavebutton}>
                            <TouchableOpacity onPress={this.onSubmitUpdate} >
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

        height: 140,
        width: 120,




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




        // borderTopColor: variables.ColorGray77,
        // borderTopWidth: variables.borderWidth,
    },

});
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
