export const getLoaingUserCV= (state) => state.UserCV.isLoadingUserCV;
export const getErrorUserCV= (state) => state.UserCV.isErrorUserCV;
export const getDataDetail= (state) => state.UserCV.dataDetail;
export const getListDataCV= (state) => state.UserCV.dataList;
export const getStateAdding= (state) => state.UserCV.stateAdding;
export const getStateDeleting= (state) => state.UserCV.stateDeleting;
export const getStateUpdating= (state) => state.UserCV.stateUpdating;

export const getLoaingCVTE= (state) => state.CVtoEmployer.isLoadingCVtoEmployer;
export const getErrorCVTE= (state) => state.CVtoEmployer.isErrorCVtoEmployer;
export const getStateCVTEAdding= (state) => state.CVtoEmployer.stateAdding;
export const getStateCVTEDeleting= (state) => state.CVtoEmployer.stateDeleting;
export const getListDataCVTE= (state) => state.CVtoEmployer.dataList;
export const getNumDataCVTE= (state) => state.CVtoEmployer.dataNum;
export const getCheckUser= (state) => state.CVtoEmployer.checkUser;

