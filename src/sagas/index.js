import { fork } from 'redux-saga/effects';

import watchFetchListDepartment from './fetchListDepartment.saga';
import watchFetchListExperience from './fetchListExperience.saga';
import watchFetchListGender from './fetchListGender.saga';
import watchFetchListJob from './fetchListJob.saga';
import watchFetchListProvince from './fetchListProvince.saga';
import watchFetchListTypeJob from './fetchListTypeJob.saga';
import {watchFetchUserInfo,watchFetchUpdateUser ,watchFetchCompanyInfo,watchFetchLogout} from './fetchUserInfo.saga';
import watchFetchUserToken from './fetchToken.saga';
import { watchFetchListRecruiment,watchFetchFilterRecruiment,watchFetchDetailRecruiment} from './fetchListRecruiment.saga';
import { watchFetchAddRecruiment,watchFetchUserRecruiment,watchFetchDeleteRecruiment,watchFetchUserDetailRecruiment,watchUpdateDetailRecruiment} from './fetchUserRecruiment.saga';
import watchfetchDataAnalysis from './fetchAnalysis.saga';
import { watchfetchAllNews1,watchfetchAllNews2,watchfetchDetailNews} from './fetchNews.saga';
import { watchfetchDetailCV,watchfetchListCVUser,watchfetchUpdateCV,watchfetchAddCV,watchfetchRemoveCV} from './fetchUserCV.saga';
import { watchfetchNumCVtoEmployer,watchfetchListCVtoEmployer,watchfetchAddCVtoEmployer,
watchfetchRemoveCVtoEmployer,watchfetchcheckUserCVTE,watchfetchDetailDataCVTE} from './fetchCVtoEmployer.saga';
import watchFetchRegister from './fetchRegister.saga';
import watchFetchFollower from './fetchFollower.saga';
import {watchfetchaddComment,watchfetchgetComment} from './fetchComment.saga';
import {watchfetchActiveCvPublic,watchfetchUserCvPublic,watchfetchListCvPublic,watchfetchListQueryDepartment} from './fetchCVPublic.saga';
import {watchfetchSettingNotification} from './fetchSetting.saga';
function* rootSagas() {
  yield [
    fork(watchFetchUserToken),
    fork(watchFetchRegister),
    fork(watchFetchListDepartment),
    fork(watchFetchListExperience),
    fork(watchFetchListGender),
    fork(watchFetchListJob),
    fork(watchFetchListProvince),
    fork(watchFetchListTypeJob),
    fork(watchFetchUserInfo),
    fork(watchFetchCompanyInfo),
    fork(watchFetchListRecruiment),
    fork(watchFetchListRecruiment),
    fork(watchFetchFilterRecruiment),
    fork(watchFetchDetailRecruiment),
    fork(watchFetchUpdateUser),
    fork(watchfetchDataAnalysis),
    fork(watchfetchAllNews1),
    fork(watchfetchAllNews2),
    fork(watchfetchDetailNews),
    fork(watchFetchAddRecruiment),
    fork(watchFetchUserRecruiment),
    fork(watchFetchDeleteRecruiment),
    fork(watchFetchUserDetailRecruiment),
    fork(watchUpdateDetailRecruiment),
    fork(watchfetchDetailCV),
    fork(watchfetchListCVUser),
    fork(watchfetchUpdateCV),
    fork(watchfetchAddCV),
    fork(watchfetchRemoveCV),
    fork(watchfetchNumCVtoEmployer),
    fork(watchfetchListCVtoEmployer),
    fork(watchfetchAddCVtoEmployer),
    fork(watchfetchRemoveCVtoEmployer),
    fork(watchfetchcheckUserCVTE),
    fork(watchfetchDetailDataCVTE),
    fork(watchfetchaddComment),
    fork(watchfetchgetComment),
    fork(watchfetchActiveCvPublic),
    fork(watchfetchUserCvPublic),
    fork(watchfetchListCvPublic),
    fork(watchfetchListQueryDepartment),
    fork(watchFetchFollower),
    fork(watchfetchSettingNotification),
    fork(watchFetchLogout)

  ];
}

export default rootSagas;
