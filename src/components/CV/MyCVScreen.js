
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity,
    StyleSheet, ListView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Modal from 'react-native-modal';
import { Item, Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const MARGIN = 40;

var workdata = require('../../data/data1.json')
class MyCVScreen extends Component {

    constructor(props) {
        super(props);

    }

    renderrowCV(rowData, rowID, that) {

        return (
            <View style={[styles.containerlistitem1, { borderColor: rowData.maincv ? '#ECCC72' : '#60819E' }]}>
                <View style={{ flex: 0.75, marginRight: 5, marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => this.onGotoReviewCV(rowData.id)}>
                        <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 20, color: rowData.maincv ? '#ECCC72' : '#60819E', height: 70, fontWeight: 'bold' }} numberOfLines={2}>
                            {rowData.cvname}
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ color: '#2E4053', marginLeft: 5 }}>Ngày Tạo :</Text>
                        <Text style={{ marginLeft: 5, fontStyle: 'italic' }}>{rowData.date}
                        </Text>

                    </View>
                </View>
                <View style={{ flex: 0.25, marginLeft: 5 }}>



                    <Item style={{ marginTop: 10, marginRight: 5 }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.gotoAskDetele(rowData.id) }}>
                            <Image source={require('../../images/delete_icon.png')} style={[styles.icon1, { marginBottom: 5, marginRight: 2 }]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, borderLeftColor: "#DFDFDF", borderLeftWidth: 0.5 }} onPress={() => this.onGotoEditCV(rowData.id)}>
                            <Image source={require('../../images/edit2_icon.png')} style={[styles.icon1, { marginBottom: 5, marginLeft: 5 }]} />
                        </TouchableOpacity>
                    </Item>


                    <Item style={{ borderWidth: 0, marginBottom: 5, marginRight: 5 }} >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.onUpdateMainCV(rowData.id, !rowData.maincv) }}>
                            <Image source={rowData.maincv ? require('../../images/bookmark2.png') : require('../../images/bookmark1.png')} style={[styles.icon1, { marginTop: 5, marginRight: 2 }]} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, borderLeftColor: "#DFDFDF", borderLeftWidth: 0.5 }} onPress={() => { this.onOpenDialog(rowData.cvname, rowData.id) }}>
                            <Image source={require('../../images/editname_icon.png')} style={[styles.icon1, { marginTop: 5, marginLeft: 5 }]} />
                        </TouchableOpacity>

                    </Item>


                </View>
            </View>

        );
    }
    renderDialog() {
        return (
            <Modal
                style={{
                    backgroundColor: 'white',
                    padding: 22,
                    marginTop: 150,
                    height: 180,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}
                isVisible={this.state.showDialog}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ flex: 1, color: '#60819E', fontSize: 18, fontWeight: 'bold' }}>ĐỔI TÊN CV</Text>
                <View style={{
                    height: 40, width: WIDTH - 50, borderRadius: 4, borderColor: "#60819E",
                    borderWidth: 0.5, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 2
                }}>
                    <Item fixedLabel style={{

                        paddingBottom: 5,

                        flex: 1,
                        borderBottomWidth: 0,
                    }} >
                        <Text font-medium style={{ marginLeft: 5 }}>Tên CV:</Text>
                        <Input
                            placeholder={"Nhập tên bạn muốn đặt"}
                            placeholderTextColor='#BEBEBE'

                            style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                            // value={user.company.name}
                            value={this.state.currentcvname}

                            onChangeText={(text) => {
                                this.setState(prevState => ({

                                    currentcvname: text

                                }))
                            }}

                        />
                    </Item>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity onPress={this.onUpdateNameCV} >
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
    render() {

        let that = this;

        return (
            <Container>

                <Content style={{ backgroundColor: 'white' }}>

                    {this.renderDialog()}
                    <View style={styles.container1}>
                        {console.log("L", this.props.listUserCV.length)}
                        {!this.props.isLoading ? this.props.listUserCV.length > 0 ?
                            <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listUserCV)}
                                renderRow={(rowData, rowId) => this.renderrowCV(rowData, rowId, that)}


                            >
                            </ListView> : <View style={{ marginLeft: 5, marginRight: 5, marginBottom: 5, backgroundColor: 'white', height: HEIGHT - 135 }}><Text style={{ textAlign: 'center', color: "#DFDFDF" }}> Bạn chưa có CV nào để hiển thị</Text></View>
                            : <View style={{ height: HEIGHT - 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                            </View>
                        }
                        <View style={{ height: 50 }} />
                    </View>

                </Content>
            </Container>
        )
    }
    componentDidMount() {

        this.setState({


        })
    }


}

const styles = StyleSheet.create({
    container2: {

        flex: 1,
        flexDirection: 'row',

    },
    container1: {
        flex: 1,
        marginTop: 5

    },
    image: {
        width,
        backgroundColor: 'transparent',

    },
    content: {
        borderRadius: 2,
        margin: 5
    },
    photo: {
        height: 119,
        width: 140,

    },
    icon: {
        height: 30,
        width: 30,
        margin: 5

    },
    icon1: {
        height: 32,
        width: 32,


    },
    columcon: {
        flex: 1,

        flexDirection: 'column',

    },
    container3: {
        height: 120,
        borderRadius: 10,
        borderWidth: 0.5, borderColor: '#2E4053',
        padding: 0,
        marginRight: 3,
        marginTop: 2,
        marginLeft: 3,
        marginBottom: 2,
        flexDirection: 'row',
        backgroundColor: 'white'


    },
    containerlistitem:
        {
            height: 100,
            flexDirection: 'row',
            borderRadius: 5,
            borderWidth: 3,

            backgroundColor: 'white',
            margin: 5,
            elevation: 4,
        },
    containerlistitem1:
        {
            height: 100,
            flexDirection: 'row',
            borderRadius: 0,
            borderLeftWidth: 12,
            borderTopWidth: 1,


            backgroundColor: 'white',
            margin: 5,
            elevation: 4,
        },
    text1: {
        paddingLeft: 6,

        color: "#60819E",
        fontWeight: 'bold',
        fontSize: 15
    }
    ,
    text2: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        position: 'absolute',
        bottom: 5,
        right: 5,

        fontSize: 15
    }
    ,
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    wrapper: {
    },

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
export default MyCVScreen;