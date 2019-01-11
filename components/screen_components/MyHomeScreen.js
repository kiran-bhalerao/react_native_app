import React from 'react'
import { View } from 'react-native'
import { Image, StyleSheet } from 'react-native'
import MainScreen from './MainScreen'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { DrawerActions } from 'react-navigation'
import CustomHeader from '../custom_components/CustomHeader'
import { Container } from 'native-base'
// const AppStackNavigator = createStackNavigator({
//   main: {
//     screen: MainScreen,
//     navigationOptions: {
//       title: 'App Name'
//     }
//   }
// })

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
  _toggleDrawer = () => {
    this.props.navigation.openDrawer()
  }
  render() {
    // return <AppStackNavigator />
    return (
      <Container>
        <CustomHeader
          _toggleDrawer={this._toggleDrawer}
          navigation={this.props.navigation}
        />
        <MainScreen />
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

export default MyHomeScreen
