import { connect } from 'react-redux';
import DetailNews from './DetailNews';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
  
    TouchableOpacity, ToastAndroid,
   
} from 'react-native';
class DetailNewsContainer extends DetailNews {

    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.goBack = this.goBack.bind();
        
    };
    componentWillReceiveProps(nextProps) {
        
    }
}
const mapStateToProps = (state) => {
    return {
        news: selectors.getdetailNews(state),
        isLoading : selectors.getIsLoadingDetailNews(state)


    }
};

const mapDispatchToProps = (dispatch) => {
    return {

      


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailNewsContainer);