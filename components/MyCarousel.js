import Carousel from 'react-native-snap-carousel'
import React from 'react'
import { StyleSheet, Text, Button, View, Dimensions } from 'react-native'

const horizontalMargin = 20
const slideWidth = 280

const sliderWidth = Dimensions.get('window').width
const itemWidth = slideWidth + horizontalMargin * 2
const itemHeight = 200
const data = ['a', 'b']
const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin
    // other styles for the item container
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1
    // other styles for the inner container
  }
})

class MyCarousel extends React.Component {
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <View style={styles.slideInnerContainer} />
      </View>
    )
  }

  render() {
    return (
      <Carousel
        data={data}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    )
  }
}

export default MyCarousel
