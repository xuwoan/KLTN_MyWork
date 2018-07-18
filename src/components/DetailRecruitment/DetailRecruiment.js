
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity, ScrollView,
    StyleSheet, ListView, Linking, ToastAndroid
} from 'react-native';
// import { connect } from 'react-redux';
import {
    Header, Title,
    Container,
    Body, Item, ListItem, Row, Col,
    Input, Button, Content, Card, CardItem, Platform,
    Icon, Left, Right
} from "native-base";
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-accordion';
import AppConstants from '../../constants/application.constants';
import CheckBox from 'react-native-check-box';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
const textHeight = 35;
export default class DetailRecruitment extends Component {


    goBack() {
        Actions.pop()
    }
    setcollapsed(num) {
        console.log(num)
        this.setState({
            collapsed: this.changearray(num, this.state.collapsed)
        });
        console.log(this.state.collapsed)
    }
    changearray(num, array) {
        array[num] = !array[num];
        return array
    }
    renderListjob() {
        return (
            <ListView dataSource={this.state.dataSource.cloneWithRows(this.state.recruiment.job)}

                renderRow={(row, section, rowid) =>

                    (rowid != this.state.recruiment.job.length - 1) ?
                        <View style={{ flex: 1, margin: 5, borderWidth: 1, borderColor: '#2E4053', borderRadius: 3 }}>


                            <TouchableOpacity onPress={() => this.setcollapsed(rowid)}>

                                <View style={styles.header}>
                                    <Text style={styles.headerText2}>{row.amount}</Text>
                                    <Text style={styles.headerText1} numberOfLines={1}>{row.job}</Text>

                                    <Image style={[styles.icon, { marginLeft: 10, marginTop: 10, marginRight: 10 }]} source={this.state.collapsed[rowid] === true ? require('../../images/expand_icon.png') : require('../../images/close_icon.png')} />
                                </View>

                            </TouchableOpacity>
                            <Collapsible collapsed={this.state.collapsed[rowid]} align="center">
                                <View style={{ flex: 1 }}>
                                    <Item fixedLabel style={{
                                        margin: 5,
                                        height: 30,
                                        borderWidth: 0.5,
                                        borderBottomWidth: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                    }} >
                                        <Image style={styles.icon} source={require('../../images/info_icon.png')} />
                                        <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold' ,fontSize:15}}>Thông tin</Text>


                                    </Item>
                                    <View style={{ marginLeft: 25, marginRight:15  }}>
                                        <Item fixedLabel style={{
                                            marginBottom:3,
                                            flex:1,
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5 ,fontStyle:'italic',fontSize:15}}>Lương:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5, flex: 1 ,fontSize:15}}>{row.salary.salary !== null ? row.salary.salary + "$" : row.salary.other}</Text>


                                        </Item>
                                        <Item fixedLabel style={{
                                            marginBottom:3,
                                            flex:1,
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                            alignItems: 'flex-start'

                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5, textAlign: 'left',fontStyle:'italic' ,fontSize:15}}>Địa Chỉ:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5, flex: 1 ,fontSize:15}}>{row.address}</Text>


                                        </Item>
                                        <Item fixedLabel style={{
                                            
                                            flex:1,
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,

                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5, textAlign: 'left',fontStyle:'italic' ,fontSize:15}}>Hình thức:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5, flex: 1 ,fontSize:15}}>{row.typejob}</Text>


                                        </Item>

                                    </View>
                                    <Item fixedLabel style={{
                                        margin: 5,
                                        height: 30,
                                        borderWidth: 0.5,
                                        borderBottomWidth: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                    }} >
                                        <Image style={styles.icon} source={require('../../images/require_icon.png')} />
                                        <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold' ,fontSize:15}}>Yêu Cầu</Text>


                                    </Item>
                                    <View style={{ marginLeft: 25, marginRight: 15 }}>
                                        <Item fixedLabel style={{
                                            marginBottom:3,
                                            flex:1,
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5 ,fontStyle:'italic',fontSize:15}}>Kinh Nghiệm:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5,fontSize:15 }}>{row.experience}</Text>


                                        </Item>
                                        <Item fixedLabel style={{
                                            marginBottom:3,
                                            flex:1,
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5,fontStyle:'italic',fontSize:15 }}>Giới tính:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5,fontSize:15 }}>{row.gender}</Text>


                                        </Item>
                                        <Item fixedLabel style={{
                                            marginBottom: 10,
                                          
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                            flex:1

                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5, textAlign: 'left',fontStyle:'italic',fontSize:15 }}>Khác:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5, flex: 1,fontSize:15 }}>{row.other}</Text>


                                        </Item>
                                    </View>

                                </View>
                            </Collapsible>

                        </View>

                        : <View style={{ height: 1 }} />
                } />);
    }
    renderListComment() {
        return (
            <ListView dataSource={this.state.dataSource2.cloneWithRows(this.props.listcomment)}
                renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.props.listcomment.length - 1 ? <View style={{ backgroundColor: 'white', height: 1, marginRight: 5, marginTop: 3 }} /> : null}
                renderRow={(row, section, rowid) =>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={{ uri: AppConstants.URL + row.image }} style={styles.avatar} />
                        <View style={{ flex: 1 }}>
                            <Item style={{ borderWidth: 0 }}>
                                <Text style={styles.textnameuser}>{row.username}</Text>
                                <Text style={styles.textdatecmt}>{row.date}</Text>
                            </Item>
                            <Text style={styles.textcontent}>{row.content}</Text>
                        </View>

                    </View>
                }
            >

            </ListView>
        );
    }
    renderDialogCV() {
        return (
            <Modal
                style={{
                    backgroundColor: 'white',

                    marginTop: 90,
                    height: 380,
                    width: WIDTH - 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    marginLeft: 10,
                    marginRight: 10,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}
                isVisible={this.state.showDialogCV}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ color: '#60819E', fontSize: 19, fontWeight: 'bold', marginTop: 5 }}>CHỌN CV</Text>
                <ListView dataSource={this.state.dataSourceCV.cloneWithRows(this.props.listUserCV)}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                    style={{ marginBottom: 5, marginTop: 5, marginRight: 5, marginLeft: 5, height: 250 }}
                    renderRow={(row, section, rowid) =>
                        <View style={[{ width: WIDTH / 2 - 25 }, rowid === this.state.cvchose ? { backgroundColor: '#ECCC72' } : { backgroundColor: 'white' }, rowid % 2 === 0 ? { marginLeft: 5 } : { marginRight: 5, marginLeft: 5 }]}>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({

                                    cvchose: rowid,
                                    cvte: {
                                        ...prevState.cvte,
                                        cvid: row.id
                                    }

                                }));
                            }}>
                                <View style={[styles.containerlistcv, { marginLeft: 5, marginRight: 5 }]}>
                                    <Text style={[styles.textcvname, row.maincv === true ? { color: '#ECCC72' } : { color: '#60819E' }]}>{row.cvname}</Text>
                                    <Item style={{ borderWidth: 0 }}><Text style={styles.textdate}>{row.date}</Text>
                                        <TouchableOpacity onPress={()=>{
                                                this.onHideDialogCV();
                                                this.props.onfetchDetailCV({id:row.id})
                                                Actions.reviewcv_screen({detail:1});
                                                this.setState({
                                                    showAgain:false
                                                })
                                        }}>
                                            <Image resizeMode='stretch' style={{ height: 25, width: 25 }} source={require('../../images/eye_icon.png')} />
                                        </TouchableOpacity>
                                    </Item>
                                </View>

                            </TouchableOpacity>
                        </View>

                    }
                />
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <Text style={{ marginLeft: 15, marginRight: 10, fontSize: 15, fontWeight: 'bold', width: 80 }}>Vị Trí Ứng Tuyển :</Text>

                    <ListView dataSource={this.state.dataSource1.cloneWithRows(this.props.recruiment.job)}

                        style={{ marginBottom: 5, marginRight: 5, marginLeft: 5 }}
                        renderRow={(row, section, rowid) =>
                            row.job !== undefined ?
                                <Item fixedLabel style={{ borderWidth: 0, margin: 3 }}>

                                    <CheckBox onClick={() => {
                                        let state = [...this.state.stateposition];
                                        state[rowid] = !this.state.stateposition[rowid];
                                        let position = []
                                        for (var i = 0; i < this.props.recruiment.job.length; i++) {
                                            if (state[i] === true) {
                                                position.push(this.props.recruiment.job[i].job);
                                            } else {
                                                position.push("");
                                            }
                                        }
                                        this.setState(prevState => ({

                                            stateposition: state,
                                            cvte: {
                                                ...prevState.cvte,
                                                position: position
                                            }

                                        }));




                                    }}
                                        isChecked={this.state.stateposition[rowid]}
                                        checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 20, width: 20 }} />}
                                        unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 20, width: 20 }} />}
                                    />
                                    <Text style={{ fontSize: 14, marginLeft: 5 }}>{row.job}</Text>
                                </Item> : null


                        }
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                    <TouchableOpacity onPress={this.onCreateCVTE}>
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Gửi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onHideDialogCV}>
                        <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                            <Text style={{ color: '#60819E', fontWeight: 'bold', }}>Hủy bỏ</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </Modal>);
    }

    renderDialogProfileCompany() {
        return (
            <Modal
                style={{
                    backgroundColor: 'white',

                    marginTop: 90,
                    height: 400,
                    width: WIDTH - 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    marginLeft: 10,
                    marginRight: 10,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}
                isVisible={this.state.showDialogProfile}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                <Text style={{ color: '#60819E', fontSize: 19, fontWeight: 'bold', marginTop: 5 }}>THÔNG TIN CÔNG TY</Text>
                <ScrollView>
                    <View style={styles.profilecomcontainer}>
                        <View style={{ margin: 5, flexDirection: 'row', height: 120, alignItems: 'flex-start' }}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#DFDFDF',
                                borderRadius: 48
                            }}>
                                <Image source={{ uri: AppConstants.URL + this.props.companyprofile.logo }} style={styles.logocom} resizeMode='stretch' />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ margin: 5, marginLeft: 5, fontSize: 17, fontWeight: 'bold', color: 'black', textAlign: 'center', height: 50, width: WIDTH - 120 }}>{this.props.companyprofile.name}</Text>
                                {  this.props.user.type ===0 ? this.props.companyprofile.isfollow === false  ?
                                    <TouchableOpacity onPress={() => { this.gotoFollower(true) }}>
                                        <View style={{ height: 30, width: 120, borderRadius: 15, zIndex: 100, backgroundColor: '#87C795', justifyContent: 'center', alignItems: 'center', borderColor: '#66B576', borderWidth: 1, margin: 5 }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Theo dõi</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => { this.gotoFollower(false) }}>
                                        <View style={{ height: 30, width: 120, borderRadius: 15, zIndex: 100, backgroundColor: '#C6C6C6', justifyContent: 'center', alignItems: 'center', borderColor: '#757474', borderWidth: 1, margin: 5 }}>
                                            <Text style={{ color: '#757474', fontWeight: 'bold', }}>Bỏ theo dõi</Text>
                                        </View>
                                    </TouchableOpacity>
                                    : null
                                }
                            </View>
                        </View>
                        <Item fixedLabel style={{
                            height: 30,

                            borderBottomWidth: 0,

                        }} >

                            <Text style={{ color: 'black', marginLeft: 5, fontStyle: 'italic', fontSize: 15 }}>Website :</Text>

                            <TouchableOpacity onPress={() => {

                                try {
                                    let str1 = this.props.companyprofile.website.trim().slice(0, 8);
                                    let str2 = this.props.companyprofile.website.trim().slice(0, 7);
                                    if (str1.localeCompare("https://") === 0||str2.localeCompare("http://") === 0)
                                        Linking.openURL(this.props.companyprofile.website)
                                        else  Linking.openURL("https://"+this.props.companyprofile.website.trim())
                                } catch (error) {
                                    ToastAndroid.show("Đường dẫn bị lỗi", 50)
                                }
                            }}
                            >
                                <Text font-medium style={{ marginLeft: 10, color: '#336B9E', fontStyle: 'italic', textDecorationLine: 'underline' }}>{this.props.companyprofile.website}</Text>
                            </TouchableOpacity>
                        </Item>
                        <Text style={{ color: 'black', marginLeft: 5, fontStyle: 'italic', fontSize: 15 }}>Giới thiệu :</Text>
                        <Text font-medium style={{ marginLeft: 5 }}>{this.props.companyprofile.intro}</Text>
                        <Text style={{ color: 'black', marginLeft: 5, fontStyle: 'italic', fontSize: 15 }}>Địa chỉ :</Text>
                        <Text font-medium style={{ marginLeft: 5 }}>{this.props.companyprofile.address.street}</Text>




                    </View>
                </ScrollView>
                <TouchableOpacity onPress={this.onHideDialogProfile}>
                    <View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                        <Text style={{ color: '#60819E', fontWeight: 'bold', }}>Đóng</Text>
                    </View>
                </TouchableOpacity>
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
                        <Title>Chi Tiết</Title>
                    </Body>
                   
                </Header>
                <View style={{ backgroundColor: '#DFDFDF', flex: 1 }}>
                    {this.props.recruiment.title ? this.renderDialogCV() : null}
                    {this.props.companyprofile.name ? this.renderDialogProfileCompany() : null}
                    <ScrollView>
                        {!this.props.isLoading ? this.state.recruiment.title ?
                            <View>
                                <View style={{ margin: 5, backgroundColor: 'white', flex: 1 }} >

                                    <Text style={{
                                        margin: 5,

                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        color: '#2E4053',
                                    }}>{this.state.recruiment.title}</Text>

                                    <View style={styles.container1}>

                                        <Image resizeMode='stretch' style={styles.logo} source={{ uri: AppConstants.URL + this.state.recruiment.company.logo }} />
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity onPress={this.onShowDialogProfile}>
                                                <Text style={{
                                                    width: WIDTH - 150 - 20,
                                                    height: 95,
                                                    textDecorationLine: 'underline',
                                                    fontStyle: 'italic',
                                                    marginLeft: 5,
                                                    fontSize: 17,
                                                    color: "#60819E"
                                                }}>{this.state.recruiment.company.name}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.onShowDialogCV}>
                                                {console.log("GET", this.state.recruiment)}
                                                {(this.props.user.detailcandidate !== null && this.state.recruiment.getcv === true && !this.props.checkuser) ?

                                                    <View style={{ flexDirection: 'row', borderColor: '#ECCC72', borderRadius: 2, borderWidth: 2, width: 90, backgroundColor: 'white', elevation: 3, marginBottom: 4 }}>

                                                        <Image style={{ width: 20, height: 20, margin: 5 }} source={require('../../images/sendcv_icon.png')} />
                                                        <Text style={{ color: '#525151', fontSize: 15, fontWeight: 'bold', paddingTop: 5 }}>Gửi CV</Text>


                                                    </View>
                                                    : null
                                                }
                                            </TouchableOpacity>


                                        </View>

                                    </View>
                                    <Item fixedLabel style={{
                                        margin: 5,
                                        height: 30,
                                        borderWidth: 0.5,
                                        borderBottomWidth: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                    }} >
                                        <Image style={styles.icon} source={require('../../images/deadline_icon.png')} />
                                        <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold',fontSize:15 }}>Hạn nộp hồ sơ :</Text>
                                        <Text font-medium style={{ color: '#F77760', marginLeft: 10 }}>{this.props.recruiment.deadline}</Text>

                                    </Item>

                                    {this.renderListjob(this.state.recruiment.job)}

                                    <Item fixedLabel style={{
                                        margin: 5,
                                        height: 30,
                                        borderWidth: 0.5,
                                        borderBottomWidth: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                    }} >
                                        <Image style={styles.icon} source={require('../../images/detail_icon.png')} />
                                        <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold',fontSize:15 }}>Chi Tiết</Text>


                                    </Item>
                                    <View style={{ marginLeft: 25, marginRight: 15 }}>
                                        <Item fixedLabel style={{


                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                            alignItems: 'flex-start'
                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5, textAlign: 'left',fontStyle:'italic',fontSize:15 }}>Chi tiết:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5, flex: 1,fontSize:15 }}>{this.state.recruiment.detail}</Text>


                                        </Item>
                                        <Item fixedLabel style={{

                                            flex:1,
                                            marginBottom:10,
                                            borderWidth: 0.5,
                                            borderBottomWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                            alignItems: 'flex-start'
                                        }} >

                                            <Text font-medium style={{ color: '#3D3D3D', marginLeft: 5 ,fontStyle:'italic',fontSize:15}}>Liên Hệ:</Text>
                                            <Text font-medium style={{ color: '#A6ACAF', marginLeft: 5,fontSize:15 }}>{this.state.recruiment.contact}</Text>


                                        </Item>

                                    </View>


                                </View>
                                <View style={{ flex: 1, marginBottom: 55, marginLeft: 15, borderLeftColor: '#2E4053', borderLeftWidth: 2, backgroundColor: "#DFDFDF" }}>
                                    <Text style={{ margin: 5, color: '#2E4053', fontSize: 16, fontWeight: 'bold' }}>BÌNH LUẬN</Text>
                                    {this.renderListComment()}
                                </View>
                            </View> : null
                            :
                            <View style={{ height: HEIGHT - 150, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                            </View>
                        }


                    </ScrollView>
                    <View
                        style={
                            [styles.bottom, { height: this.state.lines * 18 + 25 }]
                        }
                    >
                        <Input
                            placeholder={"Bình luận "}
                            multiline={true}
                            onChangeText={(text) => { this.setState({ textcomment: text }) }}
                            value={this.state.textcomment}
                            style={{
                                borderColor: '#2E4053', flex: 1, margin: 5, borderWidth: 0.5,
                                borderRadius: 3, backgroundColor: 'white', padding:7, textAlignVertical: 'top',
                                height: this.state.lines * 16 + 16
                            }}
                            onContentSizeChange={(event) => {
                                const height = event.nativeEvent.contentSize.height
                                let count = Math.round(height / 25.5)
                                const lines = count;


                                const visibleLines = lines < 3 ? lines : 3
                                const visibleHeight = textHeight * visibleLines;

                                this.setState({ height: visibleHeight, lines: visibleLines })
                            }}>
                        </Input>
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={this.gotoAddComment}>

                            <Image source={require('../../images/comment_icon.png')} style={{ width: 25, height: 25, marginRight: 2 }} />

                        </TouchableOpacity>


                    </View>

                    <View style={{ height: 45 }} />

                </View>
            </Container>
        )
    }
    componentDidMount() {
        //  this.props.recruitment.job.push({})
        console.log(this.props.recruiment.job)
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(this.props.recruitment.job)

        // })
    }


}

const styles = StyleSheet.create({
    container2: {

        flex: 1,
        flexDirection: 'row',

    },
    profilecomcontainer: {
        flex: 1,

        width: WIDTH - 30


    },
    container1: {
        margin: 5,
        height: 130,
        flexDirection: 'row'

    },
    image: {
        width: 30,
        height: 30,
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,



        margin: 5
    },
    logocom: {
        marginTop: 2,
        height: 90,
        width: 90,
        borderRadius: 48,
        resizeMode: 'stretch',

    },
    logo: {

        width: 150,
    },
    text2:
        {
            color: '#2E4053',

        }
    ,
    icon: {
        width: 20
        , height: 20

    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 50,
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
        borderBottomWidth: 0.5,
        borderBottomColor: '#2E4053',

        flexDirection: 'row'


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
    text1: {
        paddingLeft: 6,

        color: "#60819E",
        fontWeight: 'bold',
        fontSize: 15
    }
    ,
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
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //alignItems: 'center',




    },
    company: {
        width: WIDTH - 150 - 10,
        height: 70,
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        marginLeft: 5,
        fontSize: 17,
        color: "#60819E"
    },
    title: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2E4053',
    },
    headerText1: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 18,
        flex: 0.8,
        fontWeight: 'bold',
        color: '#60819E',

    },
    headerText2: {
        paddingTop: 7,
        textAlign: 'center',
        fontSize: 18,
        flex: 0.3,
        fontWeight: 'bold',
        color: '#60819E',

    },
    textcvname: {
        fontSize: 15,
        height: 75,
        textAlign: 'center',
        marginLeft: 5

    }
    ,

    textdate: {
        fontSize: 13.5,
        textAlign: 'left',
        fontStyle: 'italic',
        marginLeft: 5,
        width: WIDTH / 2 - 72

    }
    ,
    textnameuser: {
        margin: 5,
        fontWeight: 'bold',
        flex: 0.75
    },
    textdatecmt: {
        fontStyle: 'italic',

        flex: 0.25,
        fontSize: 12
    },
    textcontent: {
        marginLeft: 5,
        marginRight: 5


    },
    containerlistcv: {

        marginBottom: 5,
        marginTop: 5,
        width: WIDTH / 2 - 34,
        borderRadius: 0,
        borderColor: "#2E4053",
        borderWidth: 0.5,
        height: 100,
        // justifyContent: 'center',

        backgroundColor: 'white'


    },

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
