import React, { Element } from 'react'

import {

  Text, Image,
  Navigator
} from 'react-native';


import { View } from 'react-native'
import { Router, Scene, Reducer, ActionConst, Modal, Actions, TabBar, Stack, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
const RouterWithRedux = connect()(Router);
import ScreenTabNews from '../components/TabInfo/InfoScreen.container';
import ScreenTabCV from '../components/CV/TabCV';
import ScreenTabMore from '../components/TabMore/MoreScreen.container';
import ScreenTabMore_Employer from '../components/TabMore/Employer_MoreScreen.container';
import { isLoadingModalOpen, isInRootScreen } from '../constants/index';

import ScreenLogin from '../components/ScreenLogin/LoginScreen.container';
// import ScreenTabMovie from '../components/TabMovie/MovieScreen';
import ScreenTabWork from '../components/TabWork/WorkScreen.container';
import ScreenTabWork_Employer from '../components/TabWork/Employer_WorkScreen.container';
import CandidateRegisScreen from '../components/RegistrationScreen/CandidateRegisScreen.container';
import EmployerRegisScreen from '../components/RegistrationScreen/EmployerRegisScreen.container';
import DetailUserRecruiment from '../components/TabPost/DetailPost.container';
import DetailRecruiment from '../components/DetailRecruitment/DetailRecruiment.container';
import DetailNews from '../components/DetailNews/DetailNews.container';


import FilterScreen from '../components/FilterScreen/FilterScreen.container';
import PostScreen from '../components/TabPost/TabRecruiment';
import ReviewCVScreen from '../components/CV/ReviewCVScreen.container';
import CVinRecruimentScreen from '../components/TabPost/CVinPost.container';
import CVEditingScreen from '../components/CV/CVEditing.container';
import QuickFilterScreen from '../components/QuickFilter/QuickFilterScreen.container';
import UserInfoScreen from '../components/UserInfo/CandidateInfoScreen.container';
import EmployerInfoScreen from '../components/UserInfo/EmployerInfoScreen.container';
import CVPublicScreen from '../components/PublicCVScreen/PublicCV.container';
import ChooseDeptScreen from '../components/TabPublicCV/ChooseDept.container';
import FindCVPublicScreen from '../components/TabPublicCV/FindCVPublic.container';
import CanditeSettingScreen from '../components/SettingNotification/Candidate_Setting.container';
import EmployerSettingScreen from '../components/SettingNotification/Employer_Setting.container';
import Icon from 'react-native-vector-icons/FontAwesome';
const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: 'transparent',
  
})
var pressCount = 0;



// const RouterWithRedux = connect()(Router);
const TabIcon = ({ selected, title }) => {

  return (

    <View style={{ flexDirection: 'row'}}>
      {title === 'Work' ?
        <Image  style={{ height: 28, width: 28 }} source={selected ? require('../images/ework_icon.png') : require('../images/dwork_icon.png')} />
        :
        title === 'News' ?
          <Image  style={{ height: 28, width: 28 }} source={selected ? require('../images/enews_icon.png') : require('../images/dnews_icon.png')} />
          : title === 'More' ?
            <Image r style={{ height: 28, width:28 }} source={selected ? require('../images/emore_icon.png') : require('../images/dmore_icon.png')} />
            : title === 'CV' ?
            <Image  style={{ height: 28, width: 28 }} source={selected ? require('../images/ecv_icon.png') : require('../images/dcv_icon.png')} />
            : title === 'Community' ?
            <Image  style={{ height: 28, width: 28 }} source={selected ? require('../images/ecommunity_icon.png') : require('../images/dcommunity_icon.png')} />
            
            : <Image  style={{ height: 28, width: 28 }} source={selected ? require('../images/ere_icon.png') : require('../images/dre_icon.png')} />
      }

      {/* <Text style={{ color: selected ? '#60819E' : '#A6ACAF', paddingLeft: 2 }}>{" " + title}</Text> */}
    </View>




  )

}
const scenes = Actions.create(
  <Stack
    hideNavBar
    key="root"

  >
    <Scene panHandlers={null}
      key="login_screen"
      component={ScreenLogin}
     
      title="Grey"
      type={ActionConst.RESET}
      initial />
    <Scene panHandlers={null}
      key="candidate_regis_screen"
      component={CandidateRegisScreen}
      title="Grey"
    />
    <Scene panHandlers={null}
      key="employer_regis_screen"
      component={EmployerRegisScreen}
      title="Grey"
    />
    <Scene panHandlers={null}
      key="filter_screen"
      component={FilterScreen}
      title="Grey"
    />
    <Scene panHandlers={null}
      key="quickfilter_screen"
      component={QuickFilterScreen}
      title="Grey"
    />
    <Scene key="modal"
      tabs={true}
      // animation={null}
      // hideNavBar={true}
      //panHandlers={null}
      //hideNavBar={true}
      // animationStyle={null}
      tabBarStyle={{ backgroundColor: 'white' , borderTopColor:'#A6ACAF',borderTopWidth:1 }}
      type={ActionConst.REPLACE}
      tabBarPosition="bottom" >


      <Scene panHandlers={null}
        key={"tab_work"}
        title={"Work"}
        icon={TabIcon}

        hideNavBar={true} >
        <Scene panHandlers={null}
          key={"tab_homejob"}
          title={"Main"}
          component={ScreenTabWork}

        />
        <Scene panHandlers={null}
          key={"tab_detailjob"}
          title={"Detail"}
          component={DetailRecruiment}

        />
        <Scene panHandlers={null}
          key={"reviewcv_screen"}
          title={"CVReview"}
          component={ReviewCVScreen}

        />
      </Scene>
      <Scene panHandlers={null}
        key={"tab_cv"}
        title={"CV"}
        icon={TabIcon}

        hideNavBar={true} >
        <Scene panHandlers={null}
          key={"tab_homecv"}
          title={"Main"}
          component={ScreenTabCV}

        />
        
         <Scene panHandlers={null}
          key={"tab_reviewcv"}
          title={"Review"}
          component={ReviewCVScreen}

        />
        <Scene panHandlers={null}
          key={"screen_editcv"}
          title={"Edit"}
          component={CVEditingScreen}

        />
       
      </Scene>
      <Scene panHandlers={null}
        key={"tab_news"}
        title={"News"}
        icon={TabIcon}


      >
        <Scene panHandlers={null}
          key={"tab_info"}
          title={"Main"}
          component={ScreenTabNews}
          hideNavBar={true}

        />
        <Scene panHandlers={null}
          key={"tab_detailinfo"}
          title={"Detail"}
          component={DetailNews}

        />
      </Scene>

      <Scene
        panHandlers={null}
        key={"tab_more"}
        title={"More"}
        icon={TabIcon}

        hideNavBar={true} >
        <Scene panHandlers={null}
          key={"screen_homemore"}
          title={"Main"}
          component={ScreenTabMore}

        />
         <Scene panHandlers={null}
          key={"screen_cvpublic"}
          title={"CVPublic"}
          component={CVPublicScreen}

        />
        <Scene panHandlers={null}
          key={"screen_userinfo"}
          title={"Info"}
          component={UserInfoScreen}
        />
        <Scene panHandlers={null}
          key={"screen_setting"}
          title={"Setting"}
          component={CanditeSettingScreen}
        />
      </Scene>


    </Scene>
    <Scene key="em_modal"
      tabs={true}
      tabBarStyle={{ backgroundColor: 'white' , borderTopColor:'#A6ACAF',borderTopWidth:1 }}
      type={ActionConst.REPLACE}
      tabBarPosition="bottom" >
      <Scene panHandlers={null}
        key={"tab_emwork"}
        title={"Work"}
        icon={TabIcon}

        hideNavBar={true} >
        <Scene panHandlers={null}
          key={"tab_emhomejob"}
          title={"Main"}
          component={ScreenTabWork_Employer}

        />
        <Scene panHandlers={null}
          key={"tab_emdetailjob"}
          title={"Detail"}
          component={DetailRecruiment}

        />
      </Scene>
      <Scene panHandlers={null}
        key={"tab_myrecruiment"}
        title={"Recruiment"}
        icon={TabIcon}
       
        hideNavBar={true}

      >
        <Scene panHandlers={null}
          key={"screen_post"}
          title={"Main"}
          component={PostScreen}
          hideNavBar={true}

        />
        <Scene panHandlers={null}
          key={"screen_detailpost"}
          title={"Detail"}
          component={DetailUserRecruiment}

        />
         <Scene panHandlers={null}
          key={"screen_listcv"}
          title={"ListCV"}
          component={CVinRecruimentScreen}

        />
        <Scene panHandlers={null}
          key={"screen_reviewcv"}
          title={"Review"}
          component={ReviewCVScreen}

        />
        
      </Scene>
      <Scene
        panHandlers={null}
        key={"tab_cvpublic"}
        title={"Community"}
        icon={TabIcon}
        hideNavBar={true} >
        <Scene panHandlers={null}
          key={"screen_choosedept"}
          title={"Main"}
          component={ChooseDeptScreen}

        />
        <Scene panHandlers={null}
          key={"screen_findcvpublic"}
          title={"FindCVPublic"}
          component={FindCVPublicScreen}
        />
        <Scene panHandlers={null}
          key={"screen_cvreview"}
          title={"CVReView"}
          component={ReviewCVScreen}
        />
      </Scene>

      <Scene
        panHandlers={null}
        key={"tab_emmore"}
        title={"More"}
        icon={TabIcon}
        hideNavBar={true} >
        <Scene panHandlers={null}
          key={"screen_emhomemore"}
          title={"Main"}
          component={ScreenTabMore_Employer}

        />
        <Scene panHandlers={null}
          key={"screen_employerinfo"}
          title={"Detail_Em"}
          component={EmployerInfoScreen}
        />
        <Scene panHandlers={null}
          key={"em_screen_setting"}
          title={"Setting"}
          component={EmployerSettingScreen}
        />
      </Scene>


    </Scene>
  </Stack>


)


export default (): Element => (
  <RouterWithRedux
    hideNavBar={true}
    getSceneStyle={getSceneStyle}
   
    scenes={scenes}
    animation={null}
    animationStyle={null}
    duration={100}
  >
  </RouterWithRedux>

)