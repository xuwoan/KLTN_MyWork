import { connect } from 'react-redux';
import MoreScreen from './MoreScreen';
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
class MoreScreenContainer extends MoreScreen {
    
 
    gotoSettingScreen()
    {
        Actions.screen_setting()
    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
	onfetchUserCVPublic: (param) => {
            dispatch(actions.fetchUserCVPublic(param))
        },
    onLogout:(param)=>{
        dispatch(actions.Logout(param))
    }}
};
export default connect(mapStateToProps, mapDispatchToProps)(MoreScreenContainer);