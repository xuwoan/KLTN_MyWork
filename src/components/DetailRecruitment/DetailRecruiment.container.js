import { connect } from 'react-redux';
import DetailRecruiment from './DetailRecruiment';
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
    Text, ListView, Platform,
    TextInput
} from 'react-native';
class DetailRecruimentContainer extends DetailRecruiment {

    constructor(props) {
        super(props);
        this.state = {
            height: 35, lines: 0,
            scrollY: new Animated.Value(0),
            collapsed: [true, true, true],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            textcomment: "",
            recruiment: {

            },
            
            cvchose: -1,
            dataSourceCV: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            dataSource1: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            dataSource2: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            showDialogCV: false,
            showDialogProfile :false,
            showAgain:false,
            cvte: {
                cvid: "",
                date: formatDate(new Date()),
                candidateid: this.props.user.userid,
                recruimentid: "",
                employerid: "",
                position: []
            },
            stateposition: [false, false, false, false, false]
        }
        this.goBack = this.goBack.bind();
        this.setcollapsed = this.setcollapsed.bind(this);
        this.onShowDialogCV = this.onShowDialogCV.bind(this);
        this.onHideDialogCV = this.onHideDialogCV.bind(this);
        this.onShowDialogProfile = this.onShowDialogProfile.bind(this);
        this.onHideDialogProfile = this.onHideDialogProfile.bind(this);
        this.onCreateCVTE = this.onCreateCVTE.bind(this);
        this.gotoAddComment = this.gotoAddComment.bind(this);
        this.gotoFollower = this.gotoFollower.bind(this);
    };
    gotoFollower(isfollow)
    {
        this.props.onfetchFollow({employerid:this.props.recruiment.company.userid,candidateid:this.props.user.userid,isfollow:isfollow})
    }
    gotoAddComment() {
      
        if (this.state.textcomment.trim() === "") {
            ToastAndroid.show("Vui lòng nhập bình luận muốn gửi .",50)
        } else {
            let userid = this.props.user.userid;
            let recruimentid = this.props.recruiment.id;
            let date = formatDate(new Date())
            this.props.onfetchAddComment({
                userid: userid,
                recruimentid: recruimentid,
                content: this.state.textcomment,
                date: date
            })
            // console.log("PARAM",{
            //     userid: userid,
            //     recruimentid: recruimentid,
            //     content: this.state.textcomment,
            //     date: date
            // })

        }
    }
    checkcvte() {
        if (this.state.cvchose < 0) {
            ToastAndroid.show("Vui Lòng chọn CV muốn gửi", 50);
            return true;
        }
        for (var i = 0; i < this.state.stateposition.length; i++) {
            if (this.state.stateposition[i] === true) {
                return false;
            }
        }
        ToastAndroid.show("Vui Lòng chọn vị trí ứng tuyển", 50);
        return true;
    }
    onCreateCVTE() {
        if (!this.checkcvte()) {
            console.log(this.state.cvte)
            this.props.onfetchAddCVTE(this.state.cvte);
            this.onHideDialogCV()
        }
    }
    onShowDialogCV() {
        this.props.onfetchMyCV({ userid: this.props.user.userid })
        this.setState({
            showDialogCV: true
        })
    }
    onHideDialogProfile() {
        this.setState({
            showDialogProfile: false
        })
    }
    onShowDialogProfile() {
        this.setState({
            showDialogProfile: true
        })
    }
    onHideDialogCV() {
        this.setState({
            showDialogCV: false
        })
    }
    componentDidMount()
    {
       
    }
    componentWillMount() {
        console.log("PP", this.props.id)
        this.props.onFetchCheckUser({ recruimentid: this.props.reid, candidateid: this.props.user.userid });
        

    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.showAgain===true && this.state.showAgain===false)
        {
            
            this.onShowDialogCV()
            this.setState({
                showAgain:true
            })
        }
        if (nextProps.recruiment !== this.props.recruiment) {
            this.props.onfecthProfileCompany({employerid:nextProps.recruiment.company.userid,candidateid:this.props.user.userid})
            var temp = Object.assign({}, nextProps.recruiment)
            temp.job.push({})
            console.log("CLONE", temp)
            this.setState(prevState => ({

                recruiment: temp,
                cvte: {
                    ...prevState.cvte,
                    employerid: nextProps.recruiment.company.userid,
                    recruimentid: nextProps.recruiment.id
                }

            }))


        }
        if (nextProps.resultfollow !== this.props.resultfollow && this.props.resultfollow === false) {

            this.props.onfecthProfileCompany({employerid:nextProps.recruiment.company.userid,candidateid:this.props.user.userid})


        }
        if (nextProps.stateAdding !== this.props.stateAdding && this.props.stateAdding === false) {

            this.props.onFetchCheckUser({ recruimentid: this.props.recruiment.id, candidateid: this.props.user.userid })


        }
        if (nextProps.resultAdding !== this.props.resultAdding && this.props.resultAdding === false) {
            console.log("NO",this.props.recruiment.id)
            this.props.onfetchListComment({ recruimentid: this.props.recruiment.id})
            this.setState({
                textcomment:""
            })


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

    return monthIndex + '-' + day + '-' + year;
}
const mapStateToProps = (state) => {
    return {
        recruiment: selectors.getdetailRecruiment(state),
        user: selectors.getUserInfo(state),
        checkuser: selectors.getCheckUser(state),
        listUserCV: selectors.getListDataCV(state),
        stateAdding: selectors.getStateCVTEAdding(state),
        resultAdding: selectors.getresultComment(state),
        listcomment: selectors.getlistComment(state),
        companyprofile: selectors.getCompanyInfo(state),
        resultfollow : selectors.getResultFollower(state),
        isLoading : selectors.getIsLoadingDetailRecruiment(state)


    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        onFetchCheckUser: (param) => {
            dispatch(actions.fetchCheckUserCVTE(param))
        },
        onfetchMyCV: (param) => {
            dispatch(actions.fetchListCV(param))
        },
        onfetchAddCVTE: (param) => {
            dispatch(actions.fetchAddCVtoEmployer(param))
        },
        onfetchListComment: (param) => {
            dispatch(actions.fetchGetComment(param))
        },
        onfetchAddComment: (param) => {
            dispatch(actions.fetchAddComment(param))
        },
        onfecthProfileCompany:(param) => {
            dispatch(actions.fetchCompanyInfo(param))
        },
        onfetchFollow:(param) => {
            dispatch(actions.fetchFollower(param))
        },
        onfetchDetailCV: (param) => {
            dispatch(actions.fetchDetailCV(param))
        },



    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailRecruimentContainer);