import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions
} from 'react-native'
import CustomCarousel from '../custom_components/CustomCarousel'
import { DrawerActions } from 'react-navigation'
import CustomTab from '../custom_components/CustomTab'
import Image from 'react-native-remote-svg'
import * as Animatable from 'react-native-animatable'

Animatable.initializeRegistryWithDefinitions({
  FancyPulseAnimation: {
    0: { scale: 0.4 },
    0.5: { scale: 1.2 },
    1: { scale: 0.4 }
  }
})

class Home extends React.Component {
  _isTabActive = () => !this.props.navigation.state.index

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topHeader}>
            <View style={styles.topHeaderLeftSection}>
              <Text style={styles.moistureTitle}>Soil Moisture</Text>
              <Text style={styles.moistureSubTitle}>Current soil moisture</Text>
            </View>
            <View style={styles.topHeaderRightSection}>
              {/*<Text>Right</Text>*/}
            </View>
          </View>
          <View style={styles.topSection}>
            <ImageBackground
              source={require('../../assets/img/ground.png')}
              style={styles.topContainer}
              imageStyle={{ resizeMode: 'contain', marginTop: 188 }}
            >
              <View style={styles.leftSection}>
                <View style={styles.leftSectionRulerContainer}>
                  <Image source={require('../../assets/svg/ruler.svg')} />
                </View>
                <View style={styles.leftSectionMoistureContainer}>
                  <View style={styles.rightMoisture}>
                    <Text style={styles.moisturePercentageText}>80%</Text>
                    <Animatable.View
                      animation="FancyPulseAnimation"
                      easing="ease-out"
                      iterationCount="infinite"
                      style={{ textAlign: 'center' }}
                      duration={2000}
                    >
                      <Image source={require('../../assets/svg/red_dot.svg')} />
                    </Animatable.View>
                  </View>
                  <View style={styles.leftMoisture}>
                    <Text style={styles.moisturePercentageText}>73%</Text>
                    <Animatable.View
                      animation="FancyPulseAnimation"
                      easing="ease-out"
                      iterationCount="infinite"
                      style={{ textAlign: 'center' }}
                      duration={2000}
                    >
                      <Image source={require('../../assets/svg/red_dot.svg')} />
                    </Animatable.View>
                  </View>
                </View>
              </View>
              <View style={{ width: '38%' }}>
                <Image
                  source={require('../../assets/svg/plant_lg.svg')}
                  style={{ marginTop: 1 }}
                />
              </View>
              <View style={styles.rightSection}>
                <View style={styles.rightSectionMoisture}>
                  <Text style={styles.moisturePercentageText}>78%</Text>
                  <Animatable.View
                    animation="FancyPulseAnimation"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{ textAlign: 'center' }}
                    duration={2000}
                  >
                    <Image source={require('../../assets/svg/red_dot.svg')} />
                  </Animatable.View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.pumpStatus}>
            <Text style={styles.pumpStatusText}>Current Pump Status</Text>
            <Image source={require('../../assets/svg/off_status.svg')} />
          </View>
          <View style={styles.otherFactor}>
            <Text style={styles.otherFactorTitle}>Other Factors</Text>
          </View>
        </ScrollView>
        <View style={styles.bottomSection}>
          <CustomTab
            navigation={this.props.navigation}
            _isTabActive={this._isTabActive}
            iconsName={'home'}
          />
        </View>
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between'
    // backgroundColor: 'yellow'
  },
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
  moistureTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    color: 'black'
  },
  moistureSubTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 20,
    color: '#B5B4B4'
  },
  rightSectionMoisture: {
    marginTop: 278,
    marginLeft: 20,
    // backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  bottomSection: {
    // flexDirection: 'column',
    width: '100%'
    // backgroundColor: 'yellow'
    // justifyContent: 'space-between'
  },
  pumpStatus: {
    height: 60,
    width: '100%',
    marginTop: 8,
    backgroundColor: '#F9FBFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: 'center'
  },
  pumpStatusText: {
    color: '#B5B5B5',
    fontSize: 18,
    fontFamily: 'Nunito-Regular'
  },
  otherFactor: {
    height: 140,
    width: '100%',
    marginTop: 8,
    marginBottom: 20,
    // backgroundColor: '#9052FC'
    // backgroundColor: '#533FD0'
    backgroundColor: '#5748ED'
    // backgroundColor: '#6B51EB'
  },
  otherFactorTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#FFF',
    marginLeft: 10,
    marginTop: 10
  },
  moisturePercentageText: {
    fontFamily: 'Nunito-Light',
    color: '#fff'
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginBottom: 10
  },
  topHeaderLeftSection: {
    // backgroundColor: 'pink',
    width: '49.9%'
  },
  topHeaderRightSection: {
    // backgroundColor: 'orange',
    width: '49.9%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
