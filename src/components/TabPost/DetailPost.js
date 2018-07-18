
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity, TouchableHighlight,
    StyleSheet, ListView, ScrollView, TextInput
} from 'react-native';

import renderIf from 'render-if'
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Pie } from 'react-native-pathjs-charts'
import DatePicker from 'react-native-datepicker';
import { Item, Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
import CheckBox from 'react-native-check-box';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
import ModalDropdown from 'react-native-modal-dropdown';
import LabelSelect from 'react-native-label-select';


const { width } = Dimensions.get('window')
const  HEIGHT = Dimensions.get('window').height
const MARGIN = 40;




const t1 = 1;
const t2 = 2;


class DetailPost extends Component {


    onSetOtherSalary() {
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    salary: {
                        other: null

                    }
                }
            },


            currenttextjob: {
                ...prevState.currenttextjob,
                salary: false
            }
        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        salary: {
                            other: null

                        }
                    }
                },
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            salary: {
                                other: null

                            }
                        }
                    },
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job3,
                            info: {
                                ...prevState.job3.info,
                                salary: {
                                    other: null

                                }
                            }
                        },
                    }))
                }
    }
    onSetSalary(num) {
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    salary: {
                        salary: null

                    }
                }
            },
            currenttextjob: {
                ...prevState.currenttextjob,
                salary: true
            }
        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        salary: {
                            salary: null

                        }
                    }
                },
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            salary: {
                                salary: null

                            }
                        }
                    },
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job3,
                            info: {
                                ...prevState.job3.info,
                                salary: {
                                    salary: null

                                }
                            }
                        },
                    }))
                }
    }
    /// vi du an




    onChangeGender(num) {
        switch (num) {
            case 1:
                if (this.state.currenttextjob.isfemale === true) {
                    if (this.state.currenttextjob.ismale === false) {
                        this.setState(prevState => ({
                            currentjob: {
                                ...prevState.currentjob,
                                require: {
                                    ...prevState.currentjob.require,
                                    genderKey: 0
                                }
                            },
                            currenttextjob: {
                                ...prevState.currenttextjob,
                                ismale: !this.state.currenttextjob.ismale
                            }

                        }))
                        if (this.state.statejob === 1) {
                            this.setState(prevState => ({
                                job1: {
                                    ...prevState.job1,
                                    require: {
                                        ...prevState.job1.require,
                                        genderKey: 0
                                    }
                                },
                            }))
                        } else
                            if (this.state.statejob === 2) {
                                this.setState(prevState => ({
                                    job2: {
                                        ...prevState.job2,
                                        require: {
                                            ...prevState.job2.require,
                                            genderKey: 0
                                        }
                                    },
                                }))
                            }
                            else
                                if (this.state.statejob === 3) {
                                    this.setState(prevState => ({
                                        job3: {
                                            ...prevState.job3,
                                            require: {
                                                ...prevState.job3.require,
                                                genderKey: 0
                                            }
                                        },
                                    }))
                                }
                    }
                    else {
                        this.setState(prevState => ({
                            currentjob: {
                                ...prevState.currentjob,
                                require: {
                                    ...prevState.currentjob.require,
                                    genderKey: 2
                                }
                            },
                            currenttextjob: {
                                ...prevState.currenttextjob,
                                ismale: !this.state.currenttextjob.ismale
                            }

                        }))
                        if (this.state.statejob === 1) {
                            this.setState(prevState => ({
                                job1: {
                                    ...prevState.job1,
                                    require: {
                                        ...prevState.job1.require,
                                        genderKey: 2
                                    }
                                },
                            }))
                        } else
                            if (this.state.statejob === 2) {
                                this.setState(prevState => ({
                                    job2: {
                                        ...prevState.job2,
                                        require: {
                                            ...prevState.job2.require,
                                            genderKey: 2
                                        }
                                    },
                                }))
                            }
                            else
                                if (this.state.statejob === 3) {
                                    this.setState(prevState => ({
                                        job3: {
                                            ...prevState.job3,
                                            require: {
                                                ...prevState.job3.require,
                                                genderKey: 2
                                            }
                                        },
                                    }))
                                }
                    }

                }
                console.log("FF")
                return;
            case 2:
                if (this.state.currenttextjob.ismale === true) {
                    if (this.state.currenttextjob.isfemale === false) {
                        this.setState(prevState => ({
                            currentjob: {
                                ...prevState.currentjob,
                                require: {
                                    ...prevState.currentjob.require,
                                    genderKey: 0
                                }
                            },
                            currenttextjob: {
                                ...prevState.currenttextjob,
                                isfemale: !this.state.currenttextjob.isfemale
                            }
                        }))
                        if (this.state.statejob === 1) {
                            this.setState(prevState => ({
                                job1: {
                                    ...prevState.job1,
                                    require: {
                                        ...prevState.job1.require,
                                        genderKey: 0
                                    }
                                },
                            }))
                        } else
                            if (this.state.statejob === 2) {
                                this.setState(prevState => ({
                                    job2: {
                                        ...prevState.job2,
                                        require: {
                                            ...prevState.job2.require,
                                            genderKey: 0
                                        }
                                    },
                                }))
                            }
                            else
                                if (this.state.statejob === 3) {
                                    this.setState(prevState => ({
                                        job3: {
                                            ...prevState.job3,
                                            require: {
                                                ...prevState.job3.require,
                                                genderKey: 0
                                            }
                                        },
                                    }))
                                }
                    }
                    else {
                        this.setState(prevState => ({
                            currentjob: {
                                ...prevState.currentjob,
                                require: {
                                    ...prevState.currentjob.require,
                                    genderKey: 1
                                }
                            },
                            currenttextjob: {
                                ...prevState.currenttextjob,
                                isfemale: !this.state.currenttextjob.isfemale
                            }
                        }))
                        if (this.state.statejob === 1) {
                            this.setState(prevState => ({
                                job1: {
                                    ...prevState.job1,
                                    require: {
                                        ...prevState.job1.require,
                                        genderKey: 1
                                    }
                                },
                            }))
                        } else
                            if (this.state.statejob === 2) {
                                this.setState(prevState => ({
                                    job2: {
                                        ...prevState.job2,
                                        require: {
                                            ...prevState.job2.require,
                                            genderKey: 1
                                        }
                                    },
                                }))
                            }
                            else
                                if (this.state.statejob === 3) {
                                    this.setState(prevState => ({
                                        job3: {
                                            ...prevState.job3,
                                            require: {
                                                ...prevState.job3.require,
                                                genderKey: 1
                                            }
                                        },
                                    }))
                                }
                    }
                }

                return;

            default:
                return;
        }
    }
    onCancel() {
        Actions.pop();
    }
    onSelectDropdownTypeJob(idx, value) {
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    typeKey: value.key
                }
            }, currenttextjob: {
                ...prevState.currenttextjob,
                typejob: value.name
            }

        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        typeKey: value.key
                    }
                }
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            typeKey: value.key
                        }
                    }
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job3,
                            info: {
                                ...prevState.job3.info,
                                typeKey: value.key
                            }
                        }
                    }))
                }
    }
    renderRowDropdownTypeJob(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 25 }} numberOfLines={1}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    renderRowDropdownExperience(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 25 }} numberOfLines={1}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    onSelectDropdownExperience(idx, value) {
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                require: {
                    ...prevState.currentjob.require,
                    experienceKey: value.key
                }
            }, currenttextjob: {
                ...prevState.currenttextjob,
                experience: value.name
            }

        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    require: {
                        ...prevState.job1.require,
                        experienceKey: value.key
                    }
                }
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        require: {
                            ...prevState.job2.require,
                            experienceKey: value.key
                        }
                    }
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job3,
                            require: {
                                ...prevState.job3.require,
                                experienceKey: value.key
                            }
                        }
                    }))
                }

    }

    renderRowDropdownJob(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 25 }} numberOfLines={1}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    onSelectDropdownJob(idx, value) {



        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    jobKey: value.key
                }
            }, currenttextjob: {
                ...prevState.currenttextjob,
                queryjob: value.name
            }

        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        jobKey: value.key
                    }
                }
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            jobKey: value.key
                        }
                    }
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job3,
                            info: {
                                ...prevState.job3.info,
                                jobKey: value.key
                            }
                        }
                    }))
                }


    }








    onSelectDropdownMajor(idx, value) {
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    majorKey: value.key
                }
            }, currenttextjob: {
                ...prevState.currenttextjob,
                major: value.name
            }

        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        majorKey: value.key
                    }
                }
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            majorKey: value.key
                        }
                    }
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job3,
                            info: {
                                ...prevState.job3.info,
                                majorKey: value.key
                            }
                        }
                    }))
                }

    }
    renderRowDropdownMajor(rowData, rowID, highlighted) {

        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{ width: 170, height: 30, justifyContent: 'flex-end' }}>

                    <Text style={{ textAlign: 'right', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 25 }} numberOfLines={1}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
    ///////////////////////////////
    selectConfirm(list) {
        let arr = this.state.province;
        console.log("load");
        var arraycity = this.state.currentjob.info.address.cityKey;
        for (let item of list) {
            let index = arr.findIndex(ele => ele === item);
            if (~index) {
                //  arr[index].isSelected = true;
                arraycity.push(arr[index].key)
            }
            else continue;
        }
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    address: {
                        ...prevState.currentjob.info.address,
                        cityKey: arraycity
                    }
                }
            },

            //  currenttextjob: {
            //     ...prevState.currenttextjob,
            //     province: arr
            // }

        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        address: {
                            ...prevState.job1.info.address,
                            cityKey: arraycity
                        }
                    }
                }
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            address: {
                                ...prevState.job2.info.address,
                                cityKey: arraycity
                            }
                        }
                    }
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job1,
                            info: {
                                ...prevState.job3.info,
                                address: {
                                    ...prevState.job3.info.address,
                                    cityKey: arraycity
                                }
                            }
                        }
                    }))
                }
        // if (this.state.statejob === 1)
        //     this.setState({ arrcity1: arraycity });
        // else if (this.state.statejob === 2)
        //     this.setState({ arrcity2: arraycity });
        // else if (this.state.statejob === 3)
        //     this.setState({ arrcity3: arraycity });


        setTimeout(() => { console.log("MANG them", this.state.currentjob), 1000 });
    }
    deleteItem(item) {
        let arr = this.state.province;
        console.log("load1");
        var arraycity = this.state.currentjob.info.address.cityKey;
        let index = arr.findIndex(a => a === item);
        arr[index].isSelected = false;
        for (var i = 0; i < arraycity.length; i++) {
            if (arraycity[i] === arr[index].key)
                arraycity.splice(i, 1)
        }
        this.setState(prevState => ({
            currentjob: {
                ...prevState.currentjob,
                info: {
                    ...prevState.currentjob.info,
                    address: {
                        ...prevState.currentjob.info.address,
                        cityKey: arraycity
                    }
                }
            }
            // , currenttextjob: {
            //     ...prevState.currenttextjob,
            //     province: arr
            // }
        }))
        if (this.state.statejob === 1) {
            this.setState(prevState => ({
                job1: {
                    ...prevState.job1,
                    info: {
                        ...prevState.job1.info,
                        address: {
                            ...prevState.job1.info.address,
                            cityKey: arraycity
                        }
                    }
                }
            }))
        } else
            if (this.state.statejob === 2) {
                this.setState(prevState => ({
                    job2: {
                        ...prevState.job2,
                        info: {
                            ...prevState.job2.info,
                            address: {
                                ...prevState.job2.info.address,
                                cityKey: arraycity
                            }
                        }
                    }
                }))
            }
            else
                if (this.state.statejob === 3) {
                    this.setState(prevState => ({
                        job3: {
                            ...prevState.job1,
                            info: {
                                ...prevState.job3.info,
                                address: {
                                    ...prevState.job3.info.address,
                                    cityKey: arraycity
                                }
                            }
                        }
                    }))
                }
        setTimeout(() => { console.log("MANG them", this.state.currentjob), 1000 });
    }

    render() {

        return (
            <Container>
            <Header style={{ backgroundColor: '#60819E' }}>
                <Left >
                    <TouchableOpacity onPress={() => this.goBack()}>
                        <Image resizeMode='stretch' style={styles.imagearrow}
                            source={require('../../images/arrow_icon.png')}

                        />
                    </TouchableOpacity>
                </Left>
                <Body >
                    <Title>Chỉnh sửa </Title>
                </Body>

            </Header>


                <Content style={{ backgroundColor: '#DFDFDF', flex: 1}}>

                    {!this.props.isLoadingDetail ? 

                    <ScrollView style={{ marginBottom: 50 ,marginTop:5  }}>

                        <View fixedLabel style={{
                            flex: 1, marginLeft: 10, marginRight: 10, borderBottomWidth: 0, borderRadius: 4,
                            borderColor: "#2E4053", borderWidth: 1 ,backgroundColor:'white'
                        }} >
                            <Item fixedLabel style={{
                                height: 30, borderWidth: 0.5,
                                borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0,
                            }} >
                                <Image style={styles.icon} source={require('../../images/title_icon.png')} />
                                <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold' ,fontSize:17 }}>Tiêu đề</Text>
                            </Item>
                            <Input
                                font-medium
                                placeholder={"Nhập tiêu đề"}
                                placeholderTextColor='#BEBEBE'
                                multiline={true}
                                style={{ textAlign: 'left', flex: 1, height: 120, fontSize: 15, textAlignVertical: 'top' }}
                                value={this.state.post.title}
                                onChangeText={(text) => {
                                    this.setState(prevState => ({
                                        post: {
                                            ...prevState.post,
                                            title: text
                                        }
                                    }))
                                }}



                            />
                        </View>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <View style={this.state.statejob === 1 ? styles.activejobbackground : styles.inactivejobbackground}>
                                <TouchableOpacity onPress={() => {
                                    this.refs.inputamount.value = this.state.job1.info.amount
                                    this.refs.inputsalary.value = this.state.job1.info.salary.salary === null ? "" : this.state.job1.info.salary.salary
                                    this.refs.inputother.value = this.state.job1.info.salary.other === null ? "" : this.state.job1.info.salary.other
                                    if (this.state.lastindex === 2) {
                                        this.setState(prevState => ({

                                            textjob2: this.state.currenttextjob
                                            , statejob: 1,

                                            currenttextjob: this.state.textjob1,
                                            lastindex: 1,
                                            currentjob: {
                                                ...prevState.currentjob,
                                                info: {
                                                    ...prevState.currentjob.info,
                                                    address:
                                                    {
                                                        ...prevState.currentjob.info.address,
                                                        cityKey: this.state.job1.info.address.cityKey,
                                                        address: this.state.job1.info.address.address
                                                    },
                                                    salary: this.state.job1.info.salary,
                                                    amount: this.state.job1.info.amount,
                                                    jobKey: this.state.job1.info.jobKey,
                                                    majorKey: this.state.job1.info.majorKey,
                                                    typeKey: this.state.job1.info.typeKey

                                                },
                                                require: {
                                                    ...prevState.currentjob.require,
                                                    experienceKey: this.state.job1.require.experienceKey,
                                                    genderKey: this.state.job1.require.genderKey,
                                                    other: this.state.job1.require.other
                                                }
                                            }

                                        }))

                                    }
                                    else if (this.state.lastindex === 3) {
                                        this.setState(prevState => ({

                                            textjob3: this.state.currenttextjob
                                            , statejob: 1,
                                            lastindex: 1,
                                            currenttextjob: this.state.textjob1,
                                            currentjob: {
                                                ...prevState.currentjob,
                                                info: {
                                                    ...prevState.currentjob.info,
                                                    address:
                                                    {
                                                        ...prevState.currentjob.info.address,
                                                        cityKey: this.state.job1.info.address.cityKey,
                                                        address: this.state.job1.info.address.address
                                                    },
                                                    salary: this.state.job1.info.salary,
                                                    amount: this.state.job1.info.amount,
                                                    jobKey: this.state.job1.info.jobKey,
                                                    majorKey: this.state.job1.info.majorKey,
                                                    typeKey: this.state.job1.info.typeKey

                                                },
                                                require: {
                                                    ...prevState.currentjob.require,
                                                    experienceKey: this.state.job1.require.experienceKey,
                                                    genderKey: this.state.job1.require.genderKey,
                                                    other: this.state.job1.require.other
                                                }
                                            }

                                        }))
                                    }
                                }}>
                                    <Text style={this.state.statejob === 1 ? styles.activejobtext : styles.inactivejobtext}>1</Text>
                                </TouchableOpacity>
                            </View>
                            {this.state.numjob >= 2 ?
                                <View style={this.state.statejob === 2 ? styles.activejobbackground : styles.inactivejobbackground}>
                                    <TouchableOpacity onPress={() => {
                                        this.refs.inputamount.value = this.state.job2.info.amount

                                        this.refs.inputsalary.value = this.state.job2.info.salary.salary === null ? "" : this.state.job2.info.salary.salary
                                        this.refs.inputother.value = this.state.job2.info.salary.other === null ? "" : this.state.job2.info.salary.other
                                        if (this.state.lastindex === 1) {
                                            console.log("xuxuxuxu")
                                            this.setState(prevState => ({

                                                textjob1: this.state.currenttextjob
                                                , statejob: 2,

                                                currenttextjob: this.state.textjob2,
                                                lastindex: 2,
                                                currentjob: {
                                                    ...prevState.currentjob,
                                                    info: {
                                                        ...prevState.currentjob.info,
                                                        address:
                                                        {
                                                            ...prevState.currentjob.info.address,
                                                            cityKey: this.state.job2.info.address.cityKey,
                                                            address: this.state.job2.info.address.address
                                                        },
                                                        salary: this.state.job2.info.salary,
                                                        amount: this.state.job2.info.amount,
                                                        jobKey: this.state.job2.info.jobKey,
                                                        majorKey: this.state.job2.info.majorKey,
                                                        typeKey: this.state.job2.info.typeKey

                                                    },
                                                    require: {
                                                        ...prevState.currentjob.require,
                                                        experienceKey: this.state.job2.require.experienceKey,
                                                        genderKey: this.state.job2.require.genderKey,
                                                        other: this.state.job2.require.other
                                                    }
                                                }




                                            }))
                                            setTimeout(() => {
                                                this.setState(prevState => ({







                                                }))
                                            }, 1000)
                                        }
                                        else if (this.state.lastindex === 3) {
                                            this.setState(prevState => ({

                                                textjob3: this.state.currenttextjob
                                                , statejob: 2,
                                                lastindex: 2,
                                                currenttextjob: this.state.textjob2,
                                                currentjob: {
                                                    ...prevState.currentjob,
                                                    info: {
                                                        ...prevState.currentjob.info,
                                                        address:
                                                        {
                                                            ...prevState.currentjob.info.address,
                                                            cityKey: this.state.job2.info.address.cityKey,
                                                            address: this.state.job2.info.address.address
                                                        },
                                                        salary: this.state.job2.info.salary,
                                                        amount: this.state.job2.info.amount,
                                                        jobKey: this.state.job2.info.jobKey,
                                                        majorKey: this.state.job2.info.majorKey,
                                                        typeKey: this.state.job2.info.typeKey

                                                    },
                                                    require: {
                                                        ...prevState.currentjob.require,
                                                        experienceKey: this.state.job2.require.experienceKey,
                                                        genderKey: this.state.job2.require.genderKey,
                                                        other: this.state.job2.require.other
                                                    }
                                                }

                                            }))
                                        }


                                    }}>
                                        <Text style={this.state.statejob === 2 ? styles.activejobtext : styles.inactivejobtext}>2</Text>
                                    </TouchableOpacity>
                                </View> :
                                null
                            }
                            {this.state.numjob >= 3 ?
                                <View style={this.state.statejob === 3 ? styles.activejobbackground : styles.inactivejobbackground}>
                                    <TouchableOpacity onPress={() => {
                                        this.refs.inputamount.value = this.state.job3.info.amount
                                        this.refs.inputsalary.value = this.state.job3.info.salary.salary === null ? "" : this.state.job3.info.salary.salary
                                        this.refs.inputother.value = this.state.job3.info.salary.other === null ? "" : this.state.job3.info.salary.other
                                        if (this.state.lastindex === 1) {
                                            this.setState(prevState => ({

                                                textjob1: this.state.currenttextjob
                                                , statejob: 3,


                                                currenttextjob: this.state.textjob3, lastindex: 3,
                                                currentjob: {
                                                    ...prevState.currentjob,
                                                    info: {
                                                        ...prevState.currentjob.info,
                                                        address:
                                                        {
                                                            ...prevState.currentjob.info.address,
                                                            cityKey: this.state.job3.info.address.cityKey,
                                                            address: this.state.job3.info.address.address
                                                        },
                                                        salary: this.state.job3.info.salary,
                                                        amount: this.state.job3.info.amount,
                                                        jobKey: this.state.job3.info.jobKey,
                                                        majorKey: this.state.job3.info.majorKey,
                                                        typeKey: this.state.job3.info.typeKey

                                                    },
                                                    require: {
                                                        ...prevState.currentjob.require,
                                                        experienceKey: this.state.job3.require.experienceKey,
                                                        genderKey: this.state.job3.require.genderKey,
                                                        other: this.state.job3.require.other
                                                    }
                                                }

                                            }))
                                        }
                                        else if (this.state.lastindex === 2) {
                                            this.setState(prevState => ({

                                                textjob2: this.state.currenttextjob
                                                , statejob: 3,

                                                currenttextjob: this.state.textjob3, lastindex: 3,
                                                currentjob: {
                                                    ...prevState.currentjob,
                                                    info: {
                                                        ...prevState.currentjob.info,
                                                        address:
                                                        {
                                                            ...prevState.currentjob.info.address,
                                                            cityKey: this.state.job3.info.address.cityKey,
                                                            address: this.state.job3.info.address.address
                                                        },
                                                        salary: this.state.job3.info.salary,
                                                        amount: this.state.job3.info.amount,
                                                        jobKey: this.state.job3.info.jobKey,
                                                        majorKey: this.state.job3.info.majorKey,
                                                        typeKey: this.state.job3.info.typeKey

                                                    },
                                                    require: {
                                                        ...prevState.currentjob.require,
                                                        experienceKey: this.state.job3.require.experienceKey,
                                                        genderKey: this.state.job3.require.genderKey,
                                                        other: this.state.job3.require.other
                                                    }
                                                }

                                            }))
                                        }
                                    }}>
                                        <Text style={this.state.statejob === 3 ? styles.activejobtext : styles.inactivejobtext}>3</Text>
                                    </TouchableOpacity>
                                </View> :
                                null
                            }
                            {this.state.numjob !== 1 ?
                                <View style={{ width: 30, height: 30, position: "absolute", right: 40 }}>
                                    <TouchableOpacity onPress={() => {
                                        if (this.state.statejob === 1) {

                                            this.setState({
                                                numjob: this.state.numjob - 1,
                                                currentjob: this.state.job2,
                                                currenttextjob: this.state.textjob2,
                                                textjob1: this.textjob2,
                                                job1: this.state.job2,
                                                textjob2: this.state.numjob === 3 ? this.state.textjob3 : this.state.textjob,
                                                job2: this.state.numjob === 3 ? this.state.job3 : this.state.job,
                                                lastindex: 1,
                                                statejob: 1
                                            })
                                        } else if (this.state.statejob === 2) {
                                            this.setState({
                                                numjob: this.state.numjob - 1,
                                                currentjob: this.state.numjob === 3 ? this.state.job3 : this.state.job1,
                                                currenttextjob: this.state.numjob === 3 ? this.state.textjob3 : this.state.textjob1,
                                                textjob2: this.state.numjob === 3 ? this.state.textjob3 : this.state.textjob3,
                                                job2: this.state.numjob === 3 ? this.state.job3 : this.state.job,
                                                lastindex: this.state.numjob === 3 ? 2 : 1,
                                                statejob: this.state.numjob === 3 ? 2 : 1

                                            })
                                        } else {
                                            this.setState({
                                                numjob: this.state.numjob - 1,

                                                currenttextjob: this.state.textjob2,
                                                currentjob: this.state.job2,
                                                statejob: 2,
                                                lastindex: 2


                                            })
                                        }
                                    }}>
                                        <Image style={{ width: 28, height: 28 }} source={require('../../images/delete_icon.png')} ></Image>
                                    </TouchableOpacity>
                                </View> : null

                            }
                            <View style={{ width: 30, height: 30, position: "absolute", right: 3 }}>
                                <TouchableOpacity onPress={() => {
                                    if (this.state.numjob === 3) {
                                        alert("Bạn chỉ tối đa tạo được 3 công việc")
                                    } else {
                                        if (this.state.numjob === 1) {
                                            this.setState(prevState => ({
                                                numjob: this.state.numjob + 1,
                                                job2: this.state.job,
                                                job2: {
                                                    ...prevState.job2,
                                                    info: {
                                                        ...prevState.job2.info,
                                                        address:
                                                        {
                                                            ...prevState.job2.info.address,
                                                            cityKey: [],
                                                        }
                                                    }

                                                },
                                                textjob2: this.state.textjob,
                                            }))
                                        } else {
                                            this.setState(prevState => ({
                                                numjob: this.state.numjob + 1,
                                                job3: this.state.job,
                                                job3: {
                                                    ...prevState.job3,
                                                    info: {
                                                        ...prevState.job3.info,
                                                        address:
                                                        {
                                                            ...prevState.job3.info.address,
                                                            cityKey: [],
                                                        }
                                                    }

                                                },
                                                textjob3: this.state.textjob,
                                            }))
                                        }
                                    }}
                                }>
                                    <Image style={{ width: 28, height: 28 }} source={require('../../images/plus_icon.png')} ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Công việc 1 */}
                        < View >
                            <View fixedLabel style={{
                                flex: 1, marginLeft: 10, marginRight: 10, borderBottomWidth: 0, borderRadius: 4,
                                borderColor: "#2E4053", borderWidth: 1, backgroundColor:'white'
                            }} >
                                <Item fixedLabel style={{
                                    height: 30, borderWidth: 0.5,
                                    borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0,
                                }} >
                                    <Image style={styles.icon} source={require('../../images/info_icon.png')} />
                                    <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold',fontSize:17 }}>Thông tin</Text>
                                </Item>

                                <Item fixedLabel style={{
                                    height: 40,
                                    borderBottomColor: "#60819E",
                                    borderBottomWidth: 0.5, marginLeft: 5, marginRight: 5
                                }} >
                                    <Text font-medium style={{ width: 90, fontSize: 15, marginLeft: 5,fontStyle:'italic' }} >Công Việc *:</Text>
                                    <ModalDropdown ref='modeldropdown'
                                        style={{ flex: 1, marginLeft: 25 }}
                                        options={this.state.datajob}

                                        //defaultValue={this.state.city}
                                        onSelect={(idx, value) => this.onSelectDropdownJob(idx, value)}

                                        renderRow={this.renderRowDropdownJob.bind(this)}

                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Input ref='textinput'
                                                font-medium
                                                placeholder={"Nhập kí tự để tìm kiếm"}
                                                placeholderTextColor='#BEBEBE'
                                                onChangeText={(text) => {
                                                    this.setState(prevState => ({
                                                        currenttextjob: {
                                                            ...prevState.currenttextjob,
                                                            queryjob: text
                                                        }


                                                    }))
                                                }}
                                                //autoFocus = {true}
                                                style={{ textAlign: 'right', flex: 1, fontSize: 15 }}
                                                value={this.state.currenttextjob.queryjob}

                                            />
                                        </View>
                                    </ModalDropdown>
                                    <TouchableOpacity onPress={this.onChangeJob}>
                                        <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/search_icon.png')} />
                                    </TouchableOpacity>

                                </Item>




                                <Item fixedLabel style={{
                                    height: 40,
                                    borderBottomColor: "#60819E",
                                    borderBottomWidth: 0.5, marginLeft: 5, marginRight: 5
                                }} >
                                    <Text font-medium style={{ width: 90, fontSize: 15, marginLeft: 5,fontStyle:'italic' }} >Ngành *:</Text>
                                    <ModalDropdown style={{ flex: 1, marginLeft: 40, marginRight: 5 }}
                                        options={this.props.listmajor}
                                        //defaultValue={this.state.city}
                                        onSelect={(idx, value) => this.onSelectDropdownMajor(idx, value)}

                                        renderRow={this.renderRowDropdownMajor.bind(this)}

                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text  font-medium style={{ textAlign: 'left', fontSize: 15 ,color:'black' }}>{this.state.currenttextjob.major}</Text>
                                            <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                        </View>
                                    </ModalDropdown>

                                </Item>

                                {console.log("NOOOOOOO", this.state.currenttextjob)}
                                <Item style={{
                                    height: 40,
                                    borderBottomColor: "#60819E",
                                    borderBottomWidth: 0.5, marginLeft: 5, marginRight: 5
                                }}>
                                    <Text font-medium style={{ width: 90, fontSize: 15, marginLeft: 5 ,fontStyle:'italic'}}>Số lượng*:</Text>
                                   
                                    <Input ref='inputamount'
                                        placeholderTextColor='#BEBEBE'
                                        font-medium
                                        value={this.state.currenttextjob.amount}
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            this.setState(prevState => ({
                                                currentjob: {
                                                    ...prevState.currentjob,
                                                    info: {
                                                        ...prevState.currentjob.info,
                                                        amount: Number(text)
                                                    }
                                                }, currenttextjob: {
                                                    ...prevState.currenttextjob,
                                                    amount: text
                                                }
                                            }))
                                            if (this.state.statejob === 1) {
                                                this.setState(prevState => ({
                                                    job1: {
                                                        ...prevState.job1,
                                                        info: {
                                                            ...prevState.job1.info,
                                                            amount: Number(text)
                                                        }
                                                    }
                                                }))
                                            } else
                                                if (this.state.statejob === 2) {
                                                    this.setState(prevState => ({
                                                        job2: {
                                                            ...prevState.job2,
                                                            info: {
                                                                ...prevState.job2.info,
                                                                amount: Number(text)
                                                            }
                                                        }
                                                    }))
                                                }
                                                else
                                                    if (this.state.statejob === 3) {
                                                        this.setState(prevState => ({
                                                            job3: {
                                                                ...prevState.job3,
                                                                info: {
                                                                    ...prevState.job3.info,
                                                                    amount: Number(text)
                                                                }
                                                            }
                                                        }))
                                                    }
                                        }}
                                        style={{
                                            marginLeft: 5,
                                            textAlign: 'right', flex: 1,color:'black'

                                        }}
                                    />
                                </Item>

                                <Item fixedLabel style={{
                                    height: 40,
                                    borderBottomColor: "#60819E",
                                    borderBottomWidth: 0.5, marginLeft: 5, marginRight: 5
                                }} >
                                    <Text font-medium style={{ width: 90, fontSize: 15, marginLeft: 5,fontStyle:'italic' }} >Hình Thức *:</Text>
                                    <ModalDropdown style={{ flex: 1, marginLeft: 40, marginRight: 5 }}
                                        options={this.props.listtypejob}
                                        //defaultValue={this.state.city}
                                        onSelect={(idx, value) => this.onSelectDropdownTypeJob(idx, value)}

                                        renderRow={this.renderRowDropdownTypeJob.bind(this)}

                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text  font-medium style={{ textAlign: 'left' , fontSize:15,color:'black' }}>{this.state.currenttextjob.typejob}</Text>
                                            <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                        </View>
                                    </ModalDropdown>

                                </Item>



                                <View style={styles.containeritem1}>

                                    <Text font-medium style={{ flex: 1, marginLeft: 5, paddingTop: 5, fontSize: 15,fontStyle:'italic' }} >Mức lương:</Text>
                                    <View style={{ flex: 3 }}>


                                        <Item fixedLabel style={{ borderBottomWidth: 0.5, borderBottomColor: '#BEBEBE', height: 35 }}>
                                            <CheckBox onClick={this.onSetSalary}
                                                isChecked={this.state.currenttextjob.salary}
                                                checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 30, width: 30 }} />}
                                                unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 30, width: 30 }} />}
                                            />


                                            <Input ref='inputsalary'
                                                font-medium
                                                placeholder={"Nhập mức lương"}
                                                placeholderTextColor='#BEBEBE'
                                                keyboardType="numeric"
                                                value={this.state.currenttextjob.textsalary}
                                                onChangeText={(text) => {
                                                    this.setState(prevState => ({
                                                        currentjob: {
                                                            ...prevState.currentjob,
                                                            info: {
                                                                ...prevState.currentjob.info,
                                                                salary: {
                                                                    ...prevState.currentjob.info.salary,
                                                                    salary: Number(text),
                                                                    other: null


                                                                }
                                                            }
                                                        },
                                                        currenttextjob: {
                                                            ...prevState.currenttextjob,
                                                            textsalary: text
                                                        }
                                                    }

                                                    ))
                                                    if (this.state.statejob === 1) {
                                                        this.setState(prevState => ({
                                                            job1: {
                                                                ...prevState.job1,
                                                                info: {
                                                                    ...prevState.job1.info,
                                                                    salary: {
                                                                        ...prevState.job1.info.salary,
                                                                        salary: Number(text),
                                                                        other: null


                                                                    }
                                                                }
                                                            }
                                                        }))
                                                    } else
                                                        if (this.state.statejob === 2) {
                                                            this.setState(prevState => ({
                                                                job2: {
                                                                    ...prevState.job2,
                                                                    info: {
                                                                        ...prevState.job2.info,
                                                                        salary: {
                                                                            ...prevState.job2.info.salary,
                                                                            salary: Number(text),
                                                                            other: null


                                                                        }
                                                                    }
                                                                }
                                                            }))
                                                        }
                                                        else
                                                            if (this.state.statejob === 3) {
                                                                this.setState(prevState => ({
                                                                    job3: {
                                                                        ...prevState.job3,
                                                                        info: {
                                                                            ...prevState.job3.info,
                                                                            salary: {
                                                                                ...prevState.job3.info.salary,
                                                                                salary: Number(text),
                                                                                other: null


                                                                            }
                                                                        }
                                                                    }
                                                                }))
                                                            }

                                                }}
                                                onFocus={() => {
                                                    this.setState(prevState => ({
                                                        currenttextjob: {
                                                            ...prevState.currenttextjob,
                                                            salary: true
                                                        }
                                                    }))
                                                }}
                                                style={{
                                                    fontSize: 15, flex: 1,
                                                    color:'black',

                                                    textAlign: 'left',
                                                }}
                                            />
                                        </Item>


                                        <Item fixedLabel style={{ height: 35, borderWidth: 0 }}>
                                            <CheckBox onClick={this.onSetOtherSalary}
                                                isChecked={!this.state.currenttextjob.salary}
                                                checkedImage={<Image source={require('../../images/check_mark.png')} style={{ height: 30, width: 30 }} />}
                                                unCheckedImage={<Image source={require('../../images/check_empty.png')} style={{ height: 30, width: 30 }} />}
                                            />


                                            <Input ref='inputother'
                                                placeholder={"ex: Thương lượng ,..."}
                                                placeholderTextColor='#BEBEBE'
                                                font-medium   
                                                value={this.state.currenttextjob.textother}
                                                onChangeText={(text) => {
                                                    this.setState(prevState => ({
                                                        currentjob: {
                                                            ...prevState.currentjob,
                                                            info: {
                                                                ...prevState.currentjob.info,
                                                                salary: {
                                                                    ...prevState.currentjob.info.salary,
                                                                    salary: null,
                                                                    other: text,


                                                                }
                                                            }
                                                        },
                                                        currenttextjob: {
                                                            ...prevState.currenttextjob,
                                                            textother: text
                                                        }
                                                    }))
                                                    if (this.state.statejob === 1) {
                                                        this.setState(prevState => ({
                                                            job1: {
                                                                ...prevState.job1,
                                                                info: {
                                                                    ...prevState.job1.info,
                                                                    salary: {
                                                                        ...prevState.job1.info.salary,
                                                                        salary: null,
                                                                        other: text,


                                                                    }
                                                                }
                                                            }
                                                        }))
                                                    } else
                                                        if (this.state.statejob === 2) {
                                                            this.setState(prevState => ({
                                                                job2: {
                                                                    ...prevState.job2,
                                                                    info: {
                                                                        ...prevState.job2.info,
                                                                        salary: {
                                                                            ...prevState.job2.info.salary,
                                                                            salary: null,
                                                                            other: text,


                                                                        }
                                                                    }
                                                                }
                                                            }))
                                                        }
                                                        else
                                                            if (this.state.statejob === 3) {
                                                                this.setState(prevState => ({
                                                                    job3: {
                                                                        ...prevState.job3,
                                                                        info: {
                                                                            ...prevState.job3.info,
                                                                            salary: {
                                                                                ...prevState.job3.info.salary,
                                                                                salary: null,
                                                                                other: text,


                                                                            }
                                                                        }
                                                                    }
                                                                }))
                                                            }
                                                }}
                                                onFocus={() => {
                                                    this.setState(prevState => ({
                                                        currenttextjob: {
                                                            ...prevState.currenttextjob,
                                                            salary: false
                                                        }
                                                    }))
                                                }}
                                                style={{
                                                    fontSize: 15, flex: 1,color:'black',

                                                    textAlign: 'left',
                                                }}
                                            />
                                        </Item>

                                    </View>

                                </View>
                                <View style={{
                                    marginLeft: 5, flex: 1,
                                    flexDirection: 'row'
                                }}>

                                    <Text font-medium style={{ marginLeft: 5, fontSize: 15, marginTop: 10,fontStyle:'italic' }} >Địa điểm:</Text>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ height: 43 }}>
                                            <Input
                                                 font-medium
                                                placeholder={"Nhập địa điểm làm việc"}
                                                placeholderTextColor='#BEBEBE'
                                                value={this.state.currentjob.info.address.address}
                                                onChangeText={(text) => {
                                                    this.setState(prevState => ({
                                                        currentjob: {
                                                            ...prevState.currentjob,
                                                            info: {
                                                                ...prevState.currentjob.info,
                                                                address: {
                                                                    ...prevState.currentjob.info.address,
                                                                    address: text,


                                                                }
                                                            }
                                                        }
                                                    }))
                                                    if (this.state.statejob === 1) {
                                                        this.setState(prevState => ({
                                                            job1: {
                                                                ...prevState.job1,
                                                                info: {
                                                                    ...prevState.job1.info,
                                                                    address: {
                                                                        ...prevState.job1.info.address,
                                                                        address: text,
    
    
                                                                    }
                                                                }
                                                            }
                                                        }))
                                                    } else
                                                        if (this.state.statejob === 2) {
                                                            this.setState(prevState => ({
                                                                job2: {
                                                                    ...prevState.job2,
                                                                    info: {
                                                                        ...prevState.job2.info,
                                                                        address: {
                                                                            ...prevState.job2.info.address,
                                                                            address: text,
        
        
                                                                        }
                                                                    }
                                                                }
                                                            }))
                                                        }
                                                        else
                                                            if (this.state.statejob === 3) {
                                                                this.setState(prevState => ({
                                                                    job3: {
                                                                        ...prevState.job3,
                                                                        info: {
                                                                            ...prevState.job3.info,
                                                                            address: {
                                                                                ...prevState.job3.info.address,
                                                                                address: text,
            
            
                                                                            }
                                                                        }
                                                                    }
                                                                }))
                                                            }
                                                }}
                                                style={{
                                                    fontSize: 15,color:'black',

                                                    flex: 1,

                                                    textAlign: 'left'
                                                }}
                                            />
                                        </View>

                                        <LabelSelect
                                            title="Tỉnh/Thành Phố"
                                            ref="select"
                                            style={{ marginBottom: 5 }}

                                            onConfirm={this.selectConfirm}
                                        >
                                            {this.state.province.filter(item => this.state.currentjob.info.address.cityKey.indexOf(item.key) >= 0).map((item, index) =>
                                                <LabelSelect.Label
                                                    key={'label-' + index}
                                                    data={item}
                                                    onCancel={() => { this.deleteItem(item); }}
                                                >{item.name}</LabelSelect.Label>
                                            )}
                                            {this.state.province.filter(item => this.state.currentjob.info.address.cityKey.indexOf(item.key) < 0).map((item, index) =>
                                                <LabelSelect.ModalItem
                                                    key={'modal-item-' + index}
                                                    data={item}
                                                >{item.name}</LabelSelect.ModalItem>
                                            )}
                                        </LabelSelect>
                                    </View>




                                </View>

                            </View>
                            <View fixedLabel style={{
                                flex: 1, margin: 10, borderBottomWidth: 0, borderRadius: 4,
                                borderColor: "#2E4053", borderWidth: 1,backgroundColor:'white'
                            }} >
                                <Item fixedLabel style={{
                                    height: 30, borderWidth: 0.5,
                                    borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0,
                                }} >
                                    <Image style={styles.icon} source={require('../../images/require_icon.png')} />
                                    <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold' , fontSize:17 }}>Yêu Cầu</Text>


                                </Item>

                                <Item fixedLabel style={{ borderBottomWidth: 0.5, borderColor: '#60819E', marginLeft: 5, marginRight: 5, height: 40 }} >
                                    <Text font-medium style={{ width: 100, marginLeft: 5, fontSize: 15 ,fontStyle:'italic'}} >Kinh nghiệm *:</Text>
                                    <ModalDropdown style={{ flex: 1, marginLeft: 40, marginRight: 5 }}
                                        options={this.props.listexperience}
                                        //defaultValue={this.state.city}
                                        onSelect={(idx, value) => this.onSelectDropdownExperience(idx, value)}

                                        renderRow={this.renderRowDropdownExperience.bind(this)}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text  font-medium style={{ textAlign: 'right',fontSize:15,color:'black' }}>{this.state.currenttextjob.experience}</Text>
                                            <Image style={{ height: 18, width: 18, marginLeft: 5, marginTop: 2 }} source={require('../../images/caret-down.png')} />
                                        </View>
                                    </ModalDropdown>

                                </Item>




                                <Item fixedLabel style={{
                                    height: 40,
                                    borderBottomColor: "#60819E",
                                    borderBottomWidth: 0.5, marginLeft: 5, marginRight: 5
                                }} >
                                    <Text font-medium style={{ marginLeft: 5, fontSize: 15 ,fontStyle:'italic'}} >Giới tính:</Text>

                                    <CheckBox
                                        style={{ marginLeft: 70 }}
                                        onClick={() => this.onChangeGender(t1)}
                                        isChecked={this.state.currenttextjob.ismale}
                                    />
                                    <Text font-medium style={{ color: '#60819E', marginLeft: 5 }} >Nam</Text>
                                    <CheckBox
                                        style={{ marginLeft: 50 }}
                                        onClick={() => this.onChangeGender(t2)}
                                        isChecked={this.state.currenttextjob.isfemale}
                                    />
                                    <Text font-medium style={{ color: '#60819E', marginLeft: 5 }}>Nữ</Text>

                                </Item>



                                <Item style={{
                                    marginLeft: 5, alignItems: 'center', height: 80, marginRight: 5,

                                    flexDirection: 'row', borderBottomWidth: 0
                                }}>
                                    <Text font-medium style={{ width: 100, fontSize: 15, marginLeft: 5, textAlignVertical: 'top' ,fontStyle:'italic'}}>Yêu cầu khác:</Text>
                                    <Input
                                         font-medium
                                        placeholderTextColor='#BEBEBE'
                                        multiline={true}
                                        style={{ textAlign: 'left', flex: 1, fontSize: 15, height: 80 }}
                                        value={this.state.currentjob.require.other}
                                        onChangeText={(text) => {
                                            this.setState(prevState => ({
                                                currentjob: {
                                                    ...prevState.currentjob,
                                                    require: {
                                                        ...prevState.currentjob.require,
                                                        other: text
                                                    }
                                                }
                                            }))
                                        }}

                                    />
                                </Item>

                            </View>
                        </View>






                        <View fixedLabel style={{
                            flex: 1, marginLeft: 10,marginRight: 10,marginBottom: 10, borderBottomWidth: 0, borderRadius: 4,
                            borderColor: "#2E4053", borderWidth: 1, backgroundColor:'white'
                        }} >
                            <Item fixedLabel style={{
                                height: 30, borderWidth: 0.5,
                                borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0,
                            }} >
                                <Image style={styles.icon} source={require('../../images/detail_icon.png')} />
                                <Text font-medium style={{ color: '#2E4053', marginLeft: 5, fontWeight: 'bold' ,fontSize:17 }}>Chi tiết</Text>
                            </Item>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                marginLeft: 5, marginRight: 5, height: 100,
                                borderBottomColor: "#60819E",
                                borderBottomWidth: 0.5
                            }}>
                                <Text  font-medium style={{ width: 90, marginLeft: 5, fontSize: 15, height: 120, textAlignVertical: 'top', paddingTop: 10 ,fontStyle:'italic' }}>Chi tiết :</Text>
                                <Input
                                    font-medium
                                    placeholder={"Chi tiết công việc"}
                                    placeholderTextColor='#BEBEBE'
                                    multiline={true}
                                    style={{ textAlign: 'left', flex: 1, height: 120, fontSize: 15, textAlignVertical: 'top' }}
                                    value={this.state.post.detail}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            post: {
                                                ...prevState.post,
                                                detail: text
                                            }
                                        }))
                                    }}
                                // value={user.company.name}

                                />
                            </View>

                            <Item fixedLabel style={{
                                height: 40,
                                borderBottomColor: "#60819E",
                                borderBottomWidth: 0.5, marginLeft: 5, marginRight: 5
                            }} >
                                <Text  font-medium style={{ width: 140, marginLeft: 5 ,fontSize:15,fontStyle:'italic' }}>Hạn nộp hồ sơ:</Text>
                                <View style={{ flex: 1 }}>
                                    <DatePicker
                                         font-medium
                                        style={{ alignSelf: 'flex-end' }}
                                        date={this.state.post.deadline}
                                        mode="date"
                                        placeholder={"Chọn ngày "}
                                        format="DD-MM-YYYY"
                                        confirmBtnText={"Chọn"}
                                        cancelBtnText={"Hủy bỏ"}
                                        onDateChange={(date) => this.setState(prevState => ({
                                            post: {
                                                ...prevState.post,
                                                deadline: date
                                            }
                                        }))}
                                        showIcon={false}
                                        customStyles={{
                                            dateText: { color: "#60819E", fontSize: 15, fontWeight: 'bold', textAlign: 'right' },
                                        }}
                                    />
                                </View>

                            </Item>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                marginLeft: 5, marginRight: 5, height: 100,
                                borderBottomColor: "#2E4053",
                                borderBottomWidth: 1
                            }}>
                                <Text  font-medium style={{ width: 90, marginLeft: 5, fontSize: 15, height: 120, textAlignVertical: 'top', paddingTop: 10 ,fontStyle:'italic'}}>Thông tin liên hệ*:</Text>
                                <Input
                                    font-medium
                                    placeholder={"Nhập thông tin liên hệ"}
                                    placeholderTextColor='#BEBEBE'
                                    multiline={true}
                                    style={{ textAlign: 'left', flex: 1, height: 120, fontSize: 15, textAlignVertical: 'top' ,color:'black'}}
                                    value={this.state.post.contact}
                                    onChangeText={(text) => {
                                        this.setState(prevState => ({
                                            post: {
                                                ...prevState.post,
                                                contact: text
                                            }
                                        }))
                                    }}

                                />
                            </View>











                        </View>


                        <View style={{ margin: 5 }}>
                            <TouchableOpacity onPress={
                             this.onSubmitUpdate
                               
                            }  >
                                <View style={{ height: 40, width: width - (40 - 20), borderRadius: 20, zIndex: 100, backgroundColor: '#60819E', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1, margin: 5 }}>
                                    <Text style={{ color: 'white', fontSize:15 }}>
                                    Lưu
                                        
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                    </ScrollView>
                     :
                            
                     <View style={{ height: HEIGHT - 150, alignItems: 'center', justifyContent: 'center' }}>
                         <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                     </View>
                 }



                </Content>
            </Container >
        )
    }
    componentDidMount() {

    }


}


const styles = StyleSheet.create({
    containeritem: {
        // flex: 0.5,
        height: 35,

        borderBottomColor: "#60819E",
        borderBottomWidth: 0.5,
        margin: 5,
        justifyContent: 'center',
    },
    imagearrow: {
        height: 30,
        width: 30,
    },
    activejobtext: {
        color: "white", fontSize: 18, textAlign: 'center', fontWeight: 'bold'
    },
    inactivejobtext: {
        color: "#2E4053", fontSize: 18, textAlign: 'center', fontWeight: 'bold'
    },
    activejobbackground: {
        width: 28, height: 28, borderColor: "#2E4053", borderWidth: 1.5, marginLeft: 5, marginRight: 5, borderRadius: 3,
        backgroundColor: "#2E4053"
    },
    inactivejobbackground: {
        width: 28, height: 28, borderColor: "#2E4053", borderWidth: 1.5, marginLeft: 5, marginRight: 5, borderRadius: 3,
        backgroundColor: "white"
    },
    containeritem1: {

        height: 75,

        borderBottomColor: "#60819E",
        borderBottomWidth: 0.5,
        margin: 5,
        flexDirection: 'row'
    },
    container2: {

        flex: 1,
        flexDirection: 'row',

    },
    itemstyle: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 36,
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,

    },
    containerregis: {

        height: 50,
        marginLeft: 5,
        marginTop: 20,
        marginRight: 5,

        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container1: {
        height: 280,
        backgroundColor: 'white',
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
    icon: {
        marginLeft: 5,
        width: 20
        , height: 20

    },
    wrapper: {
    },

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
export default DetailPost;