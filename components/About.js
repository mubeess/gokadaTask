import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Heading from './Heading'

export default function About({navigation}) {

    function openDrawer() {
        navigation.openDrawer()
    }
    return (
        <View style={styles.cont}>
            <Heading open={openDrawer} title='About Me'></Heading>
            <View style={styles.content}>
                <Text style={styles.txt}>My Name is Mubarak Ibrahim, a Tech enthusiast
                    from the north-eastern part of Nigeria. I specialise on react and react native for 
                    web and mobile apps dev. Also experienced in Node/Express 
                    as well as mongodb, in short a MERN Stack developer.
                      I'm always optimistic to learn new tech trends most especially
                    when it comes to java script world.
                </Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    cont:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        alignItems: 'center',
        flex:1,
        marginTop: 30
    },
    txt:{
        fontSize: 25,
        textAlign: 'justify',
        marginRight: 20,
        marginLeft: 20,
        color: 'gray'
    }
})