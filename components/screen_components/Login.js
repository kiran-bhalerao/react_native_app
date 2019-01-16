import React from "react";
import { StyleSheet, Text, View ,Button} from "react-native";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login Component!</Text>
        <Button onPress={() => this.props.navigation.navigate('main')}  title='Go Home'/>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});