import { connect } from 'react-redux';
import PostScreen from './PostScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    ToastAndroid,
    ListView
} from 'react-native';
var colorchoose = 'white';
var backgroundColorchoose = "#60819E"

var colornonchoose = 'gray';
var backgroundColornonchoose = "white"
var d = new Date();
class PostScreenContainer extends PostScreen {
    constructor(props) {
        super(props);
       
        
        
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            value: 0,
            major: "",
            typejob: "",
            experience: "",
            isfemale: true,
            ismale: true,
            showDialog:false,
            colorPost: colorchoose,
            colorSee: colornonchoose,
            backgroundColorPost: backgroundColorchoose,
            backgroundColorSee: backgroundColornonchoose,
            statejob: 1,
            numjob: 1,
            datajob: [],
            lastindex: 1,
            province: [],
            salary: false,
            queryjob: '',
            textjob: {
                experience: "Không yêu cầu",
                major: "",
                typejob: "",
                queryjob: "",
                isfemale: true,
                ismale: true,
                salary: false,
                amount: "1",
                textsalary: "0",
                textother: "Thương lượng",




            },
            province: this.props.listprovince,
            /////////////////////////////////////////////

            ////////////////////////////////////////////////
            currenttextjob: {},

            post: {
                getcv:false,
                title: "",
                detail: "",
                contact: "",
                deadline: "",
                active: true,
                date:  d.getFullYear()+ "-" + (d.getMonth()+1) + "-" +d.getDate()  ,
                userid: "",
                rate: 0,
                job: [],

            },
            currentjob: {},

            jobarray: [],
            textjobarray: [],
            job: {
                require:
                {
                    experienceKey: null,
                    genderKey: 0,
                    other: ""
                },
                info:
                {
                    address:
                    {
                        address: "",
                        cityKey: []
                    },
                    amount: 1
                    ,
                    salary: {
                        salary: null,
                        other: "Thương lượng"
                    },
                    jobKey: null,
                    majorKey: null,
                    typeKey: null
                }
            },
            job1: {
                require:
                {
                    experienceKey: 0,
                    genderKey: 0,
                    other: ""
                },
                info:
                {
                    address:
                    {
                        address: "",
                        cityKey: []
                    },
                    amount: 1
                    ,
                    salary: {
                        salary: null,
                        other: "Thương lượng"
                    },
                    jobKey: null,
                    majorKey: null,
                    typeKey: null
                }
            },
            job2: {
                require:
                {
                    experienceKey: 0,
                    genderKey: 0,
                    other: ""
                },
                info:
                {
                    address:
                    {
                        address: "",
                        cityKey: []
                    },
                    amount: 1
                    ,
                    salary: {
                        salary: null,
                        other: "Thương lượng"
                    },
                    jobKey: null,
                    majorKey: null,
                    typeKey: null
                }
            },
            job3: {
                require:
                {
                    experienceKey: 0,
                    genderKey: 0,
                    other: ""
                },
                info:
                {
                    address:
                    {
                        address: "",
                        cityKey: []
                    },
                    amount: 1
                    ,
                    salary: {
                        salary: null,
                        other: "Thương lượng"
                    },
                    jobKey: null,
                    majorKey: null,
                    typeKey: null
                }
            }
            ,
            textjob1: {

            },
            textjob2: {

            },
            textjob3: {

            }
            // listgender:[
            //     {key:0,name:"Không yêu cầu"},
            //     {key:1,name :"Nam"},
            //     {key:2,name:"Nữ"},

            // ]
        };

        this.selectConfirm = this.selectConfirm.bind(this);
        this.onChangeJob = this.onChangeJob.bind(this);
        this.onSetSalary = this.onSetSalary.bind(this);
        this.onSetOtherSalary = this.onSetOtherSalary.bind(this);
        this.gotoAddingRecruiment = this.gotoAddingRecruiment.bind(this);
        this.onHideDialog = this.onHideDialog.bind(this);






    }
    onHideDialog()
    {
        this.setState({
            showDialog:false
        })
    }
    gotoAddingRecruiment() {
        console.log("POST", this.state.post)
        console.log("JOB", this.state.currentjob)
        console.log("JOB1", this.state.job1)
        console.log("JOB2", this.state.job2)
        console.log("JOB3", this.state.job3)
        if (this.state.post.title.trim() === "" || this.state.post.contact.trim() === "") {
            alert("Vui lòng nhập đủ thông tin")
        }
        else {
            if (this.state.numjob === 1) {
                if (this.checkjob(this.state.job1, 1) === false) {
                    console.log("ok 1");
                    var listjob =[];
                    listjob.push(this.state.job1) 
                    setTimeout(() => {this.setState(prevState => ({
                        post: {
                            ...prevState.post,
                            job: listjob
                        },
            
                       
            
                    })),1000})
                    setTimeout(() => {this.props.fetchaddRecruiment(this.state.post)
                        console.log(this.state.post)},2000)
                }
            }
            else if (this.state.numjob === 2) {
                if(this.checkjob(this.state.job1, 1)===false && this.checkjob(this.state.job2, 2)===false)
                {
                    console.log("ok 2");
                    var listjob =[];
                    listjob.push(this.state.job1) 
                    listjob.push(this.state.job2) 
                   
                    setTimeout(() => {this.setState(prevState => ({
                        post: {
                            ...prevState.post,
                            job: listjob
                        },
            
                       
            
                    })),1000})
                    setTimeout(() => {this.props.fetchaddRecruiment(this.state.post)
                        console.log(this.state.post)},2000)
                }
            }
            else if (this.state.numjob === 3) {
                if(this.checkjob(this.state.job1, 1)===false && this.checkjob(this.state.job2, 2)===false && this.checkjob(this.state.job3, 3)===false)
                {
                    console.log("ok 3");
                    var listjob =[];
                    listjob.push(this.state.job1) 
                    listjob.push(this.state.job2) 
                    listjob.push(this.state.job3) 
                    setTimeout(() => {this.setState(prevState => ({
                        post: {
                            ...prevState.post,
                            job: listjob
                        },
            
                       
            
                    })),1000})
                    setTimeout(() => {
                        this.props.fetchaddRecruiment(this.state.post)
                        console.log(this.state.post)},2000)
                }
            }
        }
        this.setState({
            showDialog:false
        })
    }
    checkjob(job, num) {
        if (job.info.jobKey === null || job.info.typeKey === null || (job.info.salary.salary === null && job.info.salary.other===null)
            || (job.info.salary.salary!==null && job.info.salary.salary === 0) || job.info.amount === 0 || job.info.address.cityKey.length <= 0 || job.info.address.address.trim() === "") {
            alert("Vui lòng nhập đủ thông tin công việc " + num)
            return true;
        }
        else return false;
    }
    onChangeJob() {
        this.AutocompleteJob();
        this.refs.modeldropdown.show();


    }
    AutocompleteJob() {
        console.log("LISTJB", this.props.listjob)
        console.log("QR JOB", this.state.queryjob)
        var text = this.state.currenttextjob.queryjob;
        if (text !== "") {
            var searchedJob = this.props.listjob.filter(function (job) {
                return job.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            console.log("JOBBBBBB", searchedJob)
            if (searchedJob.length > 0)
                this.setState({ datajob: searchedJob });
            else this.setState({ datajob: [{ name: "" }] });
        }
        else {
            this.setState({ datajob: [{ name: "" }] });
        }

    }
    componentWillMount() {
        this.props.fetchlistExperience();
        this.props.fetchlistTypeJob();
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                userid: this.props.user.userid
            },

            currentjob: this.state.job,

            textjob1: this.state.textjob,
            textjob2: this.state.textjob,
            textjob3: this.state.textjob,


            currenttextjob: this.state.textjob,

        }))



    }
    componentWillReceiveProps(nextProps) {
        if(this.props.result !== nextProps.result && this.props.result ===false)
        {
            this.setState(prevState => ({
                post: {
                    ...prevState.post,
                    userid: this.props.user.userid
                },
    
                 
                textjob1: this.state.textjob,
                textjob2: this.state.textjob,
                textjob3: this.state.textjob,
                currentjob:{
                    require:
                    {
                        experienceKey: 0,
                        genderKey: 0,
                        other: ""
                    },
                    info:
                    {
                        address:
                        {
                            address: "",
                            cityKey: []
                        },
                        amount: 1
                        ,
                        salary: {
                            salary: null,
                            other: "Thương lượng"
                        },
                        jobKey: null,
                        majorKey: null,
                        typeKey: null
                    }
                },
                job1: {
                    require:
                    {
                        experienceKey: 0,
                        genderKey: 0,
                        other: ""
                    },
                    info:
                    {
                        address:
                        {
                            address: "",
                            cityKey: []
                        },
                        amount: 1
                        ,
                        salary: {
                            salary: null,
                            other: "Thương lượng"
                        },
                        jobKey: null,
                        majorKey: null,
                        typeKey: null
                    }
                },
                job2: {
                    require:
                    {
                        experienceKey: 0,
                        genderKey: 0,
                        other: ""
                    },
                    info:
                    {
                        address:
                        {
                            address: "",
                            cityKey: []
                        },
                        amount: 1
                        ,
                        salary: {
                            salary: null,
                            other: "Thương lượng"
                        },
                        jobKey: null,
                        majorKey: null,
                        typeKey: null
                    }
                },
                job3: {
                    require:
                    {
                        experienceKey: 0,
                        genderKey: 0,
                        other: ""
                    },
                    info:
                    {
                        address:
                        {
                            address: "",
                            cityKey: []
                        },
                        amount: 1
                        ,
                        salary: {
                            salary: null,
                            other: "Thương lượng"
                        },
                        jobKey: null,
                        majorKey: null,
                        typeKey: null
                    }
                },
                post: {
                    title: "",
                    detail: "",
                    contact: "",
                    deadline: "",
                    getcv:false,
                    active: true,
                    date:  d.getFullYear()+ "-" + (d.getMonth()+1) + "-" +d.getDate()  ,
                    userid: this.props.user.userid,
                    rate: 0,
                    job: [],
    
                },
                currenttextjob: this.state.textjob,
    
            }))
            this.props.onfetchMyRecruiment({userid:this.props.user.userid})
            this.props.resetresultRecruiment()
        }
    }
    gotoDefault() {
        this.props.fetchlistRecruiment();
    }
}
const mapStateToProps = (state) => {
    return {

        listjob: selectors.getlistJob(state),
        listexperience: selectors.getlistExperience(state),
        listmajor: selectors.getlistDepartment(state),
        listtypejob: selectors.getlistTypeJob(state),
        listprovince: selectors.getlistProvince(state),
        user: selectors.getUserInfo(state),
        result:selectors.getresultRecruiment(state)


    }
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
const mapDispatchToProps = (dispatch) => {
    return {

        fetchlistExperience: () => {
            dispatch(actions.fetchListExperience())
        },
        fetchlistTypeJob: () => {
            dispatch(actions.fetchListTypeJob())
        },
        fetchaddRecruiment:(params) =>{
            dispatch(actions.fetchAddRecruiment(params))
        },
        resetresultRecruiment:(params) =>{
            dispatch(actions.resetResultAddRecruiment(params))
        },
        onfetchMyRecruiment: (param) => {
            dispatch(actions.fetchUserRecruiment(param))
        },


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PostScreenContainer);