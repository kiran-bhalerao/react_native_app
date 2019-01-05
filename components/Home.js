import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyCarousel from '../components/MyCarousel'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base'
import { DrawerActions } from 'react-navigation'

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
  render() {
    // alert(!!this.props.navigation)
    return (
      <MyCarousel
        title={'Featured Business Categories'}
        data={this.state.business}
      />
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
