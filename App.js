import React from 'react'
import MyDrawerNavigator from './components/MyDrawerNavigator'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

const AppStackNavigator = createStackNavigator({
  main: {
    screen: MyDrawerNavigator,
    navigationOptions: { header: null }
  }
})
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
    return <AppStackNavigator />
  }
}

export default App
