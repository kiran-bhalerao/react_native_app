import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomIcon from './CustomIcon';

class CustomHeader extends React.Component {
  _renderBatteryIcon = battery => {
    if (battery > 97) return { name: 'battery-std', color: '#4BC24E' }
    if (battery > 70) return { name: 'round-battery_90-24px', color: '#4BC24E' }
    if (battery > 50) return { name: 'round-battery_60-24px', color: '#4BC24E' }
    if (battery > 30) return { name: 'round-battery_30-24px', color: '#4BC24E' }
    if (battery > 10) return { name: 'round-battery_20-24px', color: '#4BC24E' }
    if (battery < 10)
      return { name: 'round-battery_alert-24px', color: '#f71820' }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Icon
            name="menu"
            size={26}
            color="#7f7f7f"
            onPress={() => this.props._toggleDrawer()}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SICCA</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.batteryText}>0%</Text>
          {/*<Image
      style={{width: 26, height: 26}}
          source={require('../assets/img/battery_20.png')}
      />*/}
          <CustomIcon
            name={this._renderBatteryIcon(90).name}
            size={26}
            //color={this._renderBatteryIcon(90).color}
            //   onPress={() => this.props.navigation.navigate('Notifications')}

          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: 14,
    paddingLeft: 14
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
    // backgroundColor: 'pink'
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    // backgroundColor: 'pink',
    paddingLeft: 20
  },
  batteryText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
}

export default CustomHeader
