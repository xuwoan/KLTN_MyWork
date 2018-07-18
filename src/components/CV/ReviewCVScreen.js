
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity,
    StyleSheet, ListView
} from 'react-native';
// import { connect } from 'react-redux';
import {
    Header, Title,
    Container,
    Body, Item, ListItem, Row, Col,
    Input, Button, Content, Card, CardItem,
    Icon, Left, Right
} from "native-base";
import { Actions } from 'react-native-router-flux';
import AppConstants from '../../constants/application.constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-accordion';


import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const WIDTH = Dimensions.get('window').width;
export default class ReviewCV extends Component {


    goBack() {
        if(this.props.detail===1)
        {
            Actions.pop({ refresh: { showAgain: true } })
        }
        else
        Actions.pop()
    }

    renderEducation(rowData, rowID, that) {
        return (
            <View style={{ marginLeft: 15 }}>
                <View style={styles.educationstyle1}>
                    <Text style={styles.educationtext1}>{rowData.place}</Text>
                    <Text style={styles.educationtext2}>{rowData.startYear}</Text>
                    <Text style={styles.educationtext2}> -</Text>
                    <Text style={styles.educationtext2}>{rowData.endYear}</Text>
                </View>
                <Item style={{ borderWidth: 0 }}>
                    <Text style={styles.educationtext3}>Học vị : </Text>
                    <Text style={styles.educationtext3}>{rowData.degree}</Text>
                </Item>
                <Item style={{ borderWidth: 0 }}>
                    <Text style={styles.educationtext3}>Ngành : </Text>
                    <Text style={styles.educationtext3}>{rowData.department}</Text>
                </Item>
            </View>
        );
    }
    renderExperience(rowData, rowID, that) {
        return (
            <View style={{ marginLeft: 15 }}>
                <View style={styles.educationstyle1}>
                    <Text style={styles.educationtext1}>{rowData.place}</Text>
                    <Text style={styles.educationtext2}>{rowData.startYear}</Text>
                    <Text style={styles.educationtext2}> -</Text>
                    <Text style={styles.educationtext2}>{rowData.endYear}</Text>
                </View>
                <Item style={{ borderWidth: 0 }}>
                    <Text style={styles.educationtext3}>Vị Trí : </Text>
                    <Text style={styles.educationtext3}>{rowData.rank}</Text>
                </Item>

            </View>
        );
    }
    renderSkill(rowData, rowID, that) {
        return (
            <View style={{ marginLeft: 15, marginBottom: 3 }}>

                <Item style={{ borderWidth: 0 }}>

                    <Text style={styles.skilltext1}>{rowData.name}</Text>
                    {rowData.rate >= 1 ? <Image resizeMode='stretch' style={{ height: 20, width: 20, marginLeft: 3 }} source={require('../../images/en_rate_icon.png')} /> : null}
                    {rowData.rate >= 2 ? <Image resizeMode='stretch' style={{ height: 20, width: 20, marginLeft: 3 }} source={require('../../images/en_rate_icon.png')} /> : null}
                    {rowData.rate >= 3 ? <Image resizeMode='stretch' style={{ height: 20, width: 20, marginLeft: 3 }} source={require('../../images/en_rate_icon.png')} /> : null}
                    {rowData.rate >= 4 ? <Image resizeMode='stretch' style={{ height: 20, width: 20, marginLeft: 3 }} source={require('../../images/en_rate_icon.png')} /> : null}
                    {rowData.rate >= 5 ? <Image resizeMode='stretch' style={{ height: 20, width: 20, marginLeft: 3 }} source={require('../../images/en_rate_icon.png')} /> : null}
                </Item>

            </View>
        );
    }
    renderCertificate(rowData, rowID, that) {
        return (
            <View style={{ marginLeft: 15, marginBottom: 3 }}>

                <Item style={{ borderWidth: 0 }}>

                    <Text style={styles.certificatetext1}>{rowData.name}<Text style={styles.certificatetext2}>{"( " + rowData.year + " )"}</Text></Text>

                </Item>

            </View>
        );
    }

    render() {
        console.log(this.props.news)
        return (
            <Container>
                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => {
                             if(this.props.detail===1)
                             {
                                 Actions.pop({ refresh: { showAgain: true } })
                             }
                             else
                             Actions.pop()
                        }}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/arrow_icon.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title></Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                {console.log("AA", this.props.detailcv)}
                <Content style={{ backgroundColor: 'white' }}>
                    {

                        this.props.detailcv.resume !== undefined ?

                            <View>

                                <View style={styles.profilepartstyle}>
                                    <TouchableOpacity style={{ marginTop: 20,marginLeft:5 }}>
                                        <Image source={{ uri: AppConstants.URL + this.props.detailcv.image }} style={styles.imageavatarstyle} />
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 5, marginRight: 5 }} >
                                        <Text style={styles.textnamestyle} numberOfLines={2}>{this.props.detailcv.resume.profile.name} </Text>
                                        <View style={{ marginLeft: 50 }}>
                                            <Item style={{ borderWidth: 0, marginBottom: 3 }}>
                                                <Image resizeMode='stretch' style={styles.icon} source={require('../../images/birthday_icon.png')} />
                                                <Text style={styles.textprofilestyle}>{this.props.detailcv.resume.profile.birthday}</Text>
                                            </Item>
                                            <Item style={{ borderWidth: 0, marginBottom: 3 }}>
                                                <Image resizeMode='stretch' style={styles.icon} source={require('../../images/phone_icon.png')} />
                                                <Text style={styles.textprofilestyle}>{this.props.detailcv.resume.profile.phone}</Text>
                                            </Item>
                                            <Item style={{ borderWidth: 0, marginBottom: 3 }}>
                                                <Image resizeMode='stretch' style={styles.icon} source={require('../../images/email_icon.png')} />
                                                <Text style={styles.textprofilestyle}>{this.props.detailcv.resume.profile.email}</Text>
                                            </Item>
                                            <Item style={{ borderWidth: 0, marginBottom: 3 }}>
                                                <Image resizeMode='stretch' style={styles.icon} source={require('../../images/address_icon.png')} />
                                                <Text style={styles.textprofilestyle}>{this.props.detailcv.resume.profile.address.address}</Text>
                                            </Item>
                                        </View>
                                    </View>

                                </View >
                                <View style={[styles.spacestyle, { height: 35 }]}>

                                </View>
                                <Item style={{
                                    marginLeft: 10,
                                    borderWidth: 0, marginTop: 3, marginBottom: 3
                                }}>
                                    <Image resizeMode='stretch' style={styles.image} source={require('../../images/target_icon.png')} />
                                    <Text style={styles.textpartstyle}>MỤC TIÊU</Text>

                                </Item >
                                <View style={styles.spacestyle}>
                                    <Text style={styles.textcontent}> {this.props.detailcv.resume.target}
                                    </Text>
                                </View>
                                <Item style={{
                                    marginLeft: 10,
                                    borderWidth: 0, marginTop: 3, marginBottom: 3
                                }}>
                                    <Image resizeMode='stretch' style={styles.image} source={require('../../images/education_icon.png')} />
                                    <Text style={styles.textpartstyle}>HỌC VẤN</Text>

                                </Item >
                                <View style={styles.spacestyle}>
                                    <ListView dataSource={this.state.dataSource1.cloneWithRows(this.props.detailcv.resume.education)}
                                        style={{ marginBottom: 10 }}
                                        renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.props.detailcv.resume.education.length - 1 ? <View style={{ marginBottom: 5, marginTop: 8, marginLeft: 15, marginRight: 10, backgroundColor: '#DFDFDF', height: 1 }} /> : null}

                                        renderRow={(rowData, rowId) => this.renderEducation(rowData, rowId)}
                                    >
                                    </ListView>
                                </View>
                                <Item style={{
                                    marginLeft: 10,
                                    borderWidth: 0, marginTop: 3, marginBottom: 3
                                }}>
                                    <Image resizeMode='stretch' style={styles.image} source={require('../../images/skill_icon.png')} />
                                    <Text style={styles.textpartstyle}>KỸ NĂNG</Text>

                                </Item >
                                <View style={styles.spacestyle}>
                                    <ListView dataSource={this.state.dataSource2.cloneWithRows(this.props.detailcv.resume.skill)}
                                        style={{ marginBottom: 10 }}
                                        renderRow={(rowData, rowId) => this.renderSkill(rowData, rowId)}
                                    >
                                    </ListView>
                                </View>
                                <Item style={{
                                    marginLeft: 10,
                                    borderWidth: 0, marginTop: 3, marginBottom: 3
                                }}>
                                    <Image resizeMode='stretch' style={styles.image} source={require('../../images/experience_icon.png')} />
                                    <Text style={styles.textpartstyle}>KINH NGHIỆM</Text>

                                </Item >
                                <View style={styles.spacestyle}>
                                    <ListView dataSource={this.state.dataSource3.cloneWithRows(this.props.detailcv.resume.experience)}
                                        style={{ marginBottom: 10 }}
                                        renderSeparator={(sectionId, rowId) => parseInt(rowId) !== this.props.detailcv.resume.experience.length - 1 ? <View style={{ marginBottom: 5, marginTop: 8, marginLeft: 15, marginRight: 10, backgroundColor: '#DFDFDF', height: 1 }} /> : null}

                                        renderRow={(rowData, rowId) => this.renderExperience(rowData, rowId)}
                                    >
                                    </ListView>
                                </View>
                                {this.props.detailcv.resume.certificate.length === 0 ? null :
                                    <Item style={{
                                        marginLeft: 10,
                                        borderWidth: 0, marginTop: 3, marginBottom: 3
                                    }}>
                                        <Image resizeMode='stretch' style={styles.image} source={require('../../images/certificate_icon.png')} />
                                        <Text style={styles.textpartstyle}>BẰNG CẤP , GIẢI THƯỞNG</Text>

                                    </Item >
                                }
                                <View style={styles.spacestyle}>
                                    <ListView dataSource={this.state.dataSource4.cloneWithRows(this.props.detailcv.resume.certificate)}
                                        style={{ marginBottom: 10 }}
                                        renderRow={(rowData, rowId) => this.renderCertificate(rowData, rowId)}
                                    >
                                    </ListView>
                                </View>


                                <View style={{ height: 50 }} />
                            </View>
                            :
                            null
                    }


                </Content >
            </Container >
        )
    }
    componentDidMount() {
        //  this.props.recruitment.job.push({})

        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(this.props.recruitment.job)

        // })
    }


}


const styles = StyleSheet.create({

    image: {
        width: 30,
        height: 30,

    },
    imageavatarstyle: {
        width: 105,
        height: 105,
        borderRadius: 50
    },
    icon: {
        width: 15,
        height: 15,
    },
    textnamestyle: {
        fontSize: 19,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15,
        height: 50,
        width: WIDTH * 2 / 3
    },
    textprofilestyle: {
        fontSize: 12,
        color: 'white',
        marginLeft: 7
    },
    profilepartstyle: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 150,
        backgroundColor: '#2E4053',
        flexDirection: 'row',

    },
    profilestyle: {
        margin: 5,
        height: 130,
        backgroundColor: '#2E4053',
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchimagestyle: {

        marginTop: 25,
        alignItems: 'center',

    },
    spacestyle:
        {
            marginLeft: 22, borderLeftColor: "#2E4053", borderLeftWidth: 5
        },
    textpartstyle: {
        color: "#2E4053",
        fontWeight: 'bold',
        fontSize: 17,
        borderBottomWidth: 3,
        borderBottomColor: "#2E4053",
        marginLeft: 10
    },
    textcontent: {
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        marginBottom:5
    },
    educationstyle1: {
        flexDirection: 'row',

    },
    educationtext1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        width: WIDTH * 2 / 3 - 35

    },
    educationtext2: {
        fontSize: 13,
        color: '#999999',
        marginTop: 3


    },
    educationtext3: {
        fontSize: 14,
        color: 'black',


    }
    ,
    skilltext1:{
        fontSize: 15,
        color: 'black',
        width: WIDTH / 2
    },
    certificatetext1: {
        fontSize: 15,
        color: 'black'
       

    },
    certificatetext2: {
        fontSize: 15,
        color: '#999999'
       

    }


})

// export default connect(mapStateToProps)(HomeScreen)
