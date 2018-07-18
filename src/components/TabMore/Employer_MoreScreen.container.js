import { connect } from 'react-redux';
import Employer_MoreScreen from './Employer_MoreScreen';
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
class Employer_MoreScreenContainer extends Employer_MoreScreen {

    gotoSettingScreen()
    {
        Actions.em_screen_setting()
    }
}
const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(actions.Logout())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Employer_MoreScreenContainer);