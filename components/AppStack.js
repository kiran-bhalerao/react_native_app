import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

import Home from './Home'
import { createBottomTabNavigator } from 'react-navigation'
import About from './About'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RootStack = createBottomTabNavigator(
  {
    Home,
    About
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `home`
        } else if (routeName === 'About') {
          iconName = `information`
        }
        return <Icon name={iconName} size={26} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#8668ff',
      inactiveTintColor: '#d4ccff'
    }
  }
)

class AppStack extends React.Component {
  static navigationOptions = {
    headerTitle: 'App Name',
    headerStyle: {
      backgroundColor: '#8668ff'
    },
    headerTintColor: '#fff',
    headerRight: (
      <Icon
        name='dots-vertical'
        size={26}
        color='#fff'
        style={{ marginRight: 10 }}
        onPress={() => alert('This is a button')}
      />
    )
  }
  render() {
    return <RootStack />
  }
}

export default AppStack
