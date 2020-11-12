import React from 'react'
import { View, Text, ScrollableTab } from 'native-base'

import Entry from './Entry'
import { ScrollView } from 'react-native-gesture-handler'

export default function Entries() {

    const entries = [
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        },
        {
            emoji:'😀',
            content:'Est incididunt ut sunt non cupidatat magna elit do.',
            id:'#1',
            time: 'asdf',
            date: '7/7/7777 77:77'
        }
    ]

    return (
        <ScrollView >
            <View style={{
                alignSelf:'center',
                width:'96%',
                margin:10,
                alignContent:'center'
            }}>
                {
                    entries.map((entry, id) => (
                        <Entry 
                            key={ id }
                            emoji={ entry.emoji }
                            date={ entry.date }
                            content={ entry.content }
                        />
                    ))
                }
            </View>
        </ScrollView>
    )
}
