
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity,
    StyleSheet, ListView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Pie } from 'react-native-pathjs-charts'
import { Container, Icon, Button, Header, Body, Title, Left, Right, Content } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
class InfoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Pie - Basic`,
    });
    constructor(props) {
        super(props);
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }
    render() {
        let data = [{
            "name": "28%",
            "department": "Công nghệ thông tin",
            "population": 28
        }, {
            "name": "3%",
            "department": "Điện",
            "population": 3
        }, {
            "name": "2%",
            "department": "Thực phẩm",
            "population": 2,
            "color": { 'r': 223, 'g': 154, 'b': 20 }
        }, {
            "name": "7%",
            "department": "Kinh tế",
            "population": 7
        },
        {
            "name": "7%",
            "department": "Cơ khí",
            "population": 7
        }, {
            "name": "4%",
            "department": "Xây dựng",
            "population": 4
        }, {
            "name": "10%",
            "department": "Nông nghiệp , lâm nghiệp và thủy sản",
            "population": 10
        }, {
            "name": "4%",
            "department": "Khai thác",
            "population": 4
        }, {
            "name": "6%",
            "department": "Trang phục",
            "population": 6
        }
            , {
            "name": "10%",
            "department": "Giáo dục",
            "population": 10
        }
            , {
            "name": "22%",
            "department": "Khác",
            "population": 11
        }
        ]

        let options = {
            margin: {

                left: 50,
                right: 10,
                bottom: 20
            },
            width: 300,
            height: 300,
            color: '#2980B9',
            r: 50,
            R: 150,
            legendPosition: 'topLeft',
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                color: '#ECF0F1'
            }
        }


        console.log(this.state.dataSource);
        return (
            <Container>

                <Content style={{ backgroundColor: 'white' }}>


                    <View style={styles.container1}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 12, margin: 5, color: "#60819E", fontWeight: "bold" }}> TOP 10 NGÀNH TUYỂN DỤNG NHIỀU NHẤT TRÊN MYWORK </Text>

                        {!this.props.isLoadingAnalysis ? this.props.dataanalysis.length > 0 ?
                            <View style={styles.container2}>
                                <View style={{ width: width * 2 / 3 + 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Pie data={this.props.dataanalysis}

                                        // options={options}
                                        accessorKey="population"
                                        margin={{}}
                                        color="#2980B9"
                                        pallete={
                                            [
                                                { 'r': 225, 'g': 98, 'b': 67 },
                                                { 'r': 225, 'g': 130, 'b': 67 },
                                                { 'r': 225, 'g': 193, 'b': 67 },
                                                { 'r': 89, 'g': 165, 'b': 127 },
                                                { 'r': 57, 'g': 151, 'b': 182 },
                                                { 'r': 96, 'g': 102, 'b': 182 },
                                                { 'r': 130, 'g': 76, 'b': 185 },
                                                { 'r': 211, 'g': 145, 'b': 213 },
                                                { 'r': 155, 'g': 155, 'b': 88 },
                                                { 'r': 192, 'g': 160, 'b': 96 },
                                                { 'r': 186, 'g': 186, 'b': 184 }
                                            ]
                                        }
                                        r={0}
                                        R={110}
                                        legendPosition="topLeft"
                                        label={{
                                            fontFamily: 'Arial',
                                            fontSize: 9,
                                            fontWeight: 'true',
                                            color: 'black'
                                        }}
                                    />
                                </View>

                                <View style={{ width: width * 1 / 3 - 30, height: 300, marginRight: 5, marginTop: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#E16243", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>Ngành {this.props.dataanalysis[0].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#E18243", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>Ngành {this.props.dataanalysis[1].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#E1C143", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>Ngành {this.props.dataanalysis[2].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#59A57F", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>Ngành {this.props.dataanalysis[3].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#3997A2", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>Ngành {this.props.dataanalysis[4].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#6066A2", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>Ngành {this.props.dataanalysis[5].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#824CB9", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>ngành {this.props.dataanalysis[6].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#D391D5", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>ngành {this.props.dataanalysis[7].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#C0A060", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>ngành {this.props.dataanalysis[8].department}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={[styles.content, { backgroundColor: "#BABAB8", width: 15, height: 10 }]} />
                                        <Text style={{ fontFamily: 'Arial', fontSize: 11 }}>ngành {this.props.dataanalysis[9].department}</Text>
                                    </View>

                                </View>
                            </View> : null
                            :
                            <View style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                            </View>

                        }

                    </View>
                    <View style={{ height: 45, margin: 2, backgroundColor: '#2E4053', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>TIN TỨC VIỆC LÀM</Text>
                    </View>
                    {!this.props.isLoadingNews1 ? this.props.list1.length > 0 ?
                        <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.list1)}
                            renderRow={(row) =>
                                <TouchableOpacity onPress={() => this.gotoDetailNew(row)}>

                                    <View style={styles.container3}>

                                        <Image source={{ uri: row.image }} style={styles.photo} borderRadius={10} />
                                        <View style={styles.columcon}>

                                            <Text style={styles.text1}>{row.title}</Text>
                                            <Text style={styles.text2}> {row.date}</Text>

                                        </View>

                                    </View>

                                </TouchableOpacity>
                            }
                        >
                        </ListView>
                        : null
                        :
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                        </View>
                    }
                    <View style={{ height: 45, margin: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.page1 === 1} onPress={this.goPreviousPage1} >
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={ this.state.page1 !== 1 ? require('../../images/en_left_icon.png'):require('../../images/dis_left_icon.png')} style={styles.photobutton} borderRadius={10} />
                                <Text style={{ color: '#60819E', textAlign: 'center', fontSize: 15, marginTop: 5 }}> Trang trước</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: '#60819E', textAlign: 'center', fontSize: 20, fontWeight: 'bold', width: 80 }}>{this.state.page1} / {this.props.amount1}</Text>
                        <TouchableOpacity disabled={this.props.amount1 > this.state.page1 ?false:true} onPress={this.goNextPage1}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#60819E', textAlign: 'center', fontSize: 15, marginTop: 5 }}>Trang tiếp </Text>
                                <Image source={this.props.amount1 > this.state.page1 ? require('../../images/en_right_icon.png'):require('../../images/dis_right_icon.png')} style={styles.photobutton} borderRadius={10} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 45, margin: 2, backgroundColor: '#CCBD7F', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>CẨM NANG VIỆC LÀM</Text>
                    </View>
                    {!this.props.isLoadingNews2 ? this.props.list2.length > 0 ?
                        <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.list2)}
                            renderRow={(row) =>
                                <TouchableOpacity onPress={() => this.gotoDetailNew(row)} >

                                    <View style={styles.container4}>

                                        <Image source={{ uri: row.image }} style={styles.photo} borderRadius={10} />
                                        <View style={styles.columcon}>

                                            <Text style={styles.text1}>{row.title}</Text>
                                            <Text style={styles.text2}> {row.date}</Text>

                                        </View>

                                    </View>

                                </TouchableOpacity>
                            }
                        >
                        </ListView>
                        : null
                        : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                        </View>}
                    <View style={{ height: 45, margin: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.page2 === 1} onPress={this.goPreviousPage2}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={ this.state.page2 !== 1 ? require('../../images/en_left_icon.png') :require('../../images/dis_left_icon.png')} style={styles.photobutton} borderRadius={10} />
                                <Text style={{ color: '#60819E', textAlign: 'center', fontSize: 15, marginTop: 5 }}> Trang trước</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: '#60819E', textAlign: 'center', fontSize: 20, fontWeight: 'bold', width: 80 }}>{this.state.page2} / {this.props.amount2}</Text>
                        <TouchableOpacity  disabled={this.props.amount2 > this.state.page2 ?false:true}onPress={this.goNextPage2}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#60819E', textAlign: 'center', fontSize: 15, marginTop: 5 }}>Trang tiếp </Text>
                                <Image source={this.props.amount2 > this.state.page2 ? require('../../images/en_right_icon.png'): require('../../images/dis_right_icon.png')} style={styles.photobutton} borderRadius={10} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 50 }} />

                </Content>
            </Container>
        )
    }
    componentDidMount() {

    }


}
function News(title, image, time) {
    this.Title = title;
    this.Image = image;
    this.Time = time;
}

const styles = StyleSheet.create({
    container2: {

        flex: 1,
        flexDirection: 'row',

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
    photobutton: {
        height: 30,
        width: 30,

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
    container4: {
        height: 120,
        borderRadius: 10,
        borderWidth: 0.5, borderColor: '#CCBD7F',
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
export default InfoScreen;