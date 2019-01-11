import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CustomCarousel from '../custom_components/CustomCarousel'
import { DrawerActions } from 'react-navigation'
import CustomTab from '../custom_components/CustomTab'
import Image from 'react-native-remote-svg'

class Home extends React.Component {
  _isTabActive = () => !this.props.navigation.state.index

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topSection}>
            <View style={styles.topContainer}>
              <View style={styles.leftSection}>
                <View style={styles.leftSectionRulerContainer}>
                  <Image source={require('../../assets/svg/ruler.svg')} />
                </View>
                <View style={styles.leftSectionMoistureContainer}>
                  <View style={styles.rightMoisture}>
                    <Text style={styles.moisturePercentageText}>80%</Text>
                    <Image source={require('../../assets/svg/red_dot.svg')} />
                  </View>
                  <View style={styles.leftMoisture}>
                    <Text style={styles.moisturePercentageText}>73%</Text>
                    <Image source={require('../../assets/svg/red_dot.svg')} />
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
                <View style={styles.moistureTitleContainer}>
                  <Text style={styles.moistureTitle}>Soil</Text>
                  <Text style={styles.moistureTitle}>Moisture</Text>
                </View>
                <View style={styles.rightSectionMoisture}>
                  <Text style={styles.moisturePercentageText}>78%</Text>
                  <Image source={require('../../assets/svg/red_dot.svg')} />
                </View>
              </View>
            </View>
            <View style={styles.pumpStatus}>
              <Text style={styles.pumpStatusText}>Current Pump Status</Text>
              <Image source={require('../../assets/svg/off_status.svg')} />
            </View>
            <View style={styles.otherFactor}>
              <Text style={styles.otherFactorTitle}>Other Factors</Text>
              <Text>Other Factors</Text>
            </View>
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
    paddingLeft: 12,
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
  moistureTitleContainer: {
    marginTop: 160,
    marginLeft: 16
    // backgroundColor: 'pink'
  },
  moistureTitle: {
    fontSize: 20,
    fontWeight: '800'
  },
  rightSectionMoisture: {
    marginTop: 65,
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
    height: 65,
    width: '100%',
    marginTop: 20,
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
    marginTop: 10,
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
    marginTop: 10,

  },
  moisturePercentageText: {
    fontFamily: 'Nunito-Light',
  }
})
