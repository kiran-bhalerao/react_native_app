import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from 'react-native-remote-svg'

class FactorCard extends React.Component {
    state = {
        iconSrc: [
          require('../../assets/svg/humidity_icon.svg'),
          require('../../assets/svg/temperature_icon.svg'),
          require('../../assets/svg/soil_temp_icon.svg')
        ]
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={this.state.iconSrc[this.props.icon]} />
          <Text style={styles.dataText}>{this.props.data}%</Text>
        </View>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </View>
    )
  }
}

export default FactorCard

const styles = StyleSheet.create({
  container: {
    width: 110,
    // height: 75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'green',
    marginBottom: 5,
    marginTop: 10,
    width: '100%'
  },
  dataText: {
    fontFamily: 'Nunito-Light',
    color: '#000',
    fontSize: 18
  },
  titleText: {
    fontFamily: 'Nunito-Light',
    color: '#000',
    fontSize: 14,
    marginBottom: 4
  }
})
