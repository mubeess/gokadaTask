import React from 'react'
import { View, Text,TouchableOpacity,Button,StyleSheet} from 'react-native'
import {connect} from 'react-redux'

function Users({users}) {
   return (
    users.users.length?(
        users.users.map(user=>(
            <TouchableOpacity style={styles.post} key={user.id}>
            <Text style={styles.title}>{user.title}</Text>
            <View style={{
                height:50,
                width: 50,
                backgroundColor:user.completed?'green':'red',
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 50
            }}></View>
            <Text style={styles.ind}>
                {user.completed?'Completed':'Not Completed'}
            </Text>
        </TouchableOpacity>
        ))
        
    ):(
<View style={styles.loading}>
    <Text>loadinggg......</Text>
</View>
    )
    
    )
    
}
function mapStateToProps(state) {
    return{
        users:state.users
    }
}
const styles=StyleSheet.create({
    post:{
    height: 150,
    backgroundColor:'#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
    },
    title:{
        fontSize:15,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    ind:{
        textAlign:'center',
        fontSize: 15,
        color: 'gray'
    },
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default connect(mapStateToProps)(Users) 