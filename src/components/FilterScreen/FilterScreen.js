
import React, { Component } from 'react';
import {
    View,

    StyleSheet, Image, TouchableOpacity, TouchableHighlight, ListView
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
import CheckBox from 'react-native-check-box';
//import Autocomplete from '../ui/AutoCompleteInput'
import Autocomplete from '../ui/AutoCompleteInput'

//import AutoComplete from 'react-native-autocomplete'
const { width } = Dimensions.get('window');



const t1 = 1;
const t2 = 2;
const MARGIN = 40;
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class FilterScreen extends Component {




    renderRowDropdownCity(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 5 }} numberOfLines={1}>
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
    renderRowDropdownJob(rowData, rowID, highlighted) {

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
    renderRowDropdownExperience(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 165, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 10 }}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
    renderRowDropdownTypeofJob(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 165, height: 40, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 10, marginRight: 10 }}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
    onSetEnable(num) {

        switch (num) {
            case 1:

                if (this.state.check1 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            job: null
                        }, check1: !this.state.check1
                    }));
                else
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            job: this.state.job.key,
                        },
                        check1: !this.state.check1
                    }));
                return;
            case 2:
                if (this.state.check2 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            salarymax: null,
                            salarymin: null
                        }, check2: !this.state.check2
                    }));
                else
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            salarymax: Number(this.state.textsalarymax),
                            salarymin: Number(this.state.textsalarymin)
                        }, check2: !this.state.check2
                    }));

                return;
            case 3:
                if (this.state.check3 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            gender: null
                        }, check3: !this.state.check3,
                        isfemale: true,
                        ismale: true
                    }));
                else {

                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            gender: 0
                        }, check3: !this.state.check3,
                    }))

                }
                return;
            case 4:
                if (this.state.check4 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            major: null
                        }, check4: !this.state.check4
                    }));
                else
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            major: this.state.major.key
                        }, check4: !this.state.check4
                    }));
                return;
            case 5:
                if (this.state.check5 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            city: null
                        }, check5: !this.state.check5
                    }));
                else
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            city: this.state.city.key
                        }, check5: !this.state.check5
                    }));
                return;
            case 6:
                if (this.state.check6 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            experience: null
                        }, check6: !this.state.check6,
                    }));

                else
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            experience: this.state.experience.key
                        }, check6: !this.state.check6
                    }));
                return;
            case 7:
                if (this.state.check7 === true)
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            typejob: null
                        }, check7: !this.state.check7,
                    }));

                else
                    this.setState(prevState => ({
                        param: {
                            ...prevState.param,
                            typejob: this.state.typeofjob.key
                        }, check7: !this.state.check7
                    }));

                return;
            default:
                return;
        }
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
                        <Title>Lọc </Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Content style={{ backgroundColor: 'white' }}>


                    <View style={[styles.contentcheck, { marginTop: 20 }]}>
                        <CheckBox

                            onClick={() => this.onSetEnable(1)}
                            isChecked={this.state.check1}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check1 === true ? styles.containeritem : styles.containeritemdisable} >

                            <Item fixedLabel style={styles.itemstyle} >

                                <Text font-medium style={this.state.check1 === true ? styles.active : styles.inactive} >Tên công việc:</Text>

                                {/* <Autocomplete
                                    style={{ fontSize: 15, textAlign: 'right' }}
                                    data={this.state.datajob}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    hideResults={this.state.hideresult}
                                    defaultValue={this.state.query}
                                    placeholder="Nhập tên công việc"
                                    placeholderTextColor="#BEBEBE"
                                    onChangeText={(text) => this.onTyping(text)}
                                    renderItem={data => (
                                        <TouchableOpacity onPress={() => this.setState({ query: data.work, hideresult: true })}>
                                            <Text>{data.work}</Text>
                                        </TouchableOpacity>
                                    )}
                                /> */}
                                <ModalDropdown ref='modeldropdown'
                                    style={{ flex: 1, marginLeft: 25 }}
                                    options={this.state.datajob}

                                    //defaultValue={this.state.city}
                                    onSelect={(idx, value) => this.onSelectDropdownJob(idx, value)}

                                    renderRow={this.renderRowDropdownJob.bind(this)}

                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Input ref='textinput'
                                           
                                            placeholder={"Nhập kí tự để tìm kiếm"}
                                            placeholderTextColor='#BEBEBE'
                                            onChangeText={(text) => { this.setState({ queryjob: text }) }}
                                            //autoFocus = {true}
                                            style={{ textAlign: 'right', flex: 1, fontSize: 15, color: '#60819E' }}
                                            value={this.state.queryjob}

                                        />
                                    </View>
                                </ModalDropdown>
                                <TouchableOpacity onPress={this.onChangeJob}>
                                    <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={this.state.check1 === true ? require('../../images/search_icon.png') : require('../../images/dissearch_icon.png')} />
                                </TouchableOpacity>




                            </Item>
                        </View>
                    </View>
                    <View style={styles.contentcheck}>
                        <CheckBox

                            onClick={() => this.onSetEnable(2)}
                            isChecked={this.state.check2}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check2 === true ? styles.containeritem : styles.containeritemdisable}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={this.state.check2 === true ? styles.active : styles.inactive}>Lương từ :</Text>
                                <Input
                                    placeholder={"Nhỏ nhất"}
                                    placeholderTextColor='#BEBEBE'
                                    onChangeText={(text) => {
                                        if (Number(text) > this.state.param.salarymax ||this.state.param.salarymax===null ) {
                                            this.setState(prevState => ({
                                                param: {
                                                    ...prevState.param,

                                                    salarymin: Number(text),
                                                    salarymax: Number(text)
                                                }, textsalarymin: text,
                                                textsalarymax: text,
                                            }))
                                        }else{
                                            this.setState(prevState => ({
                                                param: {
                                                    ...prevState.param,

                                                    salarymin: Number(text),
                                                   
                                                }, textsalarymin: text,
                                                
                                            }))
                                        }
                                    }
                                    }
                                    keyboardType='numeric'
                                    value={this.state.textsalarymin}
                                    style={this.state.check2 === true ? { textAlign: 'right', flex: 1, fontSize: 15, color: '#60819E' } : { textAlign: 'right', flex: 1, fontSize: 15, color: '#DFDFDF' }}
                                // value={user.company.name}

                                />
                                <Text font-medium >-</Text>
                                <Input
                                    placeholder={"Lớn nhất"}
                                    placeholderTextColor='#BEBEBE'
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            param: {
                                                ...prevState.param,

                                                salarymax: Number(text)
                                            }, textsalarymax: text
                                        }))
                                    }}
                                    keyboardType='numeric'
                                    value={this.state.textsalarymax}
                                    style={this.state.check2 === true ? { textAlign: 'right', flex: 1, fontSize: 15, color: '#60819E' } : { textAlign: 'right', flex: 1, fontSize: 15, color: '#DFDFDF' }}
                                // value={user.company.name}

                                />
                            </Item>
                        </View>
                    </View>
                    <View style={styles.contentcheck}>
                        <CheckBox

                            onClick={() => this.onSetEnable(3)}
                            isChecked={this.state.check3}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check3 === true ? styles.containeritem : styles.containeritemdisable}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={this.state.check3 === true ? styles.active : styles.inactive}>Giới tính:</Text>

                                <CheckBox
                                    style={{ marginLeft: 70 }}
                                    onClick={() => this.onChangeGender(t1)}
                                    isChecked={this.state.ismale}


                                />
                                <Text font-medium style={this.state.check3 === true ? { color: '#60819E' } : { color: '#DFDFDF' }} >Nam</Text>
                                <CheckBox
                                    style={{ marginLeft: 20 }}
                                    onClick={() => this.onChangeGender(t2)}
                                    isChecked={this.state.isfemale}


                                />
                                <Text font-medium style={this.state.check3 === true ? { color: '#60819E' } : { color: '#DFDFDF' }}>Nữ</Text>

                            </Item>
                        </View>
                    </View>
                    <View style={styles.contentcheck}>
                        <CheckBox

                            onClick={() => this.onSetEnable(4)}
                            isChecked={this.state.check4}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check4 === true ? styles.containeritem : styles.containeritemdisable}>

                            <Item fixedLabel style={{ ...styles.itemstyle }} >
                                <Text font-medium style={this.state.check4 === true ? styles.active : styles.inactive}>Ngành :</Text>
                                <ModalDropdown style={{ flex: 1, marginLeft: 25 }}
                                    options={this.props.listdepartment}
                                    //defaultValue={this.state.city}
                                    onSelect={(idx, value) => this.onSelectDropdownMajor(idx, value)}

                                    renderRow={this.renderRowDropdownMajor.bind(this)}

                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Text style={this.state.check4 === true ? { textAlign: 'right', color: '#60819E' } : { textAlign: 'right', color: '#DFDFDF' }}>{this.state.major.name}</Text>
                                        <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={this.state.check4 === true ? require('../../images/caret-down.png') : require('../../images/discaret-down.png')} />
                                    </View>
                                </ModalDropdown>
                            </Item>
                        </View>
                    </View>
                    <View style={styles.contentcheck}>
                        <CheckBox

                            onClick={() => this.onSetEnable(5)}
                            isChecked={this.state.check5}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check5 === true ? styles.containeritem : styles.containeritemdisable}>
                            <Item fixedLabel style={styles.itemstyle} >
                                <Text font-medium style={this.state.check5 === true ? styles.active : styles.inactive}>ĐC:</Text>
                                <ModalDropdown style={{ width: 170, marginLeft: 88 }}
                                    options={this.props.listprovince}
                                    //defaultValue={this.state.city}
                                    onSelect={(idx, value) => this.onSelectDropdownCity(idx, value)}

                                    renderRow={this.renderRowDropdownCity.bind(this)}

                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingLeft: 30 }}>
                                        <Text style={this.state.check5 === true ? { textAlign: 'right', color: '#60819E' } : { textAlign: 'right', color: '#DFDFDF' }}>{this.state.city.name}</Text>
                                        <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={this.state.check5 === true ? require('../../images/caret-down.png') : require('../../images/discaret-down.png')} />
                                    </View>
                                </ModalDropdown>

                            </Item>
                        </View>
                    </View>
                    <View style={styles.contentcheck}>
                        <CheckBox

                            onClick={() => this.onSetEnable(6)}
                            isChecked={this.state.check6}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check6 === true ? styles.containeritem : styles.containeritemdisable}>

                            <Item fixedLabel style={{ ...styles.itemstyle }} >
                                <Text font-medium style={this.state.check6 === true ? styles.active : styles.inactive}>Kinh Nghiệm :</Text>
                                <ModalDropdown style={{ flex: 1, marginLeft: 15 }}
                                    options={this.props.listexperience}
                                    //defaultValue={this.state.city}
                                    onSelect={(idx, value) => this.onSelectDropdownExperience(idx, value)}

                                    renderRow={this.renderRowDropdownExperience.bind(this)}

                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Text style={this.state.check6 === true ? { textAlign: 'right', color: '#60819E' } : { textAlign: 'right', color: '#DFDFDF' }}>{this.state.experience.name}</Text>
                                        <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={this.state.check6 === true ? require('../../images/caret-down.png') : require('../../images/discaret-down.png')} />
                                    </View>
                                </ModalDropdown>
                            </Item>
                        </View>
                    </View>
                    <View style={styles.contentcheck}>
                        <CheckBox

                            onClick={() => this.onSetEnable(7)}
                            isChecked={this.state.check7}
                            checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 35, width: 35 }} />}
                            unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 35, width: 35 }} />}

                        />
                        <View style={this.state.check7 === true ? styles.containeritem : styles.containeritemdisable}>

                            <Item fixedLabel style={{ ...styles.itemstyle }} >
                                <Text font-medium style={this.state.check7 === true ? styles.active : styles.inactive} >Hình thức :</Text>
                                <ModalDropdown style={{ flex: 1, marginLeft: 35 }}
                                    options={this.props.listtypejob}
                                    //defaultValue={this.state.city}
                                    onSelect={(idx, value) => this.onSelectDropdownTypeofJob(idx, value)}

                                    renderRow={this.renderRowDropdownTypeofJob.bind(this)}

                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Text style={this.state.check7 === true ? { textAlign: 'right', color: '#60819E' } : { textAlign: 'right', color: '#DFDFDF' }}>

                                            {this.state.typeofjob.name}</Text>
                                        <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={this.state.check7 === true ? require('../../images/caret-down.png') : require('../../images/discaret-down.png')} />
                                    </View>
                                </ModalDropdown>
                            </Item>
                        </View>
                    </View>
                    <View style={styles.containerfilter}>
                        <TouchableOpacity onPress={this.checkBeforeRequest}  >
                            <View style={{ height: MARGIN, width: width - (MARGIN - 20), borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                                <Text style={{ color: 'white' }}>
                                    Áp Dụng
                                </Text>
                            </View>
                        </TouchableOpacity>

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
const styles = {
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
        flex: 1,

        borderRadius: 4,
        borderColor: "#60819E",
        borderWidth: 0.5,
        marginLeft: 10,

        marginTop: 2,
        marginBottom: 2
    },
    containeritemdisable: {
        flex: 1,

        borderRadius: 4,
        borderColor: "#DFDFDF",
        borderWidth: 0.5,
        marginLeft: 10,

        marginTop: 2,
        marginBottom: 2
    },
    titleText: {
        fontSize: 14,
        padding: 5
    },
    image: {
        height: 30,
        width: 30,
    },
    active:{
        color: '#3D3D3D' ,
        fontStyle:'italic'
    },
    inactive:{
        color: '#DFDFDF' ,
        fontStyle:'italic'
    },
    containerfilter: {

        height: 50,
        marginLeft: 10,
        marginTop: 120,
        marginRight: 10,


        flexDirection: 'row',
        justifyContent: 'space-around',
    },

}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
