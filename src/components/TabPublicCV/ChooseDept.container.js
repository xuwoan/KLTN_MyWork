import { connect } from 'react-redux';
import ChooseDept from './ChooseDept';
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
    Text,ListView,
    TextInput
} from 'react-native';
class ChooseDeptContainer extends ChooseDept {
    constructor(props) {
        super(props);


      
        this.state = {
            query:"",
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
           

    }
    componentWillMount() {
        this.props.onfetchQueryDept({name:""})
		
		
	}
    gotoFindCVPublic(dept_id,dept_name) {
        this.props.onfetchFindCVPublic({dep_id:dept_id,job:"",page:1,firstrequest:true})
        Actions.screen_findcvpublic({department:dept_name,dep_id:dept_id})
    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state),
        listqueryDept : selectors.getlistQueryDepartment(state),
        isLoading : selectors.getisLoadingListDep(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        onfetchQueryDept: (param) => {
                dispatch(actions.fetchListQueryDepartment(param))
            },
         onfetchFindCVPublic: (param) => {
                dispatch(actions.fetchListCVPublic(param))
            },
        // onLogout:()=>{
        //     dispatch(actions.Logout())
        // }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseDeptContainer);