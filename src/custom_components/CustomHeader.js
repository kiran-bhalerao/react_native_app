import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Image from 'react-native-remote-svg'

import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class CustomHeader extends React.Component {
  componentWillMount = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Icon
            name='menu'
            size={26}
            color='#7f7f7f'
            onPress={() => this.props._toggleDrawer()}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SICCA</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.batteryText}>{this.props.battery + '%'}</Text>
          {/*<Icon name="battery-full" size={24} />*/}
          <Image
            source={require('../../assets/svg/battery.svg')}
            style={styles.batteryIcon}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({ ...state.siccaData })
export default connect(
  mapStateToProps,
  actions
)(CustomHeader)

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingRight: 14,
    paddingLeft: 14
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    height: 60,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 20
  },
  batteryText: {
    fontSize: 16,
    fontWeight: '100'
  },
  batteryIcon: {
    height: 24,
    width: 24
  }
}
