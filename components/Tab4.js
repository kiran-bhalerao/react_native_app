import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import CustomChart from './CustomChart'
import CustomTab from './CustomTab'

class Tab4 extends React.Component {
  _isTabActive = () => {
    return !this.props.navigation.state.index
  }

  render() {
    // alert(!!this.props.navigation)
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text>section TOP</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text>section BOTTOM</Text>
          <CustomTab
            navigation={this.props.navigation}
            _isTabActive={this._isTabActive}
            iconsName={'tab4'}
          />
        </View>
      </View>
    )
  }
}

export default Tab4

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
