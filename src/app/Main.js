import React, { Component } from 'react';

import {
    AsyncStorage,
    View,
    Text,
    AppState,Image

} from 'react-native';
import Router from './Router'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import createStore from '../configs/store.config'

import { setItem } from '../utils/storage';
var DeviceInfo = require('react-native-device-info');
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as selectors from '../selectors';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

class Main extends Component {

    componentWillMount() {
        // OneSignal.configure({});

    }
    componentWillUnmount() {


    }

    render() {
        console.log("TYPE",this.props.noti_type)
        return (
            <View style={{flex:1}}>
                {
                   ( this.props.noti_type !== null  ) || (this.props.noti_type === null && this.props.isLoadingToken ===true )? 
                <Image  style={{  width: WIDTH, height: HEIGHT }} 
                source={require('../images/splashscreen.jpg')}
                
                /> 
                :    null 
                }
               
                
               
                <Router />

            </View>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        noti_type: selectors.getdataNotiType(state),
        isLoadingToken: selectors.getisLoadingToken(state)
     

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        onfetchdataNotification: (param) => {
            dispatch(actions.fetchDataNotification(param))
        }
       


    }
};
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Main)