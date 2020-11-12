import React from 'react'
import { View, Text, ScrollableTab } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

import Entry from './Entry'
import EntryInput from './EntryInput'
import FooterComponent from './FooterComponent'

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
        <>
            <ScrollView >
                <View style={{
                    alignSelf:'center',
                    width:'96%',
                    margin:10,
                    alignContent:'center'
                }}>
                    <EntryInput />
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
            <FooterComponent />
        </>
    )
}
