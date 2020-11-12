import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Entries from './Entries'
import Graphs from './Graphs'
import FooterComponent from './FooterComponent'

const NestedStack = createStackNavigator()

export default function AppLoggedIn() {
    return (
        <>
            <NavigationContainer independent={ true }>
                <NestedStack.Navigator initialRouteName="Entries">
                    <NestedStack.Screen options={{ headerShown:false }} name="Entries" component={ Entries } />
                    <NestedStack.Screen options={{ headerShown:false }} name="Graphs" component={ Graphs } />
                </NestedStack.Navigator>
                <FooterComponent />
            </NavigationContainer>
        </>
    )
}
