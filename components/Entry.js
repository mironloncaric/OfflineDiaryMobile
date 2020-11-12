import { Button, View, Text } from 'native-base'
import { TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

export default function Entry(props) {
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
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
                        <Text style={ styles.date }>{ props.date }</Text>
                        <Text style={ styles.emoji }>{ props.emoji }</Text>
                        <TouchableHighlight style={{
                                width:'10%',
                            }}
                            onPress={ () => console.log('Hello world') }
                        >
                            <Text style={ styles.x }>x</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{
                padding:5
            }}>
                <Text>{ props.content }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        width:'70%',
        textAlign:'right',
        paddingRight:10
    },
    x: {
        textAlign:'left',
        paddingLeft:10
    },
    emoji: {
        width:'20%',
        textAlign:'center',
        borderRightWidth: 1,
        borderRightColor: '#9c9c9c',
        borderLeftWidth: 1,
        borderLeftColor: '#9c9c9c'
    },
    header: {
        backgroundColor:'#dbdbdb',
        borderRadius:2,
        padding:7,
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    container: {
        borderColor:'#dbdbdb',
        borderRadius:4,
        borderWidth:1,
        marginBottom:10
    }
})