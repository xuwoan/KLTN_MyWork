
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity, TouchableHighlight, ToastAndroid
} from 'react-native';



// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Item, Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';

import Dimensions from 'Dimensions';// lấy thông tin thiết bị
import ModalDropdown from 'react-native-modal-dropdown';

import Switch from 'react-native-material-switch';
const { width } = Dimensions.get('window')
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
export default class PublicCV extends Component {

    constructor(props) {
        super(props)



    }
    renderRowDropdownMajor(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight >
                <View style={{ width: WIDTH - 20, height: 40, borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>

                    <Text style={{ textAlign: 'right', margin: 10, color: '#60819E', fontSize: 16, fontWeight: 'bold', paddingBottom: 3 }}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
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
                        <Title>Thiết lập CV </Title>
                    </Body>

                </Header>
                <Content style={{ backgroundColor: '#FFFFFF' }}>
                    {console.log("CV", this.props.usercvpublic)}

                    <View style={styles.content}>
                        {this.props.cvaldready === 1 ?
                            <Item fixedLabel style={{
                                height: 50,
                                paddingBottom: 5,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }} >


                                <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Công khai CV :</Text>
                                <View style={{ position: 'absolute', right: 15 }}>

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
                                        active={this.props.usercvpublic.active}
                                        onActivate={() => {
                                            if (this.props.usercvpublic.active !== undefined) {
                                                this.setState(prevState => ({
                                                    paramcv: {
                                                        ...prevState.paramcv,
                                                        active: true
                                                    }
                                                }))
                                                this.onFetchActive(true)
                                            }
                                            else {
                                                setTimeout(() => {
                                                    this.refs.switch.toggle();
                                                    ToastAndroid.show("Vui lòng lưu thông tin trước khi công khai CV ", 50)
                                                }, 300)
                                            }
                                        }
                                        }
                                        onDeactivate={() => {
                                            if (this.props.usercvpublic.active !== undefined) {
                                                this.setState(prevState => ({
                                                    paramcv: {
                                                        ...prevState.paramcv,
                                                        active: false
                                                    }
                                                }))
                                                this.onFetchActive(true)
                                            }
                                        }

                                        }

                                    />

                                </View>



                            </Item>
                            : <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold', color: '#E44444' }} >Bạn chưa có CV nào được đặt làm CV chính</Text>}
                        <Text style={{ margin: 5, fontSize: 14, fontStyle: 'italic' }}>
                            Kích hoạt công khai CV chính của bạn để các nhà tuyển dụng có thể tìm kiếm ứng viên của mình một cách dễ dàng hơn . Cho họ thấy được mong muốn về công việc bạn muốn làm và chủ động tìm tới bạn (CV của bạn chỉ nhà tuyển dụng mới thấy được) </Text>
                        <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 13.5, textDecorationLine: 'underline' }}>
                            Bạn vui lòng chọn ngành mà bạn muốn làm việc và ghi vị trí công việc bạn muốn làm bên dưới .</Text>
                        <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Ngành làm việc :</Text>
                        <ModalDropdown style={{ height: 45, margin: 5, width: WIDTH - 10 }}
                            options={this.props.listmajor}
                            // defaultValue={this.pr.city}
                            onSelect={(idx, value) => this.onSelectDropdownMajor(idx, value)}

                            renderRow={this.renderRowDropdownMajor.bind(this)}

                        >
                            <View style={{ width: WIDTH - 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: 'white', borderRadius: 3, borderColor: '#60819E', borderWidth: 1 }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#60819E', fontWeight: 'bold' }}>{this.state.department}</Text>
                                <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2, position: 'absolute', right: 10 }} source={require('../../images/caret-down.png')} />
                            </View>
                        </ModalDropdown>
                        <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Công việc :</Text>
                        <Input
                            placeholder={"Nhập công việc bạn muốn làm ... (vd: Lập trình viên web, Trưởng phòng Marketing,..)"}
                            placeholderTextColor='#BEBEBE'
                            multiline={true}
                            maxLength={150}
                            style={{ textAlign: 'left', fontSize: 14, textAlignVertical: 'top', margin: 5, backgroundColor: 'white', height: 80, borderColor: '#60819E', borderWidth: 1, borderRadius: 2 }}
                            value={this.state.paramcv.job}
                            onChangeText={(text) => {
                                this.setState(prevState => ({

                                    paramcv: {
                                        ...prevState.paramcv,
                                        job: text
                                    },
                                    disable_but: false

                                }))
                            }}



                        />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity disabled={this.state.disable_but} onPress={() => this.onFetchActive(false)} >
                                <View style={[styles.buttonsave, this.state.disable_but === false ? { backgroundColor: '#60819E' } : { backgroundColor: '#ACACAC' }]}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', }}>Lưu</Text>
                                </View>
                            </TouchableOpacity>

                        </View>




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
        backgroundColor: '#DFDFDF',

        margin: 5,
        height: HEIGHT - 100
    },
    buttonsave: {
        height: 40,
        width: 150,
        borderRadius: 20,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },

    image: {
        height: 30,
        width: 30,
    },

}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
