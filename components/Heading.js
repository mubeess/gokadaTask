import React from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Heading(props) {
    return (
        <View style={styles.head}>
            <TouchableOpacity onPress={()=>{ 
                props.open()
            }}>
                <Image style={styles.opt} source={require('../assets/optt.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    head:{
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom: 10
    },
    title:{
        textAlign: 'center',
        color: 'black',
        marginTop: 10,
        fontWeight: 'bold',
    },
    opt:{
        width: 50,
        height: 50
    }
})