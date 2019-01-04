import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'

class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is About Component!</Text>
      </View>
    )
  }
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
