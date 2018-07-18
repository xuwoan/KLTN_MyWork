import { connect } from 'react-redux';
import QuickFilterScreen from './QuickFilterScreen';
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
    Animated,ListView,
    Text,
    TextInput
} from 'react-native';
class QuickFilterScreenContainer extends QuickFilterScreen {
    constructor(props) {
        super(props);
        this.state = {
    
    
    
          activeSection: false,
          collapsed: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
          param: {
            
                            experience: null,
                            gender: null,
                            job: null,
                            typejob: null,
                            major: null,
                            city: null,
                            salarymax: null,
                            salarymin: null,
                            query:"",
                            page:1,
                            firstrequest:true
                        },
          data1: [], data2: [], data3: [], data4: [], data5: [], data6: [], data7: [], data8: [], data9: [], data10: [], data11: [], data12: [], data13: [], data14: [], data15: [], data16: [], data17: [], data18: [], data19: [], data20: [], data21: [], data22: [], data23: [], data24: [],
          datasource1: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }), datasource2: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource3: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource4: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource5: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource6: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource7: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource8: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource9: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource10: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource11: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource12: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource13: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource14: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource15: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource16: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource17: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource18: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource19: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource20: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource21: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          datasource22: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
    
    
        };
        this.setcollapsed = this.setcollapsed.bind(this);
        this.goBack = this.goBack.bind(this);
        this.onfetchUserMajor =this.onfetchUserMajor.bind(this);
       //this.gotoFilter= this.gotoFilter.bind(this);
    
      }
      onfetchUserMajor()
      {
        if(this.props.user.detailcandidate.major.key===null)
        {
          alert("Thông tin của bạn chưa có ngành , vui lòng cập nhật ngành của bạn trong mục thông tin cá nhân")
        }
        else{
          this.setState(prevState => ({
            param: {
                ...prevState.param,
                major: this.props.user.detailcandidate.major.key
            }
        }))
        setTimeout(() => {this.props.onFetchFilterRecruiment(this.state.param)},300);
        setTimeout(()=> {Actions.refresh({ param: this.state.param })}, 500);
        Actions.pop()
          
        }
      }
    componentWillMount() {
      this.filterlistbyname(this.props.listdepartment)
    }
    componentWillReceiveProps(nextProps) {
        // if(this.props.listdepartment!==nextProps.listdepartment)
        // {
        //     console.log("ABC",nextProps.listdepartment);
        // this.filterlistbyname(nextProps.listdepartment)
        // }
    }
    gotoFilter(data)
    {
        this.setState(prevState => ({
            param: {
                ...prevState.param,
                major: data.key
            }
        }))
        setTimeout(() => {this.props.onFetchFilterRecruiment(this.state.param)},200);
        setTimeout(()=> {Actions.refresh({ param: this.state.param })}, 500);
        Actions.pop()
    }
    
}
const mapStateToProps = (state) => {
    return {
        listdepartment: selectors.getlistDepartment(state),
        user :selectors.getUserInfo(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
        onFetchFilterRecruiment: (param) => {
            dispatch(actions.fetchFilterRecruiment(param))
        }
       
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(QuickFilterScreenContainer);