import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
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
import logoImg from '../../images/logo_icon.png';

import logopassword from '../../images/logo_password.png';
import logousername from '../../images/logo_username.png';
import { Container, Icon, Button, Header, Body, Title, Left, Right, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

const MARGIN = 40;
export default class LoginScreen extends Component {
	constructor() {
		super();


		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);

		this.gotoRegisCandidate = this.gotoRegisCandidate.bind(this);
		this.gotoRegisEmployer = this.gotoRegisEmployer.bind(this);
		this.goEmloyerscreen = this.goEmloyerscreen.bind(this);
	}


	goEmloyerscreen() {

		Actions.em_modal();

	}
	gotoRegisCandidate() {

		Actions.candidate_regis_screen({ "player_id": this.state.playerid });

	}
	gotoRegisEmployer() {

		Actions.employer_regis_screen({ "player_id": this.state.playerid });

	}
	_onGrow() {
		console.log("1")
		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
	}

	render() {

		const changeWidth = this.buttonAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [DEVICE_WIDTH - MARGIN, 40]
		});
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 40]
		});
		console.log("PROPS", this.props.username, this.props.password)
		return (

			<View style={{flex:1}} >
				<View style={styles.container}>
					<TouchableOpacity >
						<Image source={logoImg} style={styles.image} />
					</TouchableOpacity>
					<View style={styles.containerform}>
						<View style={styles.inputWrapper}>


							<Image source={logousername}
								style={styles.inlineImg} />

							<TextInput style={styles.input}
								placeholder="Username"
								onChangeText={(username) => this.setState({ username: username })}
								/*secureTextEntry={this.props.secureTextEntry}
								autoCorrect={this.props.autoCorrect}
								//autoCapitalize={this.props.autoCapitalize}
								 returnKeyType={this.props.returnKeyType}*/
								//	onFocus={this._scrollToInput.bind(this)}
								value={this.props.username ? this.props.username : this.state.username}
								placeholderTextColor='white'
								underlineColorAndroid='transparent' />
						</View>
						<View style={styles.inputWrapper}>
							<Image source={logopassword}
								style={styles.inlineImg} />
							<TextInput style={styles.input}
								placeholder="Password"
								secureTextEntry={true}
								onChangeText={(pass) => this.setState({ password: pass })}
								/*autoCorrect={this.props.autoCorrect}
								//autoCapitalize={this.props.autoCapitalize}
								 returnKeyType={this.props.returnKeyType}*/
								//onFocus={this._scrollToInput.bind(this)}
								value={this.props.password ? this.props.password : this.state.password}
								placeholderTextColor='white'
								underlineColorAndroid='transparent' />
						</View>

					</View>
					<View style={styles.containerbutton}>
						<Animated.View style={{ width: changeWidth }}>
							<TouchableOpacity style={styles.button}
								onPress={this._onPress}
								activeOpacity={1} >
								{(this.state.isLoading === true) ?
									<Image source={require('../../images/loading.gif')} style={styles.image1} />
									:
									<Text style={styles.text}>ĐĂNG NHẬP</Text>
								}
							</TouchableOpacity>
							<Animated.View style={[styles.circle, { transform: [{ scale: changeScale }] }]} />
						</Animated.View>
					</View>
					<Text style={[styles.textbutton, { marginTop: 40 }]} >HOẶC ĐĂNG KÍ</Text>
					<View style={styles.containerregis}>
						<TouchableOpacity onPress={this.gotoRegisCandidate} >
							<View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1 }}>
								<Text style={styles.textbutton}>Ứng Viên</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.gotoRegisEmployer}>
							<View style={{ height: MARGIN, width: 150, borderRadius: 20, zIndex: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#60819E', borderWidth: 1 }}>
								<Text style={styles.textbutton}>Nhà Tuyển dụng</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>



			</View>
		);
	}
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: "white",
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 120,
		height: 80,
		resizeMode: 'stretch'
	},
	containerform: {
		marginTop: 40,


	},
	input: {
		backgroundColor: '#DFDFDF',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		fontSize: 15,
		borderRadius: 20,
		color: '#60819E',
	},
	inputWrapper: {
		marginTop: 20

	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
	containerbutton: {
		marginTop: 20,
		flex: 0.2,
		alignItems: 'center',

	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#60819E',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: '#60819E',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#60819E',
	},
	containerregis: {

		flex: 0.2,
		top: 20,
		width: DEVICE_WIDTH - 40,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
	},
	textbutton: {
		color: '#60819E',
		fontWeight: 'bold',
	},

	image1: {
		width: 32,
		height: 32,
	},
});
