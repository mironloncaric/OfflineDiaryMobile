import React, { useState } from 'react'
import { Text, Textarea, View, Button } from 'native-base'
import { StyleSheet, Picker } from 'react-native'

export default function Input() {

    const [emoji, setEmoji] = useState('😀')

    return (
        <View style={{
            borderBottomColor:'#dbdbdb',
            borderBottomWidth:1,
            marginBottom:10
        }}>
            <View style={{
                borderWidth:1,
                borderColor:'#dbdbdb',
                marginBottom:10,
                borderRadius:4
            }}>
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    borderWidth:1,
                    borderColor:'#dbdbdb'
                }}>
                    <View style={ styles.header }>
                        <Text>Dear Diary,</Text>
                    </View>
                    <Picker
                        selectedValue={ emoji }
                        onValueChange={ value => setEmoji(value) }
                        style={{
                            width:'25%',
                            height:'100%',
                            borderColor:'#dbdbdb',
                            borderWidth:1
                        }}
                    >
                        <Picker.Item label="😀" value="😀" />
                        <Picker.Item label="🤮" value="🤮" />
                        <Picker.Item label="😍" value="😍" />
                        <Picker.Item label="😎" value="😎" />
                        <Picker.Item label="😢" value="😢" />
                    </Picker>
                </View>
                <Textarea 
                    rowSpan={ 5 }
                    bordered
                    style={{
                        marginTop:0
                    }}
                />
            </View>
            <Button style={{
                marginTop:0,
                marginBottom:10,
                backgroundColor:'#32a4a8'
            }}>
                <Text>Submit</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#dbdbdb',
        borderRadius:2,
        padding:7,
        width:'75%',
        flexDirection:'row',
        flexWrap:'wrap'
    }
})