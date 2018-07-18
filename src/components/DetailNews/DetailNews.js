
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

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-accordion';
import HTMLView from 'react-native-htmlview';

import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const HEIGHT = Dimensions.get('window').height;
export default class DetailNews extends Component {


    goBack() {
        Actions.pop()
    }



    render() {
        console.log(this.props.news)
        return (
            <Container>
                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => this.goBack()}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/arrow_icon.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title></Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#DFDFDF'}}>
                    {
                        !this.props.isLoading ?
                            <HTMLView
                                value={this.props.news.content}
                                style={{ marginBottom: 50 , marginLeft:5 ,marginTop:5,marginRight:5 }}

                            />
                            : <View style={{ height: HEIGHT-100, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 40, width: 40 }} source={require('../../images/loading_app.gif')} />

                            </View>
                    }



                </Content>
            </Container>
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




    }

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
