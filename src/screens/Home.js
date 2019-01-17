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
import PlantSection from '../components/PlantSection'

import Image from 'react-native-remote-svg'
import OtherFactors from '../components/OtherFactors'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class Home extends React.Component {
  // _isTabActive = () => !this.props.navigation.state.index
  componentWillMount = () => {
    this.props.fetchData()
  }

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
          <PlantSection />
          <View style={styles.pumpStatus}>
            <Text style={styles.pumpStatusText}>Current Pump Status</Text>
            {this.props.pumpStatus == 0 && (
              <Image source={require('../../assets/svg/off_status.svg')} />
            )}
            {this.props.pumpStatus == 1 && (
              <Image source={require('../../assets/svg/on_status.svg')} />
            )}
          </View>
          <OtherFactors />
        </ScrollView>
        <CustomTab
          navigation={this.props.navigation}
          // _isTabActive={this._isTabActive}
          iconsName={'home'}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({ ...state.siccaData })
export default connect(
  mapStateToProps,
  actions
)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between'
    // backgroundColor: 'yellow'
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
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
