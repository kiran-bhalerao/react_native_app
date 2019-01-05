import Carousel from 'react-native-snap-carousel'
import React from 'react'
import { StyleSheet, Text, Button, View, Dimensions } from 'react-native'

const horizontalMargin = 0
const slideWidth = 280

const sliderWidth = Dimensions.get('window').width
const itemWidth = slideWidth + horizontalMargin * 2
const itemHeight = 200

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    marginTop: 20
    // other styles for the item container
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1,
    backgroundColor: '#fcc9cf',
    borderRadius: 20,
    // other styles for the inner container
  }
})

class MyCarousel extends React.Component {
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <View style={styles.slideInnerContainer}>
        <Text>{item.title}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c
        }}
        data={this.props.data}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout={'default'}
        autoplay={true}
        firstItem = {2}
        loop={true}
        // layout={'tinder'}
        // layoutCardOffset={18}
      />
    )
  }
}

export default MyCarousel
