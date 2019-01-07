import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'
import CustomChart from "./CustomChart"
class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is About Component!</Text>
        <CustomChart />
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
