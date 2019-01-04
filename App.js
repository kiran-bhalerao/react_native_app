import React from 'react'
import { createStackNavigator } from 'react-navigation'
import AppStack from './components/AppStack';


const AppStackNavigator = createStackNavigator({
  main: {
    screen: AppStack,
    navigationOptions: {
      title: 'App Name'
    }
  }
})

class App extends React.Component {
  render() {
    return <AppStackNavigator />
  }
}

export default App
