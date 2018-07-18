import { connect } from 'react-redux';
import CVinPost from './CVinPost';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {

    TouchableOpacity, ToastAndroid, ListView, Alert

} from 'react-native';
class CVinPostContainer extends CVinPost {
    constructor(props) {
        super(props)
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            
        };
        this.gotoDetailCV = this.gotoDetailCV.bind(this)
        this.gotoAskDetele = this.gotoAskDetele.bind(this)
      



    }
    gotoAskDetele(recruimentid,candidateid) {
        Alert.alert(
            'Thông báo',
            'Bạn muốn xóa CV này',
            [


                { text: 'OK', onPress: () => { this.props.onfetchRemoveCVTE({ recruimentid: recruimentid, candidateid: candidateid }) } },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }
    gotoDetailCV(id)
    {
      
        this.props.onfetchDetailCV({id:id})   
        Actions.screen_reviewcv()
    }
 
    componentWillMount() {
        
    }
    componentWillReceiveProps(nextProps) {
       if(nextProps.statedeleting !== this.props.statedeleting &&this.props.statedeleting )
       {
           this.props.onfetchListCVTE({recruimentid:this.props.recruimentid})
       }

    }
  


}
String.prototype.trim = function () {
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
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '-' + monthIndex + '-' + year;
}
const mapStateToProps = (state) => {
    return {

        listcvte: selectors.getListDataCVTE(state),
        user: selectors.getUserInfo(state),
        statedeleting:selectors.getStateCVTEDeleting(state)
       

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchListCVTE: (param) => {
            dispatch(actions.fetchListCVtoEmployer(param))
        },
        onfetchDetailCV: (param) => {
            dispatch(actions.fetchDetailDataCVTE(param))
        },
        onfetchRemoveCVTE:(param) => {
            dispatch(actions.fetchRemoveCVtoEmployer(param))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CVinPostContainer);