import { connect } from 'react-redux';
import PublicCV from './PublicCV';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {


    ActivityIndicator, ListView,
    TouchableOpacity, ToastAndroid,

} from 'react-native';
class PublicCVContainer extends PublicCV {
    constructor(props) {
        super(props);
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),

            job: "",
            department: "Thương Mại",
            paramcv: {
                userid: this.props.user.userid,
                active: false,
                dep_id: 0,
                job: ""
            },
            disable_but: true
        };
       

    }
    componentWillMount() {

    }
    onFetchActive(delay) {
        if(this.props.cvaldready===1)
        {
            console.log("NOOOO")
        if (delay) {
            setTimeout(() => { this.props.onfetchActiveCVPublic(this.state.paramcv) }, 500)

        }
        else {
            if (this.state.paramcv.job.trim()!=="")
                this.props.onfetchActiveCVPublic(this.state.paramcv)
                else{
                    ToastAndroid.show("Tên công việc không thể bỏ trống",50)
                }
        }
        }
        else{
            ToastAndroid.show("Vui lòng đặt CV chính ",50)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.usercvpublic !== this.props.usercvpublic) {
           
            if (nextProps.usercvpublic.active !== undefined) {
                this.setState(prevState => ({
                    paramcv: {
                        ...prevState.paramcv,
                        userid: this.props.user.userid,
                        active: nextProps.usercvpublic.active,
                        dep_id: nextProps.usercvpublic.dep_id,
                        job: nextProps.usercvpublic.job
                    },
                    department: nextProps.usercvpublic.dep_name
                }))
                
            }
        }
        if(nextProps.resultactive===true && this.props.resultactive===false)
        {
            this.props.onfetchUserCVPublic({userid:this.props.user.userid})
            this.setState({
                disable_but:true
            })
        } else
        if(nextProps.resultactive===false && this.props.resultactive===false && nextProps.resulerror===true)
        {
            console.log("COME DE",this.refs.switch)
           
            this.refs.switch.toggle()
        }

    }
    gotoDetailNew(value) {

    }
    goBack() {
        this.props.onfetchUserCVPublic({userid:this.props.user.userid})
        Actions.pop()

        //this.refs.textinput._root.focus()
    }
    onSelectDropdownMajor(idx, value) {
        this.setState(prevState => ({
            paramcv: {
                ...prevState.paramcv,
                dep_id: value.key


            },
            department: value.name


        }));
        if (this.props.usercvpublic.dep_id !== value.key) {
            this.setState({
                disable_but: false
            })
        }
        // this.setState({
        //     index: 1
        // });
        // console.log("1AA", this)
    }
}
const mapStateToProps = (state) => {
    return {
        listmajor: selectors.getlistDepartment(state),
        user: selectors.getUserInfo(state),
        usercvpublic: selectors.getuserCVPublic(state),
        resultactive:selectors.getresultActive(state),
        resulerror:selectors.getisError(state),
        cvaldready :selectors.getCVAldready(state),

        // list1: selectors.getlistNews1(state),
        // list2: selectors.getlistNews2(state),
        // dataanalysis: selectors.getdataAnalysis(state),

    }
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
const mapDispatchToProps = (dispatch) => {
    return {
        onfetchActiveCVPublic: (param) => {
            dispatch(actions.fetchActiveCVPublic(param))
        },
        onfetchUserCVPublic: (param) => {
            dispatch(actions.fetchUserCVPublic(param))
        },

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PublicCVContainer);