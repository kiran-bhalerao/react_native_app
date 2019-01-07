import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CustomCarousel from './CustomCarousel'
import { DrawerActions } from 'react-navigation'
import CustomTab from './CustomTab'

class Home extends React.Component {
  // state = {
  //   business: [
  //     {
  //       id: 'WpIAc9by5iU',
  //       title: 'ECommerce'
  //     },
  //     {
  //       id: 'sNPnbI1arSE',
  //       title: 'FinTech'
  //     },
  //     {
  //       id: 'VOgFZfRVaww',
  //       title: 'Food'
  //     },
  //     {
  //       id: 'VOgFZfRVqww',
  //       title: 'Health'
  //     }
  //   ]
  // }
  _isTabActive = () => {
    return !this.props.navigation.state.index
  }
  render() {
    // alert(!!this.props.navigation)
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          {/*<CustomCarousel
            title={'Featured Business Categories'}
            data={this.state.business}
          />*/}
          <Text>section TOP</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text>section BOTTOM</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
    // backgroundColor: 'yellow'
  },
  topSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  bottomSection: {
    // flexDirection: 'column',
    width: '100%'
    // backgroundColor: 'yellow'
    // justifyContent: 'space-between'
  }
})
