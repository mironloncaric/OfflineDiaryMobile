import React from 'react'
import { 
    Footer,
    FooterTab,
    Button,
    Text
} from 'native-base'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function FooterComponent() {

    const navigation = useNavigation()

    return (
        <Footer>
            <FooterTab style={{
                backgroundColor:'white'
            }}>
                <Button
                    onPress={ () => navigation.navigate('AppLoggedIn', { screen: 'Entries' }) }
                >
                    <MaterialCommunityIcons  
                        name="library-books" 
                        color="#32a4a8" 
                        size={ 27 }
                    />
                </Button>
                <Button
                    onPress={ () => navigation.navigate('AppLoggedIn', { screen: 'Graphs' }) }
                >
                    <Entypo 
                        name="bar-graph" 
                        size={ 27 } 
                        color="#32a4a8" 
                    />
                </Button>
            </FooterTab>
        </Footer>
    )
}