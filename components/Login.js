import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Container, Item, Text, Button } from 'native-base'

export default function Login() {
    
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [name, setName] = useState('')
    const [userExists, setUserExists] = useState(false)

    const handleSubmit = () => {
        console.log(password, checkPassword, name)
    }

    return (

        <Container style={ styles.container }>
            <Text style={ styles.text }>
                { userExists ? 'Dobrodošli natrag!' : 'Unesite ime i stvorite šifru:' }
            </Text>
            { !userExists &&
                <Item style={ styles.item } regular>
                    <Input
                        onChangeText={ text => setName(text) }
                        placeholder="Ime" 
                    />
                </Item>
            }
            <Item style={ styles.item } regular>
                <Input 
                    onChangeText={ text => setPassword(text) }
                    secureTextEntry={ true } 
                    placeholder="Šifra" 
                />
            </Item>
            { !userExists &&
                <Item style={ styles.item } regular>
                    <Input
                        onChangeText={ text => setCheckPassword(text) }
                        secureTextEntry={ true } 
                        placeholder="Ponovite šifru" 
                    />
                </Item>
            }
            <Button 
                onPress={ handleSubmit } 
                style={ styles.button }
            >
                <Text style={ styles.buttonText }>Log in</Text>
            </Button>
        </Container>

    )
}

const styles = StyleSheet.create({

    container: {
        padding:10,
        flex:1,
        justifyContent: 'center'
    },

    item: {
        marginBottom:10
    },

    text: {
        alignSelf: 'center',
        marginBottom:20,
        fontSize:25,
        fontWeight:'bold'
    },

    button: {
        alignSelf:'center',
        alignContent:'center',
        backgroundColor:'#32a4a8'
    }

})