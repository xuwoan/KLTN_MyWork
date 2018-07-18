import { connect } from 'react-redux';
import CandidateInfoScreen from './CandidateInfoScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
// var ImagePicker = require('react-native-image-picker');
import ImagePicker from 'react-native-image-crop-picker';
import {
    StyleSheet,
    View,
    Image,
    Easing,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, ToastAndroid,
    Animated,
    Text,
    TextInput
} from 'react-native';

var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Your Photo' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class CandidateInfoScreenContainer extends CandidateInfoScreen {
    constructor(props) {
        super(props)
        this.state = {

            showDialog: false,
            showDialogChangeUserName:false,
            imagedata: '',
            hideresult: true,
            datajob: [],
            confirmpassword: "",

            change: false,
            user: {},
            params1: {
                type: 2,
                userid: "",
                usertype: 0,
                detail: {},
                changeimage: false,
                image: {
                    data: "",
                    type: ""
                }
            },
            params2: {
                type: 1,
                userid: "",
                password: "",
                newpassword: ""

            },


        }
        this.onShowDialog = this.onShowDialog.bind(this);
        this.onHideDialog = this.onHideDialog.bind(this);
        this.onSelectPicture = this.onSelectPicture.bind(this);
        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
        this.onSubmitUpdatePassword = this.onSubmitUpdatePassword.bind(this);

    }
    onSubmitUpdate() {
        console.log("STATE", this.state.params1)
        this.props.fetchUpdateUser(this.state.params1)
    }
    onSubmitUpdatePassword() {
        if (this.state.confirmpassword !== this.state.params2.newpassword) {
            ToastAndroid.show("Xác nhận mật khẩu mới không trùng", 50)
        }
        else {
            console.log("STATE", this.state.params2)
            this.props.fetchUpdateUser(this.state.params2)
        }
    }
    onSelectPicture() {
        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);

        //     if (response.didCancel) {
        //       console.log('User cancelled image picker');
        //     }
        //     else if (response.error) {
        //       console.log('ImagePicker Error: ', response.error);
        //     }
        //     else if (response.customButton) {
        //       console.log('User tapped custom button: ', response.customButton);
        //     }
        //     else {
        //       let source = { uri: response.uri };

        //       // You can also display the image using data:
        //       // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        //       this.setState({
        //         imagedata: source
        //       });
        //     }
        //   }); 
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true,
        }).then(image => {
            let source = { uri: image.path };
            this.setState({

                imagedata: source,

            });
            this.setState(prevState => ({
                params1: {
                    ...prevState.params1,
                    changeimage: true,
                    image: {
                        ...prevState.params1.image,
                        data: image.data,
                        type: image.mime
                    }
                }, imagedata: source, change: true
            }))
            console.log(image);
        }).catch(e => console.log(e));
    }
    goBack() {
        Actions.pop()
    }
    onShowDialog() {
        this.setState({
            showDialog: true
        })
    }
    onHideDialog() {
        this.setState({
            showDialog: false
        })
    }

    componentWillMount() {
        var temp = Object.assign({}, this.props.user)
        console.log("CLONE USER", temp)
        this.setState(prevState => ({
            user: temp,
            params1: {
                ...prevState.params1,
                detail: temp.detailcandidate,
                userid: temp.userid

            },
            params2:{
                ...prevState.params2,
                userid: temp.userid
            }
        }))
    }
    onSelectDropdownMajor(idx, value) {

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                detailcandidate: {
                    ...prevState.user.detailcandidate,
                    major: {
                        ...prevState.user.detailcandidate.major,
                        key: value.key,
                        name: value.name
                    }
                }
            },
            params1: {
                ...prevState.params1,
                detail: {
                    ...prevState.params1.detail,
                    major: {
                        ...prevState.params1.detail.major,
                        key: value.key,
                        name: value.name
                    }
                }

            }, change: value.key !== this.props.user.detailcandidate.major.key ? true : false

        }));

    }
    onSelectDropdownCity(idx, value) {

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                detailcandidate: {
                    ...prevState.user.detailcandidate,
                    address: {
                        ...prevState.user.detailcandidate.address,
                        city: {
                            ...prevState.user.detailcandidate.address.city,
                            key: value.key,
                            name: value.name
                        }

                    }
                }
            },
            params1: {
                ...prevState.params1,
                detail: {
                    ...prevState.params1.detail,
                    address: {
                        ...prevState.params1.detail.address,
                        city: {
                            ...prevState.params1.detail.address.city,
                            key: value.key,
                            name: value.name
                        }

                    }
                }

            }, change: value.key !== this.props.user.detailcandidate.address.city.key ? true : false


        }));

    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.success!==this.props.success && nextProps.success===true)
        {
            this.setState({
                showDialog: false,
            })
        }

    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state),
        listprovince: selectors.getlistProvince(state),
        listdepartment: selectors.getlistDepartment(state),
        success:selectors.getSuccess(state)

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUpdateUser: (params) => {
            dispatch(actions.fetchUpdateUser(params))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CandidateInfoScreenContainer);