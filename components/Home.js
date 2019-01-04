import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import MyCarousel from './MyCarousel';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyCarousel />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
