import { connect } from 'react-redux';
import WorkScreen from './WorkScreen';
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
class WorkScreenContainer extends WorkScreen {

	componentWillMount() {
		this.props.fetchlistJob();
		this.props.onFetchDepartment();
		this.props.fetchlistProvince();
		this.props.onFetchFilterRecruiment(this.state.param);
		
		if (this.props.noti_type === 5) {
			this.props.fetchdetailRecruiment({id:this.props.noti_data.recruimentid})
			Actions.tab_detailjob({reid:this.props.noti_data.recruimentid});
			this.props.onrefreshDataNotification()
		}
		
	}
	componentWillReceiveProps(nextProps) {
	   // console.log("DDDD",nextProps.listrecruiment)
	   if(nextProps.param!==this.props.param)
		{
			
			if(nextProps.param!==undefined)
			{
				this.setState({
					param:nextProps.param

				})
			}
		}
		
	}
	gotoDefault()
	{
		this.setState({
			param:this.state.rootparam
		})
		this.props.onFetchFilterRecruiment(this.state.rootparam);
	}
}
const mapStateToProps = (state) => {
	return {
		listrecruiment: selectors.getlistRecruiment(state),
		listjob: selectors.getlistJob(state),
		listprovince: selectors.getlistProvince(state),
		isLoading :selectors.getIsLoadingRecruiment(state),
		noti_type: selectors.getdataNotiType(state),
		noti_data: selectors.getdataNotiData(state),
		isNextLoading: selectors.getIsLoadingNextRecruiment(state),
		amountRecruiment:selectors.getAmountRecruiment(state)
		

	}
};

const mapDispatchToProps = (dispatch) => {
	return {

		fetchlistJob: () => {
			dispatch(actions.ListJob())
		},
		fetchlistProvince: () => {
			dispatch(actions.listProvince())
		},
		onFetchDepartment: (param) => {
            dispatch(actions.fetchListDepartment(param))
        },
		fetchlistRecruiment: () => {
			dispatch(actions.listRecruiment())
		},	
		fetchdetailRecruiment: (params) => {
			dispatch(actions.fetchDetailRecruiment(params))
		},
		onfetchListComment: (param)=>
        {
            dispatch(actions.fetchGetComment(param))
		},
		onFetchFilterRecruiment: (param) => {
            dispatch(actions.fetchFilterRecruiment(param))
		},
		
		onrefreshDataNotification:(param)=> {
            dispatch(actions.refreshDataNotification(param))
        },

	
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkScreenContainer);