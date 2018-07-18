import { connect } from 'react-redux';
import Candidate_Setting from './Candidate_Setting';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';

class Candidate_SettingContainer extends Candidate_Setting {

	componentWillReceiveProps(nextProps) {

		if (nextProps.enableresult === true && this.props.enableresult === false) {
			this.props.onfetchToken()
			
		}
		else if(nextProps.enableresult===false && this.props.enableresult === false)
		{
			
			this.refs.switch.toggle()
		}

	}
}
const mapStateToProps = (state) => {
	return {
		user: selectors.getUserInfo(state),
		enableresult: selectors.getSettingSuccess(state),
		iserror: selectors.getisErrorSetting(state),
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

		onfetchSettingNoti: (param) => {
			dispatch(actions.fetchSettingNotification(param))
		},
		onfetchToken: () => {
			dispatch(actions.UseTokenRequest())
		},
	}


};
export default connect(mapStateToProps, mapDispatchToProps)(Candidate_SettingContainer);