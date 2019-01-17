import React from 'react'
import MyDrawerNavigator from './src/screens/MyDrawerNavigator'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const AppStackNavigator = createStackNavigator(
  {
    main: {
      screen: MyDrawerNavigator,
      navigationOptions: { header: null }
    },
    login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    signup: {
      screen: Signup,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: 'login'
  }
)
// navigationOptions: ({navigation})=>{
// 			return {
// 			title: 'App Name',
// 			headerStyle: {
// 				backgroundColor: '#8668ff'
// 			},
// 			headerTintColor: '#fff',
// 			headerRight: (
// 				<Icon
// 					name="dots-vertical"
// 					size={26}
// 					color="#fff"
// 					style={{ marginRight: 10 }}
// 					onPress={() => navigation.toggleDrawer()}
// 				/>
// 			)
// 		}
// 		}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    )
  }
}

export default App
