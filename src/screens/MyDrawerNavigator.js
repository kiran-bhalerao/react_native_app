import { createDrawerNavigator } from 'react-navigation'
import MyHomeScreen from './MyHomeScreen'
import MyNotificationsSceen from './MyNotificationsScreen'
import React from 'react'
import Notifications from './Notifications';

const MyDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: MyHomeScreen
	},
	Notifications: {
		screen: Notifications
	}
})

export default MyDrawerNavigator
