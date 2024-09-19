import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import Header2 from '../components/header2';
import Category2 from '../components/category2';
import Quote from '../components/quote';

const ListScreen = (props) => {
    console.log(props);
  return (
    <ScrollView style={styles.container}>
        <Header2 />
        <View style={styles.content}>
            <Category2 />
            <Quote />
        </View>
    </ScrollView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#ff9600',
    },

    content: {
        alignItems:'center',
    },
    
    button1: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        height: 90,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
    }

})
