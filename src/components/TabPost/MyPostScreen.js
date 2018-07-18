
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity,
    StyleSheet, ListView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Switch from 'react-native-material-switch';
import { Container, Icon, Button, Header, Body, Title, Left, Right, Content, Item } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
var workdata = require('../../data/data1.json')
class MyPostScreen extends Component {

    constructor(props) {
        super(props);

    }
    renderjob(job) {
        let views = [];
        console.log(job)
        for (var r = 0; r < job.length; r++) {

            if (r < job.length - 1) {
                views.push(
                    <Text style={{ borderRightColor: '#DFDFDF', borderRightWidth: 1, marginLeft: 5, marginRight: 5 }}>{job[r]}<Text style={{ width: 5 }}>   </Text></Text>
                );

            }
            else {
                views.push(
                    <Text style={{ marginLeft: 5, marginRight: 5 }}>{job[r]}</Text>
                );
            }

        }

        return views;
    }
    renderrowPost(rowData, rowID, that) {

        return (

            <View style={[{ flex: 1, height: 135, backgroundColor: 'white', marginRight: 5, marginLeft: 5, borderLeftWidth: 5 }, rowData.active === true ? { borderLeftColor: '#53CC66' } : { borderLeftColor: '#E44444' }]}>
                <View style={{ flexDirection: 'row', height: 40 }}>
                    <Text style={rowData.active === true ? { width: WIDTH * 0.55, color: '#53CC66', fontSize: 18, paddingTop: 5, margin: 5, fontWeight: 'bold' } : { width: WIDTH * 0.55, color: '#E44444', fontSize: 18, paddingTop: 5, margin: 5, fontWeight: 'bold' }}>{rowData.active === true ? "ACTIVE" : "INACTIVE"}
                    </Text>
                    <TouchableOpacity onPress={()=>this.gotoGetListCV(rowData.id)}>
                        <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginBottom:5,marginTop:5 ,color:'#2E4053',fontSize:22}}> {rowData.numOfCandidate} </Text>
                            <Image source={require('../../images/candidate_icon.png')} style={styles.icon} />
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => this.gotoUserDetailRecruiment(rowData)}>
                        <Image source={require('../../images/edit2_icon.png')} style={styles.icon} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => this.gotoAskDetele(rowData)}>
                        <Image source={require('../../images/delete_icon.png')} style={styles.icon} />
                    </TouchableOpacity>

                </View>

                <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16, color: '#60819E', height: 42 }} numberOfLines={2}>
                    {rowData.title}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: WIDTH * 3 / 5 - 10 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                            <Text style={{ color: '#2E4053', marginLeft: 5,fontStyle:'italic' }}>Công Việc :</Text>
                            {
                                //console.log(rowData.job)
                                that.renderjob(rowData.job)
                            }

                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{ color: '#2E4053', marginLeft: 5,fontStyle:'italic' }}>Ngày Post :</Text>
                            <Text style={{ marginLeft: 5 }}>{rowData.date}
                            </Text>

                        </View>
                    </View>
                    <Item fixedLabel style={{


                        marginRight: 5,

                        flex: 1,
                        borderBottomWidth: 0,
                    }} >
                        <Text style={{ marginLeft: 5, color: '#2E4053', position: 'absolute', bottom: 5,fontStyle:'italic' }}>Nhận CV :</Text>
                        <View style={{ position: 'absolute', right: 3, bottom: 0, paddingTop: 5 }}>
                            <Switch
                                ref='switch'
                                active={rowData.getcv}
                                activeBackgroundColor='rgba(96, 129, 158,0.74)'
                                inactiveBackgroundColor='rgba(223, 223, 223,0.74))'
                                activeButtonColor='#60819E'
                                activeButtonPressedColor='#60819E'
                                inactiveButtonColor='#CACACA'
                                inactiveButtonPressedColor='#CACACA'
                                switchHeight={28}
                                switchWidth={50}
                                // onChangeState={()=>this.onUpdateRecruimentCV(rowData.id)}
                                onActivate={() => this.onUpdateRecruimentCV(rowData.id, true)}
                                onDeactivate={() => this.onUpdateRecruimentCV(rowData.id, false)}

                            />
                        </View>

                    </Item>
                </View>
            </View>

        );
    }
    render() {

        let that = this;

        return (
            <Container>

                <Content style={{ backgroundColor: '#DFDFDF' }}>


                    <View style={styles.container1}>
                        { !this.props.isLoadingList ? this.props.listmyrecruiment.length > 0 ?
                            <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listmyrecruiment)}
                                renderRow={(rowData, rowId) => this.renderrowPost(rowData, rowId, that)}
                                renderSeparator={(sectionId, rowId) => <View style={{ backgroundColor: '#DFDFDF', height: 5 }} />}

                            >
                            </ListView> : <View style={{ marginLeft: 5, marginRight: 5, marginBottom: 5, backgroundColor: 'white', height: HEIGHT - 135 }}><Text style={{ textAlign: 'center', color: "#DFDFDF" }}> Bạn chưa có tin tuyển dụng nào để hiện thị</Text></View>
                            :
                            
                            <View style={{ height: HEIGHT - 150, alignItems: 'center', justifyContent: 'center' }}>
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
        marginTop: 5,
        marginRight: 7,
        marginBottom: 5,
        


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
    wrapper: {
    },

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
export default MyPostScreen;