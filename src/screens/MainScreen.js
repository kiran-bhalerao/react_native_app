import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

import Home from './Home'
import { createBottomTabNavigator } from 'react-navigation'
import About from './About'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab5 from './Tab5'

const TabStack = createBottomTabNavigator(
  {
    Home,
    About,
    Tab3,
    Tab4,
    Tab5
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state
    //     let iconName
    //     if (routeName === 'Home') {
    //       iconName = `home`
    //     } else if (routeName === 'About') {
    //       iconName = `information`
    //     }
    //     return <Icon name={iconName} size={26} color={tintColor} />
    //   }
    // }),
    // tabBarOptions: {
    //   activeTintColor: '#4BC24E',
    //   inactiveTintColor: '#7f7f7f'
    // }
  }
)

class MainScreen extends React.Component {
  // static navigationOptions = {
  //   headerTitle: 'App Name.',
  //   headerStyle: {
  //     backgroundColor: '#8668ff'
  //   },
  //   headerTintColor: '#fff',
  //   headerRight: (
  //     <Icon
  //       name='dots-vertical'
  //       size={26}
  //       color='#fff'
  //       style={{ marginRight: 10 }}
  //       onPress={() => alert(NavigationActions.toggleDrawer())}
  //     />
  //   )
  // }
  render() {
    return <TabStack />
  }
}

export default MainScreen
