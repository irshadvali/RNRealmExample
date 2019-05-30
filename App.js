import React,{Component}from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar ,View,Text,StyleSheet} from 'react-native';
import HomeScreen from './src/component/HomeScreen';
import RegisterUser from './src/component/RegisterUser';
import UpdateUser from './src/component/UpdateUser';
import ViewUser from './src/component/ViewUser';
import ViewAllUser from './src/component/ViewAllUser';
import DeleteUser from './src/component/DeleteUser';
import Colors from './src/utils/Colors'
const navHeight=80;
const navPaddingTop=20;
//https://aboutreact.com/example-of-realm-database-in-react-native/
const MainNavigator = createStackNavigator({
	HomeScreen: {
		screen: HomeScreen,
		navigationOptions: {
		  title: 'HomeScreen',
		  headerStyle:  {backgroundColor: Colors.headerColor,height: navHeight,paddingTop:navPaddingTop},
			headerTintColor: '#ffffff',

		},
	},
	View: {
	  screen: ViewUser,
	  navigationOptions: {
	    title: 'View User',
	    headerStyle:  {backgroundColor: Colors.headerColor,height: navHeight,paddingTop:navPaddingTop},
	    headerTintColor: '#ffffff',
	  },
	},
	ViewAll: {
	  screen: ViewAllUser,
	  navigationOptions: {
	    title: 'View All User',
			headerStyle:  {backgroundColor: Colors.headerColor,height: navHeight,paddingTop:navPaddingTop},
	    headerTintColor: '#ffffff',
	  },
	},
	Update: {
	  screen: UpdateUser,
	  navigationOptions: {
	    title: 'Update User',
	    headerStyle:  {backgroundColor: Colors.headerColor,height: navHeight,paddingTop:navPaddingTop},
	    headerTintColor: '#ffffff',
	  },
	},
	Register: {
	  screen: RegisterUser,
	  navigationOptions: {
	    title: 'Register User',
	    headerStyle:  {backgroundColor: Colors.headerColor,height: navHeight,paddingTop:navPaddingTop},
	    headerTintColor: '#ffffff',
	  },
	},
	Delete: {
	  screen: DeleteUser,
	  navigationOptions: {
	    title: 'Delete User',
	    headerStyle:  {backgroundColor: Colors.headerColor,height: navHeight,paddingTop:navPaddingTop},
	    headerTintColor: '#ffffff',
	  },
	},
});
class App extends Component{
	componentDidMount(){
		console.disableYellowBox = true;
	}
	render(){
		return(<View style={{flex:1}}>
		<StatusBar translucent={true} backgroundColor={"transparent"}/>

			<AppNavigator/>
		</View>)
	}
}const AppNavigator = createAppContainer(MainNavigator);
const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: Colors.headerColor,height: 80,paddingTop:20
  },
});
export default App;
