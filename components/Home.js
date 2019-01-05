import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import MyCarousel from '../components/MyCarousel'

class Home extends React.Component {
  state = {
    business: [
      {
        id: 'WpIAc9by5iU',
        title: 'ECommerce'
      },
      {
        id: 'sNPnbI1arSE',
        title: 'FinTech'
      },
      {
        id: 'VOgFZfRVaww',
        title: 'Food'
      },
      {
        id: 'VOgFZfRVqww',
        title: 'Health'
      }
    ]
  }
  _toggleDrawer = ()=>{
    this.props.navigation.toggleDrawer();
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
