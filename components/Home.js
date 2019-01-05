import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import MyCarousel from '../components/MyCarousel'

class Home extends React.Component {
  state = {
    business: [
      {
        id: 'WpIAc9by5iU',
        thumbnail: require('../assets/img/location_1.jpg'),
        title: 'ECommerce'
      },
      {
        id: 'sNPnbI1arSE',
        thumbnail: require('../assets/img/location_2.jpg'),
        title: 'FinTech'
      },
      {
        id: 'VOgFZfRVaww',
        thumbnail: require('../assets/img/location_3.jpg'),
        title: 'Food'
      },
      {
        id: 'VOgFZfRVqww',
        thumbnail: require('../assets/img/location_4.jpg'),
        title: 'Health'
      }
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <MyCarousel
          title={'Featured Business Categories'}
          data={this.state.business}
        />
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
    justifyContent: 'center'
  }
})
