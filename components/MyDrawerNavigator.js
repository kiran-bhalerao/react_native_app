import { createDrawerNavigator } from 'react-navigation'
import MyHomeScreen from './MyHomeScreen'
import MyNotificationsSceen from './MyNotificationsScreen'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: MyHomeScreen
	},
	Notifications: {
		screen: MyNotificationsSceen
	}
})

export default MyDrawerNavigator
