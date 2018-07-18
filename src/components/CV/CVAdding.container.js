import { connect } from 'react-redux';
import CVAdding from './CVAdding';
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
import { compose } from 'redux';
var colornonchoose = 'gray';
var backgroundColornonchoose = "white"
var d = new Date();
class CVAddingContainer extends CVAdding {
   
    constructor(props) {
        super(props);
       
        
        console.log("NEW",this)
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
            }),
            index:0,
            showDialog:false,
            purestate:{
                cvname:"",
                resume:{}
            },
            cvname:"CV của tôi",
            resume:{
                profile :{
                    name:"",
                    address:{
                        address:"",
                        key:null
                    },
                    phone:"",
                    email:"",
                    birthday:"",
                },
                target:"",
                education:[],
                skill:[

                ],
                experience:[],
                certificate:[]
            },
            
            numOfEducation:1,
            dataEducation:[{
                startYear:"",
                endYear:"",
                place:"",
                degree:"",
                department:""
                
            }],
            numOfSkill:1,
            dataSkill:[{
                name:"",
                rate:0
              
            }],
            numOfExperience:1,
            dataExperience:[{
                startYear:"",
                endYear:"",
                place:"",   
                rank : ""
                
              
            }],
            numOfCertificate:0,
            dataCertificate:[
            //     {
            //     year:"",          
            //     name : ""    
            // }
             ]
           
           
        }
        this.onShowDialog = this.onShowDialog.bind(this);
        this.onHideDialog = this.onHideDialog.bind(this);
        this.onSubmitdataCV =  this.onSubmitdataCV.bind(this);
       
    





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
    onSubmitdataCV()
    {
        if(this.state.cvname.trim()==="")
        {
            ToastAndroid.show("Tên CV khổng thể bỏ trống",50)
        }
        else{
            this.props.fetchCreateCV({cvname:this.state.cvname,date:d.getFullYear()+ "-" + (d.getMonth()+1) + "-" +d.getDate(),userid:this.props.user.userid,maincv:false,resume:this.state.resume})
        }
    }
    componentWillMount() {
       
        this.setState(prevState => ({
            resume: {
                ...prevState.resume,
                profile: {
                    ...prevState.resume.profile,
                    name: this.props.user.detailcandidate.name,
                    address:this.props.user.detailcandidate.address.city,
                    email: this.props.user.detailcandidate.email,
                    phone: this.props.user.detailcandidate.phone,
                    birthday: this.props.user.detailcandidate.birthday

                }
            },
            purestate:{
                ...prevState.purestate,
                cvname:this.state.cvname,
                resume:this.state.resume
            }


        }))
        setTimeout(() => { 
            this.setState(prevState => ({
               
                purestate:{
                    ...prevState.purestate,
                    cvname:this.state.cvname,
                    resume:this.state.resume
                }
    
    
            }))
        },100)
      



    }
    CheckdataProfile()
    {
      
        if(this.state.resume.profile.name.trim()===""||this.state.resume.profile.email.trim()===""||this.state.resume.profile.phone.trim()==="")
        {
         
            ToastAndroid.show("Vui lòng điền đủ thông tin cá nhân", 50);
            return true;
        }
        else return false;
    }
    CheckdataExperience()
    {
        for(var i = 0 ; i<this.state.resume.experience.length;i++)
        {
   
            if(this.state.resume.experience[i].startYear.trim()===""||this.state.resume.experience[i].endYear.trim()===""
            || this.state.resume.experience[i].place.trim()===""||this.state.resume.experience[i].rank.trim()==="" )
            {
                ToastAndroid.show("Vui lòng điền đủ thông tin kinh nghiệm", 50);
                return true;
            }
        }
        return false;
    }
    CheckdataSkill()
    {
        for(var i = 0 ; i<this.state.resume.skill.length;i++)
        {
   
            if(this.state.resume.skill[i].name.trim()===""||this.state.resume.skill[i].rate===0)
            {
                ToastAndroid.show("Vui lòng điền đủ thông tin kỹ năng", 50);
                return true;
            }
        }
        return false;
    }
    CheckdataEducation()
    {
   
        for(var i = 0 ; i<this.state.resume.education.length;i++)
        {
   
            if(this.state.resume.education[i].startYear.trim()===""||this.state.resume.education[i].endYear.trim()===""
            || this.state.resume.education[i].place.trim()===""||this.state.resume.education[i].degree.trim()==="" 
            ||this.state.resume.education[i].department.trim()==="" )
            {
                ToastAndroid.show("Vui lòng điền đủ thông tin học vấn", 50);
                return true;
            }
        }
        return false;
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.addingState !== nextProps.addingState && this.props.addingState ===false)
        {
            this.props.onfetchMyCV({ userid: this.props.user.userid })
            this.setState({
                showDialog:false,
                cvname: this.state.purestate.cvname,
                resume:this.state.purestate.resume,
                numOfEducation:1,
                dataEducation:[{
                    startYear:"",
                    endYear:"",
                    place:"",
                    degree:"",
                    department:""
                    
                }],
                numOfSkill:1,
                dataSkill:[{
                    name:"",
                    rate:0
                  
                }],
                numOfExperience:1,
                dataExperience:[{
                    startYear:"",
                    endYear:"",
                    place:"",   
                    rank : ""
                    
                  
                }],
                numOfCertificate:0,
                dataCertificate:[
                 ]
            })
        }
       
    }
    CheckdataCertificate()
    {
   
        for(var i = 0 ; i<this.state.resume.certificate.length;i++)
        {
   
            if(this.state.resume.certificate[i].name.trim()===""||this.state.resume.certificate[i].year.trim()===""
            )
            {
                ToastAndroid.show("Vui lòng điền đủ thông tin chứng chỉ , giải thưởng", 50);
                return true;
            }
        }
        return false;
    }
    Requestdata()
    {
        this.setState(prevState => ({
            resume: {
                ...prevState.resume,
                education: this.state.dataEducation,
                skill:this.state.dataSkill,
                experience:this.state.dataExperience,
                certificate:this.state.dataCertificate
               
            },
         


        }));
        setTimeout(() => { console.log(this.state.resume)
            if(this.CheckdataProfile()||this.CheckdataEducation()||this.CheckdataSkill()||
            this.CheckdataExperience()||this.CheckdataCertificate())
            {
              
            }
            else{
                this.onShowDialog();
               
            }
        
        },200)
    }
    onSelectDropdownCity(idx, value) {
        this.setState(prevState => ({
            resume: {
                ...prevState.resume,
                profile: {
                    ...prevState.resume.profile,
                    address :{key:value.key,address:value.name}
                    
                }
            }
           

        }));
        this.setState({
            index:1
        });
        console.log("1AA",this)
    }
}

const mapStateToProps = (state) => {
    return {

        // listjob: selectors.getlistJob(state),
        // listexperience: selectors.getlistExperience(state),
        // listmajor: selectors.getlistDepartment(state),
        // listtypejob: selectors.getlistTypeJob(state),
         listprovince: selectors.getlistProvince(state),
         user: selectors.getUserInfo(state),
         addingState : selectors.getStateAdding(state)
        // result:selectors.getresultRecruiment(state)


    }
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
const mapDispatchToProps = (dispatch) => {
    return {

        fetchCreateCV: (param) => {
            dispatch(actions.fetchAddCVUser(param))
        },
        onfetchMyCV: (param) => {
            dispatch(actions.fetchListCV(param))
        }
        // fetchlistTypeJob: () => {
        //     dispatch(actions.fetchListTypeJob())
        // },
        // fetchaddRecruiment:(params) =>{
        //     dispatch(actions.fetchAddRecruiment(params))
        // },
        // resetresultRecruiment:(params) =>{
        //     dispatch(actions.resetResultAddRecruiment(params))
        // },
        // onfetchMyRecruiment: (param) => {
        //     dispatch(actions.fetchUserRecruiment(param))
        // },


    }
};
export default connect(mapStateToProps, mapDispatchToProps,null,{ withRef: true })(CVAddingContainer);