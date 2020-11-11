import React from 'react'
import { View, Text } from 'native-base'

import Entry from './Entry'

export default function Entries() {

    const entries = [
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1'
        }
    ]

    return (
        <View style={{
            alignSelf:'center',
            width:'96%',
            margin:10,
            flexWrap:'wrap',
            alignContent:'center'
        }}>
            {
                entries.map((entry, id) => (
                    <Entry 
                        key={ id }
                    />
                ))
            }
        </View>
    )
}
