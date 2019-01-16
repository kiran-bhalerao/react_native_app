import React from "react";
import { StyleSheet, Text, View ,Button} from "react-native";
import CustomTab from '../custom_components/CustomTab'
import Image from 'react-native-remote-svg'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login Component!</Text>
        <Button onPress={() => this.props.navigation.navigate('main')}  title='Go Home'/>
        <View style={styles.bottomSection}>
        <Image
          source={require('../../assets/svg/wave.svg')}
          // style={{ marginTop: 1 }}
        />
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomSection: {
    // flexDirection: 'column',
    width: '100%'
    // backgroundColor: 'yellow'
    // justifyContent: 'space-between'
  },
});