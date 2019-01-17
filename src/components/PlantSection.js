import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Image from 'react-native-remote-svg'

import * as actions from '../redux/actions'
import { connect } from 'react-redux'

Animatable.initializeRegistryWithDefinitions({
  FancyPulseAnimation: {
    0: { scale: 0.4 },
    0.5: { scale: 1 },
    1: { scale: 0.4 }
  }
})
class PlantSection extends React.Component {
  componentWillMount = () => {
    this.props.fetchData()
  }
  getLowMoisture = () => {
    const { soilMoistureOne, soilMoistureTwo, soilMoistureThree } = this.props

    return (soilMoistureOne < soilMoistureTwo
      ? soilMoistureOne
      : soilMoistureTwo) < soilMoistureThree
      ? soilMoistureOne < soilMoistureTwo
        ? soilMoistureOne
        : soilMoistureTwo
      : soilMoistureThree
  }
  getHighMoisture = () => {
    const { soilMoistureOne, soilMoistureTwo, soilMoistureThree } = this.props

    return (soilMoistureOne > soilMoistureTwo
      ? soilMoistureOne
      : soilMoistureTwo) > soilMoistureThree
      ? soilMoistureOne > soilMoistureTwo
        ? soilMoistureOne
        : soilMoistureTwo
      : soilMoistureThree
  }
  getAverageMoisture = () => {
    const { soilMoistureOne, soilMoistureTwo, soilMoistureThree } = this.props

    let ave = null
    if (
      soilMoistureOne > this.getLowMoisture() &&
      soilMoistureOne < this.getHighMoisture()
    )
      ave = soilMoistureOne
    if (
      soilMoistureTwo > this.getLowMoisture() &&
      soilMoistureTwo < this.getHighMoisture()
    )
      ave = soilMoistureTwo
    if (
      soilMoistureThree > this.getLowMoisture() &&
      soilMoistureThree < this.getHighMoisture()
    )
      ave = soilMoistureThree
    return ave
  }
  
  render() {
    return (
      <View style={styles.topSection}>
        <ImageBackground
          source={require('../../assets/img/ground.png')}
          style={styles.topContainer}
          imageStyle={{
            resizeMode: 'cover',
            marginTop: 188,
            width: '100%'
          }}
        >
          <View style={styles.leftSection}>
            <View style={styles.leftSectionRulerContainer}>
              <Image source={require('../../assets/svg/ruler.svg')} />
            </View>
            <View style={styles.leftSectionMoistureContainer}>
              <View style={styles.rightMoisture}>
                <Text style={styles.moisturePercentageText}>
                  {this.getHighMoisture()}
                </Text>
                <Animatable.View
                  animation='FancyPulseAnimation'
                  easing='ease-out'
                  iterationCount='infinite'
                  style={{ textAlign: 'center', marginLeft: 2 }}
                  duration={2000}
                >
                  <Image source={require('../../assets/svg/red_dot.svg')} />
                </Animatable.View>
              </View>
              <View style={styles.leftMoisture}>
                <Text style={styles.moisturePercentageText}>
                  {this.getLowMoisture()}
                </Text>
                <Animatable.View
                  animation='FancyPulseAnimation'
                  easing='ease-out'
                  iterationCount='infinite'
                  style={{ textAlign: 'center', marginLeft: 2 }}
                  duration={2000}
                >
                  <Image source={require('../../assets/svg/red_dot.svg')} />
                </Animatable.View>
              </View>
            </View>
          </View>
          <View style={{ width: '38%' }}>
            <Image
              source={require('../../assets/svg/plant_lg_white.svg')}
              style={{ marginTop: 1 }}
            />
          </View>
          <View style={styles.rightSection}>
            <View style={styles.rightSectionMoisture}>
              <Text style={styles.moisturePercentageText}>
                {this.getAverageMoisture()}
              </Text>
              <Animatable.View
                animation='FancyPulseAnimation'
                easing='ease-out'
                iterationCount='infinite'
                style={{ textAlign: 'center', marginLeft: 2 }}
                duration={2000}
              >
                <Image source={require('../../assets/svg/red_dot.svg')} />
              </Animatable.View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = state => ({ ...state.siccaData })
export default connect(
  mapStateToProps,
  actions
)(PlantSection)

const styles = StyleSheet.create({
  topSection: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    width: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    // backgroundColor: 'pink',
    justifyContent: 'space-evenly'
  },
  leftSection: {
    // backgroundColor: 'pink',
    width: '33%',
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  rightSection: {
    // backgroundColor: 'green',
    width: '30%',
    margin: 0
  },
  leftSectionRulerContainer: {
    paddingLeft: 8,
    marginTop: 180,
    width: '40%'
  },
  leftSectionMoistureContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    width: '59%'
  },
  rightMoisture: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 230
  },
  leftMoisture: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    paddingLeft: 14,
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 80
  },
  rightSectionMoisture: {
    marginTop: 278,
    marginLeft: 20,
    // backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  moisturePercentageText: {
    fontFamily: 'Nunito-Light',
    color: '#fff',
    fontSize: 13
  }
})
