
import React, { Component } from 'react';
import {
    View,

    Image, TouchableOpacity, TouchableHighlight,
    StyleSheet, ListView, ScrollView, TextInput
} from 'react-native';

import renderIf from 'render-if'
// import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-page-swiper'
import DatePicker from 'react-native-datepicker';
import { Item, Text, Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
import CheckBox from 'react-native-check-box';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
import ModalDropdown from 'react-native-modal-dropdown';
import LabelSelect from 'react-native-label-select';
import ActionButton from 'react-native-action-button';

const WIDTH = Dimensions.get('window').width
const { width } = Dimensions.get('window')
const MARGIN = 40;




const t1 = 1;
const t2 = 2;


class CVAdding extends Component {

    test() {
        console.log("AAA")
    }
    onPressDeleteEducation(num) {

        let dataCopy = [...this.state.dataEducation];
        dataCopy.splice(num, 1).length
        this.setState(pre => ({
            dataEducation: dataCopy,
            numOfEducation: this.state.numOfEducation - 1
        }))
        //alert(num,this.state.dataEducation.length)
    }
    onPressDeleteExperience(num) {

        let dataCopy = [...this.state.dataExperience];
        dataCopy.splice(num, 1).length
        this.setState(pre => ({
            dataExperience: dataCopy,
            numOfExperience: this.state.numOfExperience - 1
        }))
        //alert(num,this.state.dataEducation.length)
    }
    onPressDeleteSkill(num) {

        let dataCopy = [...this.state.dataSkill];
        dataCopy.splice(num, 1).length
        this.setState(pre => ({
            dataSkill: dataCopy,
            numOfSkill: this.state.numOfSkill - 1
        }))
        // alert(num, this.state.dataSkill.length)
    }
    onPressDeleteCertificate(num) {

        let dataCopy = [...this.state.dataCertificate];
        dataCopy.splice(num, 1).length
        this.setState(pre => ({
            dataCertificate: dataCopy,
            numOfCertificate: this.state.numOfCertificate - 1
        }))
        // alert(num, this.state.dataSkill.length)
    }
    onPressRateSkill(num, rate) {

        let dataCopy = [...this.state.dataSkill];
        dataCopy[num].rate = rate
        this.setState(pre => ({
            dataSkill: dataCopy,

        }))
        //alert(num,this.state.dataEducation.length)
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

    renderSkillForm() {
        return (
            <ListView dataSource={this.state.dataSource2.cloneWithRows(this.state.dataSkill)}
                style={{ marginBottom: 10 }}
                renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.state.dataSkill.length - 1 ? <View style={{ marginBottom: 3, marginTop: 3, marginLeft: WIDTH / 3, marginRight: 0, backgroundColor: '#2E4053', height: 1 }} /> : null}
                renderRow={(row, section, rowid) =>

                    <Item fixedLabel style={{ height: 35, borderBottomWidth: 0 }} >

                        <Input

                            placeholder={"Tên kỹ năng"}
                            placeholderTextColor='#BEBEBE'

                            style={{
                                textAlign: 'center', fontSize: 14, height: 30, marginRight: 5, borderRadius: 4,
                                borderColor: "#60819E", marginBottom: 2, padding:3,
                                borderWidth: 0.5
                            }}
                            value={row.name}
                            onChangeText={(text) => {
                                let dataCopy = [...this.state.dataSkill];

                                dataCopy[rowid].name = text;

                                this.setState(pre => ({
                                    dataSkill: dataCopy
                                }))


                            }}


                        />

                        <TouchableOpacity onPress={() =>
                            this.onPressRateSkill(rowid, 1)}>
                            <Image resizeMode='stretch' style={{ height: 23, width: 23, marginLeft: 3 }} source={this.state.dataSkill[rowid].rate >= 1 ? require('../../images/en_rate_icon.png') : require('../../images/dis_rate_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            this.onPressRateSkill(rowid, 2)}>
                            <Image resizeMode='stretch' style={{ height: 23, width: 23, marginLeft: 3 }} source={this.state.dataSkill[rowid].rate >= 2 ? require('../../images/en_rate_icon.png') : require('../../images/dis_rate_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            this.onPressRateSkill(rowid, 3)}>
                            <Image resizeMode='stretch' style={{ height: 23, width: 23, marginLeft: 3 }} source={this.state.dataSkill[rowid].rate >= 3 ? require('../../images/en_rate_icon.png') : require('../../images/dis_rate_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            this.onPressRateSkill(rowid, 4)}>
                            <Image resizeMode='stretch' style={{ height: 23, width: 23, marginLeft: 3 }} source={this.state.dataSkill[rowid].rate >= 4 ? require('../../images/en_rate_icon.png') : require('../../images/dis_rate_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            this.onPressRateSkill(rowid, 5)}>
                            <Image resizeMode='stretch' style={{ height: 23, width: 23, marginLeft: 3, marginRight: 2 }} source={this.state.dataSkill[rowid].rate >= 5 ? require('../../images/en_rate_icon.png') : require('../../images/dis_rate_icon.png')} />
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() =>
                            this.onPressDeleteSkill(rowid)}>
                            <Image resizeMode='stretch' style={{ height: 25, width: 25, marginLeft: 5 }} source={require('../../images/delete1_icon.png')} />
                        </TouchableOpacity>

                    </Item>
                }
            />

        )


    }


    renderCertificateForm() {
        return (
            <ListView dataSource={this.state.dataSource4.cloneWithRows(this.state.dataCertificate)}
                style={{ marginBottom: 10 }}
                renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.state.dataCertificate.length - 1 ? <View style={{ marginBottom: 3, marginTop: 3, marginLeft: WIDTH / 3, marginRight: 0, backgroundColor: '#2E4053', height: 1 }} /> : null}
                renderRow={(row, section, rowid) =>

                    <Item fixedLabel style={{ height: 35, borderBottomWidth: 0 }} >

                        <Input

                            placeholder={"Năm"}
                            placeholderTextColor='#BEBEBE'

                            style={{
                                textAlign: 'center', fontSize: 14, height: 30, flex: 0.2, marginRight: 5, borderRadius: 4,
                                borderColor: "#60819E", marginBottom: 2, padding:3,
                                borderWidth: 0.5
                            }}
                            value={row.year}
                            onChangeText={(text) => {
                                let dataCopy = [...this.state.dataCertificate];

                                dataCopy[rowid].year = text;

                                this.setState(pre => ({
                                    dataCertificate: dataCopy
                                }))


                            }}


                        />
                        <Input

                            placeholder={"Tên kỹ năng hoặc giải thưởng "}
                            placeholderTextColor='#BEBEBE'

                            style={{
                                textAlign: 'center', fontSize: 14, height: 30, borderRadius: 4, flex: 0.8,
                                borderColor: "#60819E", marginBottom: 2, padding:3,
                                borderWidth: 0.5
                            }}
                            value={row.name}
                            onChangeText={(text) => {
                                let dataCopy = [...this.state.dataCertificate];

                                dataCopy[rowid].name = text;

                                this.setState(pre => ({
                                    dataCertificate: dataCopy
                                }))


                            }}


                        />




                        <TouchableOpacity onPress={() =>
                            this.onPressDeleteCertificate(rowid)}>
                            <Image resizeMode='stretch' style={{ height: 25, width: 25, marginLeft: 5 }} source={require('../../images/delete1_icon.png')} />
                        </TouchableOpacity>

                    </Item>
                }
            />

        )


    }


    renderEducationForm() {
        return (
            <ListView dataSource={this.state.dataSource1.cloneWithRows(this.state.dataEducation)}
                style={{ marginBottom: 10 }}
                renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.state.dataEducation.length - 1 ? <View style={{ marginBottom: 3, marginTop: 3, marginLeft: WIDTH / 3, marginRight: 0, backgroundColor: '#2E4053', height: 1 }} /> : null}
                renderRow={(row, section, rowid) =>
                    <View>
                        <Item fixedLabel style={{ height: 75, borderBottomWidth: 0 }} >
                            <View style={{ flex: 0.22, marginBottom: 2, marginTop: 2 }}>
                                <Input

                                    placeholder={"Bắt đầu"}
                                    placeholderTextColor='#BEBEBE'

                                    style={{
                                        textAlign: 'center', fontSize: 14, height: 30, flex: 1, marginRight: 5, borderRadius: 4,
                                        borderColor: "#60819E", marginBottom: 2, padding:3,
                                        borderWidth: 0.5
                                    }}
                                    value={row.startYear}
                                    onChangeText={(text) => {
                                        let dataCopy = [...this.state.dataEducation];

                                        dataCopy[rowid].startYear = text;

                                        this.setState(pre => ({
                                            dataEducation: dataCopy
                                        }))


                                    }}


                                />
                                <Input
                                    placeholder={"Kết thúc"}
                                    placeholderTextColor='#BEBEBE'

                                    style={{
                                        textAlign: 'center', fontSize: 14, height: 30, flex: 1, marginRight: 5, borderRadius: 4,
                                        borderColor: "#60819E", marginTop: 2, padding:3,
                                        borderWidth: 0.5,
                                    }}
                                    value={row.endYear}
                                    onChangeText={(text) => {

                                    }}
                                    onChangeText={(text, key) => {
                                        let dataCopy = [...this.state.dataEducation];

                                        dataCopy[rowid].endYear = text;

                                        this.setState(pre => ({
                                            dataEducation: dataCopy
                                        }))


                                    }}
                                // value={user.company.name}

                                />
                            </View>

                            <Input
                                placeholder={"Nhập nơi học tập"}
                                placeholderTextColor='#BEBEBE'
                                multiline={true}
                                style={{
                                    textAlign: 'left', flex: 0.7, height: 70, fontSize: 15, borderRadius: 4,
                                    borderColor: "#60819E",
                                    borderWidth: 0.5,padding:3,

                                    textAlignVertical: 'top'
                                }}
                                value={row.place}
                                onChangeText={(text) => {
                                    let dataCopy = [...this.state.dataEducation];
                                    //  alert(dataCopy,ta)
                                    dataCopy[rowid].place = text;

                                    this.setState(pre => ({
                                        dataEducation: dataCopy
                                    }))


                                }}
                            // value={user.company.name}

                            />
                            <TouchableOpacity style={{ flex: 0.1 }} onPress={() =>
                                this.onPressDeleteEducation(rowid)}>
                                <Image resizeMode='stretch' style={{ height: 25, width: 25, marginLeft: 5 }} source={require('../../images/delete1_icon.png')} />
                            </TouchableOpacity>

                        </Item>
                        <Item fixedLabel style={{ height: 35, borderBottomWidth: 0 }} >

                            <Input

                                placeholder={"Học vị"}
                                placeholderTextColor='#BEBEBE'

                                style={{
                                    textAlign: 'center', fontSize: 14, height: 30, flex: 0.4, marginRight: 5, borderRadius: 4,
                                    borderColor: "#60819E", marginBottom: 2,padding:3,
                                    borderWidth: 0.5
                                }}
                                value={row.degree}
                                onChangeText={(text) => {
                                    let dataCopy = [...this.state.dataEducation];

                                    dataCopy[rowid].degree = text;

                                    this.setState(pre => ({
                                        dataEducation: dataCopy
                                    }))


                                }}


                            />


                            <Input
                                placeholder={"Ngành"}
                                placeholderTextColor='#BEBEBE'
                                multiline={true}
                                style={{
                                    textAlign: 'center', flex: 0.6, height: 30, fontSize: 14, borderRadius: 4,
                                    borderColor: "#60819E", marginBottom: 2,
                                    borderWidth: 0.5,
                                    padding:3,

                                }}
                                value={row.department}
                                onChangeText={(text) => {
                                    let dataCopy = [...this.state.dataEducation];
                                    //  alert(dataCopy,ta)
                                    dataCopy[rowid].department = text;

                                    this.setState(pre => ({
                                        dataEducation: dataCopy
                                    }))


                                }}
                            // value={user.company.name}

                            />


                        </Item>
                    </View>
                }
            />

        )


    }


    renderExperienceForm() {
        return (
            <ListView dataSource={this.state.dataSource3.cloneWithRows(this.state.dataExperience)}
                style={{ marginBottom: 10 }}
                renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.state.dataExperience.length - 1 ? <View style={{ marginBottom: 3, marginTop: 3, marginLeft: WIDTH / 3, marginRight: 0, backgroundColor: '#2E4053', height: 1 }} /> : null}
                renderRow={(row, section, rowid) =>
                    <View>
                        <Item fixedLabel style={{ height: 75, borderBottomWidth: 0 }} >
                            <View style={{ flex: 0.22, marginBottom: 2, marginTop: 2 }}>
                                <Input

                                    placeholder={"Bắt đầu"}
                                    placeholderTextColor='#BEBEBE'

                                    style={{
                                        textAlign: 'center', fontSize: 14, height: 30, flex: 1, marginRight: 5, borderRadius: 4,
                                        borderColor: "#60819E", marginBottom: 2, padding:3,
                                        borderWidth: 0.5
                                    }}
                                    value={row.startYear}
                                    onChangeText={(text) => {
                                        let dataCopy = [...this.state.dataExperience];

                                        dataCopy[rowid].startYear = text;

                                        this.setState({
                                            dataExperience: dataCopy
                                        })


                                    }}


                                />
                                <Input
                                    placeholder={"Kết thúc"}
                                    placeholderTextColor='#BEBEBE'

                                    style={{
                                        textAlign: 'center', fontSize: 14, height: 30, flex: 1, marginRight: 5, borderRadius: 4,
                                        borderColor: "#60819E", marginTop: 2, padding:3,
                                        borderWidth: 0.5,
                                    }}
                                    value={row.endYear}
                                    onChangeText={(text) => {

                                    }}
                                    onChangeText={(text, key) => {
                                        let dataCopy = [...this.state.dataExperience];

                                        dataCopy[rowid].endYear = text;

                                        this.setState({
                                            dataExperience: dataCopy
                                        })


                                    }}
                                // value={user.company.name}

                                />
                            </View>

                            <Input
                                placeholder={"Nhập nơi làm việc"}
                                placeholderTextColor='#BEBEBE'
                                multiline={true}
                                style={{
                                    textAlign: 'left', flex: 0.7, height: 70, fontSize: 15, borderRadius: 4,
                                    borderColor: "#60819E",
                                    borderWidth: 0.5,padding:3,

                                    textAlignVertical: 'top'
                                }}
                                value={row.place}
                                onChangeText={(text) => {
                                    let dataCopy = [...this.state.dataExperience];
                                    //  alert(dataCopy,ta)
                                    dataCopy[rowid].place = text;

                                    this.setState(pre => ({
                                        dataExperience: dataCopy
                                    }))


                                }}
                            // value={user.company.name}

                            />
                            <TouchableOpacity style={{ flex: 0.1 }} onPress={() =>
                                this.onPressDeleteExperience(rowid)}>
                                <Image resizeMode='stretch' style={{ height: 25, width: 25, marginLeft: 5 }} source={require('../../images/delete1_icon.png')} />
                            </TouchableOpacity>

                        </Item>
                        <Item fixedLabel style={{ height: 35, borderBottomWidth: 0 }} >

                            <Input

                                placeholder={"Cấp bậc"}
                                placeholderTextColor='#BEBEBE'

                                style={{
                                    textAlign: 'center', fontSize: 14, height: 30, marginRight: 5, borderRadius: 4,
                                    borderColor: "#60819E", marginBottom: 2, padding:3,
                                    borderWidth: 0.5
                                }}
                                value={row.rank}
                                onChangeText={(text) => {
                                    let dataCopy = [...this.state.dataExperience];

                                    dataCopy[rowid].rank = text;

                                    this.setState(pre => ({
                                        dataExperience: dataCopy
                                    }))


                                }}


                            />





                        </Item>
                    </View>
                }
            />

        )


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
                <Text style={{ flex: 1, color: '#60819E', fontSize: 18, fontWeight: 'bold' }}>LƯU CV</Text>
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
                            value={this.state.cvname}

                            onChangeText={(text) => {
                                this.setState(prevState => ({

                                    cvname: text

                                }))
                            }}

                        />
                    </Item>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity onPress={this.onSubmitdataCV} >
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

        return (
            <Container>

                <Content style={{ backgroundColor: '#2E4053' }}>

                    {this.renderDialog()}

                    <View style={styles.styleviewitem}>
                        <View style={styles.titlestyle}>
                            <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/info_personal_icon.png')} />
                            <Text style={{ ...styles.styletexttitle }}> THÔNG TIN CÁ NHÂN </Text>
                        </View>
                        <View style={{ ...styles.containeritem, marginTop: 5 }}>
                            <Item fixedLabel style={{ ...styles.itemstyle }} >
                                <Text font-medium style={{fontStyle:'italic'}}>Họ tên đầy đủ :</Text>
                                <Input
                                    placeholder={"Nhập họ tên bạn"}
                                    placeholderTextColor='#BEBEBE'

                                    style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                    value={this.state.resume.profile.name}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            resume: {
                                                ...prevState.resume,
                                                profile: {
                                                    ...prevState.resume.profile,
                                                    name: text
                                                }
                                            }
                                        }))
                                    }}
                                // value={user.company.name}

                                />
                            </Item>
                        </View>

                        <View style={styles.containeritem}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={{ width: 140, fontStyle:'italic'}} >Tỉnh/ Thành phố:</Text>
                                <ModalDropdown style={{ flex: 1, marginLeft: 45 }}
                                    options={this.props.listprovince}
                                    // defaultValue={this.pr.city}
                                    onSelect={(idx, value) => this.onSelectDropdownCity(idx, value)}

                                    renderRow={this.renderRowDropdownCity.bind(this)}

                                    
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'  }}>
                                        <Text style={{ textAlign: 'right' }}>{this.state.resume.profile.address.address}</Text>
                                        <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2,marginRight:5 }} source={require('../../images/caret-down.png')} />
                                    </View>
                                </ModalDropdown>

                            </Item>
                        </View>
                        <View style={[styles.containeritem]}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={{fontStyle:'italic'}}>Email:</Text>
                                <Input
                                    placeholder={"Nhập Email"}
                                    placeholderTextColor='#BEBEBE'
                                    style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                    value={this.state.resume.profile.email}

                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            resume: {
                                                ...prevState.resume,
                                                profile: {
                                                    ...prevState.resume.profile,
                                                    email: text
                                                }
                                            }
                                        }))
                                    }}

                                />
                            </Item>
                        </View>
                        <View style={[styles.containeritem]}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={{fontStyle:'italic'}}>Ngày sinh:</Text>
                                <View style={{ flex: 1 }}>
                                    <DatePicker
                                        style={{ alignSelf: 'flex-end', height: 40 }}
                                        date={this.state.resume.profile.birthday}
                                        mode="date"
                                        placeholder={"Chọn ngày "}
                                        format="DD-MM-YYYY"
                                        confirmBtnText={"Chọn"}
                                        cancelBtnText={"Hủy bỏ"}
                                        onDateChange={(date) => this.setState(prevState => ({
                                            resume: {
                                                ...prevState.resume,
                                                profile: {
                                                    ...prevState.resume.profile,
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
                        <View style={[styles.containeritem, { marginBottom: 10 }]}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={{fontStyle:'italic'}}>Số Điện Thoại:</Text>
                                <Input
                                    placeholder={"Nhập SDT"}
                                    keyboardType='numeric'
                                    placeholderTextColor='#BEBEBE'
                                    style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                    value={this.state.resume.profile.phone}

                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            resume: {
                                                ...prevState.resume,
                                                profile: {
                                                    ...prevState.resume.profile,
                                                    phone: text
                                                }
                                            }
                                        }))
                                    }}

                                />
                            </Item>
                        </View>
                    </View>
                    <View style={styles.styleviewitem}>

                        <View style={styles.titlestyle}>
                            <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/target_icon.png')} />
                            <Text style={styles.styletexttitle}> MỤC TIÊU </Text>

                        </View>
                        <Input
                            placeholder={"Mục tiêu của bạn"}
                            placeholderTextColor='#BEBEBE'
                            multiline={true}
                            style={{
                                textAlign: 'left', height: 105, fontSize: 15, borderRadius: 4,
                                borderColor: "#60819E",
                                borderWidth: 0.5, margin: 10, marginTop: 5,
                                padding:3,
                                textAlignVertical: 'top'
                            }}
                            value={this.state.resume.target}
                            onChangeText={(text) => {


                                this.setState(prevState => ({
                                    resume: {
                                        ...prevState.resume,
                                        target: text
                                    }
                                }))


                            }}
                        // value={user.company.name}

                        />



                    </View>
                    <View style={styles.styleviewitem}>
                        <View style={styles.titlestyle}>
                            <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/education_icon.png')} />
                            <Text style={styles.styletexttitle}> HỌC VẤN </Text>
                            <TouchableOpacity onPress={() => {
                                let datacopy = [...this.state.dataEducation];
                                datacopy.push({
                                    startYear: "",
                                    endYear: "",
                                    place: ""
                                })
                                this.setState({
                                    dataEducation: datacopy,
                                    numOfEducation: this.state.numOfEducation + 1
                                })
                            }}>
                                <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/add_more_icon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10 }} >

                            {this.renderEducationForm()}
                        </View>


                    </View>
                    <View style={styles.styleviewitem}>

                        <View style={styles.titlestyle}>
                            <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/skill_icon.png')} />
                            <Text style={styles.styletexttitle}> KỸ NĂNG</Text>
                            <TouchableOpacity onPress={() => {
                                let datacopy = [...this.state.dataSkill];
                                datacopy.push({
                                    name: "",
                                    rate: 0
                                })
                                this.setState({
                                    dataSkill: datacopy,
                                    numOfSkill: this.state.numOfSkill + 1
                                })
                            }}>
                                <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/add_more_icon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10 }} >

                            {this.renderSkillForm()}
                        </View>



                    </View>

                    <View style={styles.styleviewitem}>
                        <View style={styles.titlestyle}>
                            <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/experience_icon.png')} />
                            <Text style={styles.styletexttitle}> KINH NGHIỆM</Text>
                            <TouchableOpacity onPress={() => {
                                let datacopy = [...this.state.dataExperience];
                                datacopy.push({
                                    startYear: "",
                                    endYear: "",
                                    place: "",
                                    rank: ""
                                })
                                this.setState({
                                    dataExperience: datacopy,
                                    numOfExperience: this.state.numOfExperience + 1
                                })
                            }}>
                                <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/add_more_icon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10 }} >

                            {this.renderExperienceForm()}
                        </View>



                    </View>
                    <View style={styles.styleviewitem}>
                        <View style={styles.titlestyle}>
                            <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/certificate_icon.png')} />
                            <Text style={styles.styletexttitle}> CHỨNG CHỈ , GIẢI THƯỞNG</Text>
                            <TouchableOpacity onPress={() => {
                                let datacopy = [...this.state.dataCertificate];
                                datacopy.push({

                                    year: "",
                                    name: ""

                                })
                                this.setState({
                                    dataCertificate: datacopy,
                                    numOfCertificate: this.state.numOfCertificate + 1
                                })
                            }}>
                                <Image resizeMode='stretch' style={styles.imagestyle} source={require('../../images/add_more_icon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10 }} >

                            {this.renderCertificateForm()}
                        </View>



                    </View>
                    {/* <ActionButton buttonColor="rgba(231,76,60,1)" offsetY={60}>
                      
                    </ActionButton> */}
                    {/* <View style={styles.containersavebutton}>
                        <TouchableOpacity onPress={this.onSubmitUpdate}  >
                            <View style={{ height: 40, width: width - (40 - 20), borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                                <Text style={{ color: 'white' }}>
                                    Lưu thay đổi
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View> */}


                    <View style={{ height: 50 }} >


                    </View>


                    {/* </Swiper> */}



                </Content>
            </Container >
        )
    }
    componentDidMount() {

    }


}


const styles = {
    containersavebutton: {

        height: 50,
        marginLeft: 15,

        marginRight: 15,
        marginTop: 5,


        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    swiper: {
        height: 300,
        width: 500
    },

    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    containeritem: {
        borderRadius: 4,
        borderColor: "#60819E",
        borderWidth: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2




    },
    itemstyle: {
        paddingLeft: 3,
        paddingRight: 3,
        height: 36,
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,


        // borderTopColor: variables.ColorGray77,
        // borderTopWidth: variables.borderWidth,
    },
    titlestyle: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5

    },
    imagestyle: {
        height: 30,
        width: 30
    },
    styleviewitem: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        marginTop: 5
    },
    styletexttitle: {
        fontSize: 18,
        color: '#2E4053',
        fontWeight: 'bold',
        flex: 0.97,
        marginTop: 5
    }



}
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
export default CVAdding;