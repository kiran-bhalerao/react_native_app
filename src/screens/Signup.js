import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import CustomTab from '../custom_components/CustomTab'
import Image from 'react-native-remote-svg'
import THEME from '../Theme.app'

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    mobile: '',
    cpassword: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: '800',
            color: '#000'
          }}
        >
          SIGNUP
        </Text>
        <View style={styles.topSection}>
          {/*          <ScrollView
            style={{
              width: '100%'
            }}
            contentContainerStyle={{ justifyContent: 'center', marginTop: 20 }}
            showsVerticalScrollIndicator={false}
          >*/}
          <View style={styles.topSectionContainer}>
            <TextInput
              style={styles.inputText}
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='username'
              placeholderTextColor='#A4A4A4'
              underlineColorAndroid='transparent'
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <TextInput
              style={styles.inputText}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='mobile number'
              placeholderTextColor='#A4A4A4'
              underlineColorAndroid='transparent'
              onChangeText={mobile => this.setState({ mobile })}
              value={this.state.mobile}
            />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='password'
              placeholderTextColor='#A4A4A4'
              underlineColorAndroid='transparent'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='confirm password'
              placeholderTextColor='#A4A4A4'
              underlineColorAndroid='transparent'
              onChangeText={password => this.setState({ cpassword })}
              value={this.state.cpassword}
            />
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('main')}
            >
              <View style={styles.loginButton}>
                <Text style={{ color: '#fff' }}>SIGNUP</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('login')}
            >
              <Text
                style={{
                  marginTop: 14,
                  fontSize: 16,
                  color: THEME.COLOR,
                  fontFamily: 'Nunito-Regular'
                }}
              >
                Already have an account, login !
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {/*</ScrollView>*/}
        </View>
        <View style={styles.bottomSection}>
          <ImageBackground
            source={require('../../assets/img/wave.png')}
            style={{
              width: '100%',
              height: 110,
              justifyContent: 'flex-end',
              paddingBottom: 10,
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#EBEBEB',
                fontFamily: 'Nunito-Regular'
              }}
            >
              SICCA APP @2019
            </Text>
          </ImageBackground>
        </View>
      </View>
    )
  }
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topSection: {
    // backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30
  },
  bottomSection: {
    // flexDirection: 'column',
    width: '100%'
    // backgroundColor: 'yellow'
    // justifyContent: 'space-between'
  },
  topSectionContainer: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    width: '100%'
  },
  loginButton: {
    backgroundColor: THEME.COLOR,
    width: '50%',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    zIndex: 999
  },
  inputText: {
    backgroundColor: '#EBEBEB',
    width: '80%',
    marginTop: 14,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    justifyContent: 'center',
    zIndex: 999,
    fontSize: 16
  }
})
