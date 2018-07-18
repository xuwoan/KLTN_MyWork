import { connect } from 'react-redux';
import FilterScreen from './FilterScreen';
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
    Text,
    TextInput
} from 'react-native';
class FilterScreenContainer extends FilterScreen {
    constructor(props) {
        super(props)
        this.state = {
            date: "15-07-2017",

            province: 'Q1',



            check1: false,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            check7: false,
            query: '',
            hideresult: true,
            datajob: [],

            isfemale: true,
            ismale: true,
            experience: { key: 0, name: 'Không' },
            queryjob: '',
            city: { key: 1, name: 'TP HCM' },
            job: { key: null, name: '' },
            typeofjob: { key: null, name: '' },
            major: { key: null, name: '' },
            textsalarymin: 0,
            textsalarymax: 0,


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
            searchedAdresses: [
                { text: 'suggestion1', anotherProperty: 'value' },
                { text: 'suggestion2', anotherProperty: 'value2' }
            ]

        }
        this.onCancel = this.onCancel.bind(this);
        this.onSetEnable = this.onSetEnable.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeJob = this.onChangeJob.bind(this);
        this.AutocompleteJob = this.AutocompleteJob.bind(this);
        this.checkBeforeRequest = this.checkBeforeRequest.bind(this);

    }
    componentWillMount() {
        this.props.onFetchExp();
        this.props.onFetchTypeJob();
        this.props.onFetchDepartment();
        this.setState({datajob:this.props.listjob})
    }
    componentWillReceiveProps(nextProps) {
       
    }
    onChangeJob() {
        this.AutocompleteJob();
        this.refs.modeldropdown.show();


    }
    goBack() {
        
         Actions.pop()
        //this.refs.textinput._root.focus()
    }
    onChangeGender(num) {
        switch (num) {
            case 1:
                if (this.state.isfemale === true) {
                   // console.log(this.state.isfemale + "--" + this.state.ismale)
                    if (this.state.ismale === true)
                        this.setState(prevState => ({
                            param: {
                                ...prevState.param,
                                gender: 2
                            }, ismale: !this.state.ismale,
                        }))
                    else {
                        this.setState(prevState => ({
                            param: {
                                ...prevState.param,
                                gender: 0
                            }, ismale: !this.state.ismale
                        }))
                    }

                }
               // console.log("FF")
                return;
            case 2:
                if (this.state.ismale === true) {
                   // console.log(this.state.isfemale + "--" + this.state.ismale)
                    if (this.state.isfemale === true)
                        this.setState(prevState => ({
                            isfemale: !this.state.isfemale,
                            param: {
                                ...prevState.param,
                                gender: 1
                            }, isfemale: !this.state.isfemale
                        }))
                    else {
                        this.setState(prevState => ({
                            param: {
                                ...prevState.param,
                                gender: 0
                            }, isfemale: !this.state.isfemale
                        }))
                    }
                }

                return;

            default:
                return;
        }
    }
    onTyping(text) {
      //  console.log("TEXT", text)
        var jobs = WORK.filter(function (job) {
        //    console.log("cv", job.work.toLowerCase().startsWith(text.toLowerCase()))
            return job.work.toLowerCase().startsWith(text.toLowerCase())
        }).map(function (job) {
            return job;
        });
        if (text === '')
            jobs = [];
     //   console.log(jobs)
        this.setState({
            datajob: jobs,
            query: text,
            hideresult: false
        });
    }
    AutocompleteJob() {
    //    console.log("LISTJB", this.props.listjob)
    //    console.log("QR JOB", this.state.queryjob)
        var text = this.state.queryjob;
        if (text !== "") {
            var searchedJob = this.props.listjob.filter(function (job) {
                return job.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
     //       console.log("JOBBBBBB", searchedJob)
            if (searchedJob.length > 0)
                this.setState({ datajob: searchedJob });
            else this.setState({ datajob: [{ name: "" }] });
        }
        else {
            this.setState({ datajob: [{ name: "" }] });
        }

    };
    onSelectDropdownCity(idx, value) {
        this.setState(prevState => ({
            param: {
                ...prevState.param,
                city: value.key
            },
            city: {
                ...prevState.city,
                name: value.name,
                key: value.key
            }

        }));
    }


    onSelectDropdownMajor(idx, value) {

        this.setState(prevState => ({
            param: {
                ...prevState.param,
                major: value.key
            },
            major: {
                ...prevState.major,
                name: value.name,
                key: value.key
            }
        }));

    }
    onSelectDropdownJob(idx, value) {
     //   console.log(value)
        this.setState(prevState => ({
            param: {
                ...prevState.param,
                job: value.key
            },
            queryjob: value.name,
            job: {
                ...prevState.job,
                name: value.name,
                key: value.key
            }

        }));
       
    }
    onSelectDropdownExperience(idx, value) {
    //    console.log("VALUE", value)
        this.setState(prevState => ({
            param: {
                ...prevState.param,
                experience: value.key
            },
            experience: {
                ...prevState.experience,
                name: value.name,
                key: value.key
            }

        }));
     //   setTimeout(() => { console.log("STATE", this.state.param) }, 1000);

    }
    onSelectDropdownTypeofJob(idx, value) {
     //   console.log("VALUE", value)
        this.setState(prevState => ({
            param: {
                ...prevState.param,
                typejob: value.key
            },
            typeofjob: {
                ...prevState.typeofjob,
                name: value.name,
                key: value.key
            }

        }));
    //    setTimeout(() => { console.log("STATE", this.state.param) }, 1000);

    }
    onCancel() {
        Actions.pop();
    }
    checkBeforeRequest()
    {
        if(this.state.param.salarymax===0&&this.state.param.salarymin===0 && this.state.check2==false)
        {
            this.setState(prevState => ({
                param: {
                    ...prevState.param,
                    salarymax: null,
                    salarymin:null
                }
            }))
        }
        if( this.state.check1===true && this.state.param.job===null)
        {
            alert("Vui lòng chọn tên công việc")
        }else
        if( this.state.check2===true && this.state.param.salarymax===0)
        {
            alert("Vui lòng nhập đủ phần salary")
        }else
        if( this.state.check4===true && this.state.param.major===null)
        {
            alert("Vui lòng chọn ngành")
        }else
        if( this.state.check7===true && this.state.param.typejob===null)
        {
            alert("Vui lòng chọn hình thức làm việc")
        }else{
            this.props.onFetchFilterRecruiment(this.state.param)
            // setTimeout(() => { console.log("OK")
                setTimeout(()=> {Actions.refresh({ param: this.state.param })}, 500);
                Actions.pop() 
          

            // },500);
        }

    }
    
}
const mapStateToProps = (state) => {
    return {
        listdepartment: selectors.getlistDepartment(state),
        listtypejob: selectors.getlistTypeJob(state),
        listjob: selectors.getlistJob(state),
        listprovince: selectors.getlistProvince(state),
        listexperience: selectors.getlistExperience(state),
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchExp: (param) => {
            dispatch(actions.fetchListExperience(param))
        },
        onFetchTypeJob: (param) => {
            dispatch(actions.fetchListTypeJob(param))
        },
        onFetchDepartment: () => {
            dispatch(actions.fetchListDepartment())
        },
        onFetchFilterRecruiment: (param) => {
            dispatch(actions.fetchFilterRecruiment(param))
        }

       
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterScreenContainer);