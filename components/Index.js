import React,{useEffect} from 'react'
import { View, Text,ScrollView,StatusBar } from 'react-native'
import {connect} from 'react-redux'
import {UsersInit} from '../AppData/action/index'
import Users from './Users'
import Heading from './Heading'

 function Index({navigation,initUsers}) {
    function init(params) {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
        console.log(json)
        let minifiedJson= json.slice(0,10);
        initUsers(minifiedJson)
        }
        )
    }


     useEffect(()=>{
         init()
     },[])

function openDrawer() {
    navigation.openDrawer()
}
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <StatusBar backgroundColor='black'></StatusBar>
         <Heading open={openDrawer} title='Data fetched from json-place holder'></Heading>
         <Users></Users>
        </ScrollView>
    )
}

function mapActionToProps(dispatch) {
    return{
        initUsers:(users)=>{dispatch(UsersInit(users))}
    }
}

export default connect('',mapActionToProps)(Index) 