import { connect } from 'react-redux';
import MyCVScreen from './MyCVScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {

    TouchableOpacity, ToastAndroid, ListView, Alert

} from 'react-native';
class MyCVScreenContainer extends MyCVScreen {
    constructor(props) {
        super(props)
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            currentcvname: "",
            currentidcv: "",

            showDialog: false
        };

        this.onHideDialog = this.onHideDialog.bind(this);
        this.onUpdateMainCV = this.onUpdateMainCV.bind(this);
        this.onOpenDialog = this.onOpenDialog.bind(this);
        this.onUpdateNameCV = this.onUpdateNameCV.bind(this);
        this.onGotoReviewCV = this.onGotoReviewCV.bind(this);
        this.gotoAskDetele = this.gotoAskDetele.bind(this);

    }
    onHideDialog() {
        this.setState({
            showDialog: false
        })
    }
    onGotoEditCV(id) {
        this.props.onfetchDetailCV({ id: id })
        Actions.screen_editcv()
    }
    componentWillMount() {
        this.props.onfetchMyCV({ userid: this.props.user.userid });
    }
    componentWillReceiveProps(nextProps) {

        if (this.props.stateUpdate !== nextProps.stateUpdate && this.props.stateUpdate === false) {
           
            this.props.onfetchMyCV({ userid: this.props.user.userid });
          //  

        }
        if (this.props.stateDelete !== nextProps.stateDelete && this.props.stateDelete === false) {

            this.props.onfetchMyCV({ userid: this.props.user.userid });
            this.props.onResetState(3)

        }

    }
    onUpdateMainCV(id, maincv) {
        console.log({ type: 1, id: id, userid: this.props.user.userid, maincv: maincv, cvname: null, resume: null })
        this.props.onResetState(2)
        this.props.onfetchUpdateCV({ type: 1, id: id, userid: this.props.user.userid, maincv: maincv, cvname: null, resume: null })
    }
    onUpdateNameCV() {
        if (this.state.currentcvname.trim() === "") {
            ToastAndroid.show("Tên CV khổng thể bỏ trống", 50)
        }
        else {
            this.props.onResetState(2)
            this.props.onfetchUpdateCV({ type: 0, id: this.state.currentidcv, userid: this.props.user.userid, maincv: null, cvname: this.state.currentcvname, resume: null })
            this.setState({

                showDialog: false

            })
        }
        // console.log({ type: 0, id: this.state.currentidcv, userid: this.props.user.userid, maincv: null, cvname: this.state.currentcvname, resume: null })

    }
    onGotoReviewCV(id) {
        this.props.onfetchDetailCV({ id: id })
        Actions.tab_reviewcv()

    }
    onOpenDialog(text, id) {
        this.setState({
            currentcvname: text,
            showDialog: true,
            currentidcv: id
        })

    }
    gotoAskDetele(id) {
        Alert.alert(
            'Thông báo',
            'Bạn muốn xóa CV này',
            [


                { text: 'OK', onPress: () => { this.props.onfetchRemoveCV({ id: id }) } },
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


        user: selectors.getUserInfo(state),
        listUserCV: selectors.getListDataCV(state),
        stateUpdate: selectors.getStateUpdating(state),
        stateDelete: selectors.getStateDeleting(state),
        isLoading : selectors.getLoaingUserCV(state)


    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchMyCV: (param) => {
            dispatch(actions.fetchListCV(param))
        },
        onfetchRemoveCV: (param) => {
            dispatch(actions.fetchRemoveCVUser(param))
        },
        onfetchUpdateCV: (param) => {
            dispatch(actions.fetchUpdateCVUser(param))
        },
        onResetState: (param) => {
            dispatch(actions.resetState(param))
        },
        onfetchDetailCV: (param) => {
            dispatch(actions.fetchDetailCV(param))
        },

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyCVScreenContainer);