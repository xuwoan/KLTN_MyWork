import { connect } from 'react-redux';
import FindCVPublic from './FindCVPublic';
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
class FindCVPublicContainer extends FindCVPublic {
    constructor(props) {
        super(props);


      
        this.state = {
            param:{
                dep_id:this.props.dep_id
                ,job:"",
                page:1,
                firstrequest:true},
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
        this.onGotoReviewCV = this.onGotoReviewCV.bind(this);
           

    }
    componentWillReceiveProps(nextProps) {
       if(nextProps.dep_id!== this.props.dep_id)
       {
        this.setState(prevState => ({
            param: {
                ...prevState.param,
                dep_id: this.props.dep_id
            }
        }))
       }
	}
    componentWillMount() {
       // this.props.onfetchQueryDept({name:""})
       
		
		
	}
    onGotoReviewCV(id) {
        this.props.onfetchDetailCV({ id: id })
        Actions.screen_cvreview()

    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state),
        listqueryCV : selectors.getlistCVPublic(state),
        amountCV:selectors.getamountCVPublic(state),
        isLoading: selectors.getisLoadingListCV(state),
        isNextLoading: selectors.getisLoadingNextListCV(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        onfetchFindCVPublic: (param) => {
            dispatch(actions.fetchListCVPublic(param))
        },
        onfetchDetailCV: (param) => {
            dispatch(actions.fetchDetailCV(param))
        },
        // onLogout:()=>{
        //     dispatch(actions.Logout())
        // }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FindCVPublicContainer);