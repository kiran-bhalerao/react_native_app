import { createDrawerNavigator } from 'react-navigation'
import MyHomeScreen from './MyHomeScreen'
import MyNotificationsSceen from './MyNotificationsScreen'


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsSceen
  }
})

export default MyDrawerNavigator
