import React from 'react'
import { Image,Button,StyleSheet } from 'react-native'

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title='Go back home'
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
export default MyNotificationsScreen
