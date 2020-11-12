import React from 'react'
import { 
    Footer,
    FooterTab,
    Button,
    Text
} from 'native-base'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export default function FooterComponent() {
    return (
        <Footer>
            <FooterTab style={{
                backgroundColor:'white'
            }}>
                <Button>
                    <MaterialCommunityIcons  
                        name="library-books" 
                        color="#32a4a8" 
                        size={ 27 }
                    />
                </Button>
                <Button>
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