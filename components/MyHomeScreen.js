import React from 'react'
import { Image, Button, StyleSheet } from 'react-native'
import MainScreen from './MainScreen'
import { createStackNavigator,createDrawerNavigator } from 'react-navigation'

const AppStackNavigator = createStackNavigator({
  main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'App Name'
    }
  }
})

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  render() {
    return <AppStackNavigator />
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

export default MyHomeScreen
