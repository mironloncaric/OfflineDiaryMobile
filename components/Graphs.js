import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'native-base'

import FooterComponent from './FooterComponent'

export default function Graphs() {
    return (
        <>
            <ScrollView style={{
                justifyContent:'center',
                alignContent:'center'
            }}>
                <Text>Graphs</Text>
            </ScrollView>
            <FooterComponent />
        </>
    )
}
