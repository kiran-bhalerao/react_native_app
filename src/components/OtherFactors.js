import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FactorCard from '../components/FactorCard'

import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class OtherFactors extends React.Component {
  componentWillMount = () => {
    this.props.fetchData()
  }
  render() {
    return (
      <View style={styles.otherFactor}>
        <Text style={styles.otherFactorTitle}>Other Factors</Text>
        <View style={styles.factorContainer}>
          <FactorCard icon={0} title='Humidity' data={this.props.humidity+"%"} />
          <FactorCard icon={1} title='Temperature' data={this.props.temp+"‎°C"} />
          <FactorCard icon={2} title='Soil Temp' data={this.props.soilTemp+"‎°C"} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({ ...state.siccaData })
export default connect(
  mapStateToProps,
  actions
)(OtherFactors)

const styles = StyleSheet.create({
  otherFactor: {
    height: 140,
    width: '100%',
    marginTop: 8,
    marginBottom: 20,

    // backgroundColor: '#9052FC'
    // backgroundColor: '#533FD0'
    // backgroundColor: '#5748ED'
    backgroundColor: '#6B51EB'
  },
  factorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 14
  },
  otherFactorTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#FFF',
    marginLeft: 10,
    marginTop: 10
  }
})
