import { connect } from 'react-redux';
import ReviewCVScreen from './ReviewCVScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
  
    TouchableOpacity, ToastAndroid,ListView
   
} from 'react-native';
class ReviewCVScreenContainer extends ReviewCVScreen {

    constructor(props) {
        super(props);
        this.state = {
            dataSource1: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            dataSource2: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            dataSource3: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            dataSource4: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
           
        }
        this.goBack = this.goBack.bind();
        
    };
    componentWillReceiveProps(nextProps) {
        
    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state),
        detailcv:selectors.getDataDetail(state)


    }
};

const mapDispatchToProps = (dispatch) => {
    return {

      


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewCVScreenContainer);