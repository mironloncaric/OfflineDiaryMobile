import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { Container, Header, Body, Title, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/native'

import Login from './components/Login'

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
        <Text>Hello world</Text>
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
            <Stack.Navigator style={ styles.container }>
              <Login />
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
