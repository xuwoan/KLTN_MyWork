import { connect } from 'react-redux';
import InfoScreen from './InfoScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {


    ActivityIndicator, ListView,
    TouchableOpacity, ToastAndroid,

} from 'react-native';
class InfoScreenContainer extends InfoScreen {
    constructor(props) {
        super(props);
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),

            page1: 1,
            page2: 1

        };
        this.gotoDetailNew = this.gotoDetailNew.bind(this);
        this.goNextPage1 = this.goNextPage1.bind(this);
        this.goNextPage2 = this.goNextPage2.bind(this);
        this.goPreviousPage1 = this.goPreviousPage1.bind(this);
        this.goPreviousPage2 = this.goPreviousPage2.bind(this);
    }
    componentWillMount() {
        this.props.onfetchAnalysis();
        this.props.onfetchListNews1({ type: 1, page: this.state.page1 });
        this.props.onfetchListNews2({ type: 2, page: this.state.page2 });
        console.log("PROPs", this.props.list1)
    }
    componentWillReceiveProps(nextProps) {

    }
    gotoDetailNew(value) {
        console.log("VL", value)
        this.props.fetchdetailNews({ id: value.id })
        Actions.tab_detailinfo()
    }
    goNextPage1() {
        this.setState({
            page1: Math.min(this.state.page1 + 1,this.props.amount1)
        })
        setTimeout(()=>{
            this.props.onfetchListNews1({ type: 1, page: this.state.page1 });
        },200)
    }
    goNextPage2() {
        this.setState({
            page2: Math.min(this.state.page2 + 1,this.props.amount2)
        })
        setTimeout(()=>{
            this.props.onfetchListNews1({ type: 2, page: this.state.page2 });
        },200)
    }
    goPreviousPage1() {
        this.setState({
            page1: Math.max(this.state.page1 - 1,1)
        })
        setTimeout(()=>{
            this.props.onfetchListNews1({ type: 1, page: this.state.page1 });
        },200)
    }
    goPreviousPage2() {
        this.setState({
            page1: Math.max(this.state.page2 - 1,1)
        })
        setTimeout(()=>{
            this.props.onfetchListNews1({ type: 2, page: this.state.page2 });
        },200)
    }
}
const mapStateToProps = (state) => {
    return {
        list1: selectors.getlistNews1(state),
        list2: selectors.getlistNews2(state),
        dataanalysis: selectors.getdataAnalysis(state),
        isLoadingAnalysis: selectors.getisLoadingAnalysis(state),
        isLoadingNews1: selectors.getIsLoadingNews1(state),
        isLoadingNews2: selectors.getIsLoadingNews2(state),
        amount1: selectors.getNewsAmount1(state),
        amount2: selectors.getNewsAmount2(state)

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchAnalysis: (param) => {
            dispatch(actions.fetchDataAnalysis(param))
        },
        onfetchDetailNews: (param) => {
            dispatch(actions.fetchDetailNews(param))
        },
        onfetchListNews1: (param) => {
            dispatch(actions.fetchAllNews1(param))
        },
        onfetchListNews2: (param) => {
            dispatch(actions.fetchAllNews2(param))
        },
        fetchdetailNews: (params) => {
            dispatch(actions.fetchDetailNews(params))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoScreenContainer);