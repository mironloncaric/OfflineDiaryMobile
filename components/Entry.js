import { Button, View, Text } from 'native-base'
import { TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

export default function Entry(props) {
    return (
        <View style={{
            backgroundColor:'#dbdbdb',
            borderRadius:2,
            padding:7,
            width:'100%',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>
            <Text style={{
                width:'40%'
            }}>Dear Diary,</Text>
            <View style={{
                width:'60%',
            }}>
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap'
                }}>
                    <Text style={{
                        width:'70%',
                        textAlign:'right',
                        paddingRight:10
                    }}>7/7/2000 16:16</Text>
                    <Text style={{
                        width:'20%',
                        textAlign:'center',
                        borderRightWidth: 1,
                        borderRightColor: '#9c9c9c',
                        borderLeftWidth: 1,
                        borderLeftColor: '#9c9c9c'
                    }}>😀</Text>
                    <TouchableHighlight style={{
                        width:'7%',
                    }}>
                        <Text style={{
                            textAlign:'right'
                        }}>x</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})