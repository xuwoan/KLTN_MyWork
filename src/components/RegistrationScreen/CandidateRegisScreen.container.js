import { connect } from 'react-redux';
import CandidateRegisScreen from './CandidateRegisScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Image,
    Easing,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, ToastAndroid,
    Animated,
    Text,
    TextInput
} from 'react-native';
class CandidateRegisScreenContainer extends CandidateRegisScreen {
    constructor(props) {
        super(props)
        this.state = {
            date: "15-07-2017",
            city: 'TP HCM',
            province: 'Q1',
            confirmpassword:'',
            user: {
                type: 0,
                username: '',
                password: '',
                code: '',
                detail: {
                    birthday: formatDate(new Date()),
                    name: '',
                    address: {
                        street: '',
                        city: {
                            key:2,
                            name:"TP HCM"
                        }
                    },
                    major:{
                        key:null,
                        name:null,
                    },
                    gender: 0,
                    phone: '',
                    email: '',
                    setting :{
                        player_id : this.props.player_id,
                        recruimentposted_noti : false
                    }
                }


            }
        }
        this.onCancel = this.onCancel.bind(this);
        this.onRegister = this.onRegister.bind(this);
       

    }
    componentWillMount() {
        this.props.fetchlistProvince();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.message.success===true && nextProps.message.success!==this.props.message.success)
        {
            setTimeout(()=>{ Actions.pop({refresh:{password:this.state.user.password,username:this.state.user.username}})},4500)
        }
    }
    onSelectDropdownCity(idx, value) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                detail: {
                    ...prevState.user.detail,
                    address :{
                        ...prevState.user.detail.address,
                        city :{key:value.key,name:value.name}
                    }
                }
            }
           

        }));
    }
    onRegister()
    {
        console.log(this.state.user)
        if(this.state.user.username.trim()===''||this.state.user.password.trim()===''
        ||this.state.user.code.trim()===''||this.state.user.detail.birthday.trim()===''
        ||this.state.user.detail.email.trim()===''){
            console.log(this.state.user)
            alert("Vui lòng nhập đủ thông tin")
        }
        else{
            if(this.state.user.password!== this.state.confirmpassword)
            alert("Mật khẩu xác nhận không trùng")
            else
            {
                this.props.onfetchRegister(this.state.user)
            }
        }
        //this.props.onfetchRegister(this.state.user)
    }
}
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};
function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '-' + monthIndex + '-' + year;
  }
const mapStateToProps = (state) => {
    return {
       
        listprovince :selectors.getlistProvince(state),
        message: selectors.getmessageRegister(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchRegister: (param) => {
            dispatch(actions.fetchRegister(param))
        },
        fetchlistProvince: () => {
			dispatch(actions.listProvince())
		},
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CandidateRegisScreenContainer);