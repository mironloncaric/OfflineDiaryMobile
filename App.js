import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { 
  Container, 
  Header, 
  Body, 
  Title, 
  Text, 
  Footer, 
  FooterTab,
  Button
} from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './components/Login'
import Entries from './components/Entries'
import Graphs from './components/Graphs'
import AppLoggedIn from './components/AppLoggedIn'

const Stack = createStackNavigator()

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false })
  }

  render() {
    if(this.state.loading){
      return (
        <View style={{
          flex:1,
          justifyContent:'center',
          alignContent:'center'
        }}>
          <Text>Loading...</Text>
        </View>
      )
    }
    else {
      return (
        <NavigationContainer>
          <Container>
            <Header style={ styles.container }>
                <Body >
                    <Title style={ styles.title }>Offline Diary</Title>
                </Body>
            </Header>
            <Stack.Navigator 
              initialRouteName="Login" 
              style={ styles.container }
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Login" component={ Login } />
              <Stack.Screen name="AppLoggedIn" component={ AppLoggedIn } />
            </Stack.Navigator>
          </Container>
        </NavigationContainer>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#32a4a8'
  }
});
