import { connect } from 'react-redux';
import DetailPost from './DetailPost';
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
class DetailPostContainer extends DetailPost {
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
                type:2,
                getcv:null,
                id:"",
                title: "",
                detail: "",
                contact: "",
                deadline: "",
                active: true,
                date: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
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
        this.onSubmitUpdate= this.onSubmitUpdate.bind(this);






    }
    
    onSubmitUpdate() {
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
                    var listjob = [];
                    listjob.push(this.state.job1)
                    setTimeout(() => {
                        this.setState(prevState => ({
                            post: {
                                ...prevState.post,
                                job: listjob
                            },



                        })), 1000
                    })
                    setTimeout(() => {
                        this.props.onresetUpdateRecruiment();
                        this.props.onupdateRecruiment(this.state.post)
                        console.log(this.state.post)
                    }, 2000)
                }
            }
            else if (this.state.numjob === 2) {
                if (this.checkjob(this.state.job1, 1) === false && this.checkjob(this.state.job2, 2) === false) {
                    console.log("ok 2");
                    var listjob = [];
                    listjob.push(this.state.job1)
                    listjob.push(this.state.job2)

                    setTimeout(() => {
                        this.setState(prevState => ({
                            post: {
                                ...prevState.post,
                                job: listjob
                            },



                        })), 1000
                    })
                    setTimeout(() => {
                        this.props.onresetUpdateRecruiment();
                        this.props.onupdateRecruiment(this.state.post)
                        console.log(this.state.post)
                    }, 2000)
                }
            }
            else if (this.state.numjob === 3) {
                if (this.checkjob(this.state.job1, 1) === false && this.checkjob(this.state.job2, 2) === false && this.checkjob(this.state.job3, 3) === false) {
                    console.log("ok 3");
                    var listjob = [];
                    listjob.push(this.state.job1)
                    listjob.push(this.state.job2)
                    listjob.push(this.state.job3)
                    setTimeout(() => {
                        this.setState(prevState => ({
                            post: {
                                ...prevState.post,
                                job: listjob
                            },



                        })), 1000
                    })
                    setTimeout(() => {
                        this.props.onresetUpdateRecruiment();
                        this.props.onupdateRecruiment(this.state.post)
                        console.log(this.state.post)
                    }, 2000)
                }
            }
        }
    }
    checkjob(job, num) {
        if (job.info.jobKey === null  || job.info.typeKey === null || (job.info.salary.salary === null && job.info.salary.other === null)
            || (job.info.salary.salary !== null && job.info.salary.salary === 0) || job.info.amount === 0 || job.info.address.cityKey.length <= 0 || job.info.address.address.trim() === "") {
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
    goBack() {
        Actions.pop()
    }
    componentWillMount() {
        this.props.fetchlistExperience();
        this.props.fetchlistTypeJob();
        this.setState(prevState => ({
          

            currentjob: this.state.job,

            textjob1: this.state.textjob,
            textjob2: this.state.textjob,
            textjob3: this.state.textjob,


            currenttextjob: this.state.textjob,

        }))
        this.props.fetchuserDetailRecruiment({id:this.props.idpost})



    }
    componentWillReceiveProps(nextProps) {
        if (this.props.mydetailrecruiment !== nextProps.mydetailrecruiment) {
            
                this.setState(prevState => ({

                    textjob1: nextProps.mydetailrecruiment.text[0],
                    currenttextjob: nextProps.mydetailrecruiment.text[0],
                    currentjob: nextProps.mydetailrecruiment.message.job[0],
                    job1:nextProps.mydetailrecruiment.message.job[0],
                    post: {
                        ...prevState.post,
                        id:nextProps.mydetailrecruiment.message._id,
                        title: nextProps.mydetailrecruiment.message.title,
                        detail: nextProps.mydetailrecruiment.message.detail,
                        contact: nextProps.mydetailrecruiment.message.contact,
                        deadline: nextProps.mydetailrecruiment.message.deadline,
                        active: nextProps.mydetailrecruiment.message.active,
                        date: nextProps.mydetailrecruiment.message.date,
                        userid: nextProps.mydetailrecruiment.message.userid,
                        rate: nextProps.mydetailrecruiment.message.rate,
                        getcv :  nextProps.mydetailrecruiment.message.getcv,
                    }
                }))
            if (nextProps.mydetailrecruiment.message.job.length === 2) {
                this.setState({
                   
                    textjob2: nextProps.mydetailrecruiment.text[1],
                    job2:nextProps.mydetailrecruiment.message.job[1],
                    numjob:2
                })
            }
            else if(nextProps.mydetailrecruiment.message.job.length === 3)
            {
                this.setState({
                    
                     textjob2: nextProps.mydetailrecruiment.text[1],
                     job2:nextProps.mydetailrecruiment.message.job[1],
                     textjob3: nextProps.mydetailrecruiment.text[2],
                     job3:nextProps.mydetailrecruiment.message.job[2],
                     numjob:3
                    
                 })
            }
            
        }
        if (this.props.resultupdate !== nextProps.resultupdate &&this.props.resultupdate===false) {
            ToastAndroid.show("Update Recruiment successfull !!", 50)
           
            this.props.onfetchMyRecruiment({userid:this.props.user.userid});
            Actions.pop();
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
        mydetailrecruiment: selectors.getuserDetailRecruiment(state),
        textdetailrecruiment: selectors.gettextDetailRecruiment(state),
        resultupdate : selectors.getresultUpdateRecruiment(state),
        isLoadingDetail: selectors.getIsLoadingDetailUserRecruiment(state),


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
        fetchuserDetailRecruiment: (params) => {
            dispatch(actions.fetchUserDetailRecruiment(params))
        },
        onupdateRecruiment: (param) => {
            dispatch(actions.fetchUpdateRecruiment(param))
        },
        onresetUpdateRecruiment: (param) => {
            dispatch(actions.resetResultUpdateRecruiment(param))
        },
        onfetchMyRecruiment: (param) => {
            dispatch(actions.fetchUserRecruiment(param))
        },


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPostContainer);