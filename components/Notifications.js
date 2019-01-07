import React from "react";
import { StyleSheet, Text, View ,Button} from "react-native";

class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Notifications Component!</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')}  title='Go Home'/>
      </View>
    );
  }
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});