import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import FeatherIcon from 'react-native-vector-icons/Feather'



class CustomTab extends React.Component {
  _renderIconColor = icon => {
    return this.props.iconsName == icon ? '#4BC24E' : '#a9a9a9'
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name='home'
          size={26}
          color={this._renderIconColor('home')}
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Icon
          name='timeline'
          size={27}
          color={this._renderIconColor('about')}
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Icon
          name='spa'
          size={24}
          color={this._renderIconColor('tab3')}
          onPress={() => this.props.navigation.navigate('Tab3')}
        />
        <Icon
          name='layers'
          size={25}
          color={this._renderIconColor('tab4')}
          onPress={() => this.props.navigation.navigate('Tab4')}
        />
        <Icon
          name='settings'
          size={24}
          color={this._renderIconColor('tab5')}
          onPress={() => this.props.navigation.navigate('Tab5')}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FBFF',
    paddingRight: 20,
    height: 50,
    paddingLeft: 20
  },
  titleContainer: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  }
}

export default CustomTab
