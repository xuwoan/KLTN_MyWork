import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import { getItem } from '../../utils/storage';
import {

    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, ToastAndroid, Animated, Easing

} from 'react-native';

class LoginScreenContainer extends LoginScreen {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            playerid: "",
            password: "",
            username: "",
        }
        this._onPress = this._onPress.bind(this);
    }
    componentWillMount() {
        this.props.onfetchToken();
    }
    componentDidMount() {
        getItem("playerid").then((keyValue) => {

            this.setState({ playerid: keyValue })
            console.log(this.state.playerid)
        }, (error) => {
            console.log(error) //Display error
        });

    }
    _onPress() {
        if (this.state.username.trim() !== "" && this.state.password.trim() !== "") {
            this.props.onfetchUser({ username: this.state.username, password: this.state.password })


            setTimeout(() => {


                this.setState({
                    isLoading: true
                })
                Animated.timing(
                    this.buttonAnimated,
                    {
                        toValue: 1,
                        duration: 200,
                        easing: Easing.linear
                    }
                ).start();

                // setTimeout(() => {
                // 	this._onGrow();
                // }, 2000);

                // setTimeout(() => {
                // 	// if(this.props.user.type===0)
                // 	// 	{Actions.modal();
                // 	// 		console.log("ung vien")
                // 	// 	}
                // 	// 	else{ console.log("tuyen dung")
                // 	// 		Actions.em_modal();}
                // 	this.buttonAnimated.setValue(0);
                // 	this.growAnimated.setValue(0);



                // }, 2300);

            }, )



        } else {
            console.log("NONE")
            ToastAndroid.show("Vui lòng điền đầy đủ Username và Password", 50)
        }



    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loginsuccess === true && this.props.loginsuccess === false) {

            setTimeout(() => {
                this._onGrow();
            }, 2000);

            setTimeout(() => {
                // if(this.props.user.type===0)
                // 	{Actions.modal();
                // 		console.log("ung vien")
                // 	}
                // 	else{ console.log("tuyen dung")
                // 		Actions.em_modal();}
                this.buttonAnimated.setValue(0);
                this.growAnimated.setValue(0);
                if (nextProps.user.type === 0) {
                    console.log("uv");
                    Actions.modal();
                    this.props.onResetLoginState();

                }
                else {
                    console.log("td");
                    Actions.em_modal();
                    this.props.onResetLoginState();
                }



            }, 2300);
        }
        if (nextProps.isLoading === false && this.props.isLoading === true ) {
          
            if( this.props.loginsuccess ===false)
                this.setState({ isLoading: false })
                Animated.timing(
                    this.buttonAnimated,
                    {
                        toValue: 0,
                        duration: 200,
                        easing: Easing.linear
                    }
                ).start();
        }
        if (nextProps.username !== this.props.username) {
            console.log("CHANGE PORPS")
            this.setState({
                password: nextProps.password,
                username: nextProps.username
            })

        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state),
        loginsuccess: selectors.getLoginState(state),
        isLoading: selectors.getLoadingLogin(state),
        isLoadingToken :selectors.getisLoadingToken(state)
    }
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
const mapDispatchToProps = (dispatch) => {
    return {
        onfetchUser: (param) => {
            dispatch(actions.UserInfo(param))
        },
        onfetchToken: () => {
            dispatch(actions.UseTokenRequest())
        },
        onResetLoginState: () => {
            dispatch(actions.reretLoginState())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);