import { connect } from 'react-redux';
import MyPostScreen from './MyPostScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {

    TouchableOpacity, ToastAndroid, ListView, Alert

} from 'react-native';
class MyPostScreenContainer extends MyPostScreen {
    constructor(props) {
        super(props)
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
        this.gotoAskDetele = this.gotoAskDetele.bind(this)
        this.gotoUserDetailRecruiment = this.gotoUserDetailRecruiment.bind(this)
        this.onUpdateRecruimentCV = this.onUpdateRecruimentCV.bind(this)
        this.gotoGetListCV = this.gotoGetListCV.bind(this)



    }
    onUpdateRecruimentCV(id, state) {
        this.props.onresetUpdateRecruimentResult();
        this.props.onupdateRecruiment({
            id: id,
            type: 1,
            getcv: state,
            title: null,
            detail: null,
            contact: null,
            job: null,
            deadline: null
        })
    }
    gotoUserDetailRecruiment(data) {
        Actions.screen_detailpost({ idpost: data.id })
    }
    componentWillMount() {
        this.props.onfetchMyRecruiment({ userid: this.props.user.userid });
        if(this.props.noti_type===1)
        {
            this.props.onfetchListCVTE({recruimentid:this.props.noti_data.recruimentid})
            Actions.screen_listcv({recruimentid:this.props.noti_data.recruimentid})
            this.props.onrefreshDataNotification()
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.resultdelete !== nextProps.resultdelete && this.props.resultdelete === false) {
            this.props.onfetchMyRecruiment({ userid: this.props.user.userid });
            this.props.onresetDeleteRecruimentResult();
        }
        if (this.props.resultupdate !== nextProps.resultupdate && this.props.resultupdate === false) {
            this.props.onfetchMyRecruiment({ userid: this.props.user.userid });
            
        }

    }
    gotoGetListCV(id)
    {
        this.props.onfetchListCVTE({recruimentid:id})
        Actions.screen_listcv({recruimentid:id})
    }
    gotoAskDetele(data) {
        Alert.alert(
            'Thông báo',
            'Bạn muốn xóa bài viết này',
            [


                { text: 'OK', onPress: () => { this.props.onfetchDeleteRecruiment({ id: data.id }) } },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
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

        listmyrecruiment: selectors.getuserRecruiment(state),
        user: selectors.getUserInfo(state),
        resultdelete: selectors.getdeleteRecruiment(state),
        resultupdate: selectors.getresultUpdateRecruiment(state),
        isLoadingList:selectors.getIsLoadingListUserRecruiment(state),
        noti_type: selectors.getdataNotiType(state),
        noti_data: selectors.getdataNotiData(state)


    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchMyRecruiment: (param) => {
            dispatch(actions.fetchUserRecruiment(param))
        },
        onfetchDeleteRecruiment: (param) => {
            dispatch(actions.fetchDeleteRecruiment(param))
        },
        onresetDeleteRecruimentResult: () => {
            dispatch(actions.resetResultDeleteRecruiment())
        },
        onresetUpdateRecruimentResult: () => {
            dispatch(actions.resetResultUpdateRecruiment())
        },
        onupdateRecruiment: (param) => {
            dispatch(actions.fetchUpdateRecruiment(param))
        },
        onfetchListCVTE: (param) => {
            dispatch(actions.fetchListCVtoEmployer(param))
        },
        onrefreshDataNotification:(param)=> {
            dispatch(actions.refreshDataNotification(param))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPostScreenContainer);