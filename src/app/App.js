import React, { Component } from 'react';

import {
    AsyncStorage,
    View,
    Text,
    AppState

} from 'react-native';
import Main from './Main'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import createStore from '../configs/store.config'
import OneSignal from 'react-native-onesignal';
import { setItem } from '../utils/storage';
var DeviceInfo = require('react-native-device-info');



class Kernel extends Component {

    componentWillMount() {
        // OneSignal.configure({});
        let requiresConsent = false;
        OneSignal.setRequiresUserPrivacyConsent(requiresConsent);
        OneSignal.init("fb118ac0-4197-4d2c-9360-25d28c0bf412", { kOSSettingsKeyAutoPrompt: true })

        OneSignal.inFocusDisplaying(2)
    }
    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);

    }
    componentDidMount() {

        setTimeout(() => { SplashScreen.hide() }, 4000);
        OneSignal.configure({});
        this.onReceived = this.onReceived.bind(this);
        this.onOpened = this.onOpened.bind(this);


        OneSignal.getPermissionSubscriptionState((status, a) => {
            a = status.userId;
            setItem("playerid", status.userId);
        });
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);



    }
    onReceived(notification) {
        console.log("Notification received: ", notification);


    }
    onOpened(openResult) {
        // console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        // console.log('isActive: ', openResult.notification.isAppInFocus);
        // console.log('openResult: ', openResult);
        console.log(this.refs.main)
        let data = openResult.notification.payload.additionalData;

        this.refs.main.wrappedInstance.props.onfetchdataNotification({ type: data.type, data: data.data })




    }
    render() {
        return (
            <Provider store={createStore}>
                <Main ref='main' />
            </Provider>
        )
    }
}
export default Kernel