
import React, { Component } from 'react';
import {
    View,
    Text, ScrollView,
    StyleSheet, Image, TouchableOpacity, ListView
} from 'react-native';


import { Container, Icon, Button, Header, Body, Title, Left, Right, Content, Input } from 'native-base';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
export default class ChooseDept extends Component {


    Logout() {
        this.props.onLogout();
        Actions.login_screen();
    }
    constructor(props) {
        super(props)

        this.Logout = this.Logout.bind(this);

    }
    renderRowDept(rowData, rowID,that) {
        return (
            <TouchableOpacity onPress={()=>that.gotoFindCVPublic(rowData.key,rowData.name)}>
                <View style={{ margin: 5, backgroundColor: 'white', borderRadius: 3, elevation: 3, borderColor: '#A6ACAF', borderWidth: 1, height: 40 }}>
                    <Text style={{ color: '#A6ACAF', fontSize: 15, textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>{rowData.name} <Text style={{ color: 'black', fontSize: 15 }} > ({rowData.amount} Ứng viên )</Text> </Text>

                </View>
            </TouchableOpacity>
        );
    }
    render() {
        let that = this
        return (
            <Container>

                <View style={{ backgroundColor: '#DFDFDF', flex: 1 }}>

                    <View
                        style={
                            styles.top
                        }
                    >


                        <Image source={require('../../images/find_icon.png')} style={{ width: 25, height: 25, margin: 5 }} />

                        <Input
                            placeholder={"Tìm Kiếm Ngành"}

                            onChangeText={(text) => {
                                this.setState({
                                    query: text
                                })
                                this.props.onfetchQueryDept({name:text})
                            }
                            }
                            value={this.state.query}
                            style={{
                                borderColor: '#2E4053', margin: 5, borderWidth: 0.5, flex: 1, fontSize: 15,
                                borderRadius: 3, backgroundColor: 'white', paddingTop: 10,
                                height: 40
                            }}
                        >
                        </Input>



                    </View>
                    <ScrollView style={{ marginTop: 50 }}>
                        { !this.props.isLoading ?
                        <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listqueryDept)}
                            renderRow={(rowData, rowId) => this.renderRowDept(rowData, rowId,that)}


                        > </ListView>
                        :
                            <View style={{ height: HEIGHT - 150, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                            </View>
                      
                        }

                    </ScrollView>


                    <View style={{ height: 45 }} />

                </View>
            </Container>
        )
    }
}



const styles = {
    content: {
        backgroundColor: '#fff',

        margin: 5,
        height: HEIGHT - 85
    },
    rowContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#DFDFDF',
        height: 40,


        marginHorizontal: 5,
        paddingVertical: 5,
    },
    top: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,

        width: WIDTH,

        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#2E4053',

        flexDirection: 'row'


    },
    titleText: {
        fontSize: 14,
        padding: 5
    },
    textContent: {
        color: "#9a9a9a",

        fontSize: 17
    },

}
const mapStateToProps = (state) => {

    return {


    }
}

// export default connect(mapStateToProps)(MoreScreen)
