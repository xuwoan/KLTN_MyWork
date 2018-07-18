/*
@providesModule Const
*/
import {
	Platform
} from 'react-native';


const DEBUG_MODE = false;




let ballColor = {}

 const URL = "http://xuwoan.tk:3000"
// const URL = "http://192.168.1.178:3000"
	


var isModalOpen = false;
const router ={
    Home: 'APP_HOME',
}
const ActionsTypes = {

}



const AppConstants = {
	// cheat variable, not a constant
	isLoadingModalOpen: false,

	isInRootScreen: false,
	
	URL: URL,
	
	
};



module.exports = AppConstants;
